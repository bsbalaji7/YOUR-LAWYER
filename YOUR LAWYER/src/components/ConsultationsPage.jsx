import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./ConsultationsPage.module.css";

export default function ConsultationsPage({ onBack }) {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const handleBook = async (lawyer) => {
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;

  if (!user) {
    alert("Login required");
    return;
  }

  const { error } = await supabase.from("consultations").insert([
    {
      lawyer_id: lawyer.id,
      user_id: user.id, // ✅ SAME ID AS profiles.id
      status: "pending"
    }
  ]);

  if (error) {
    console.error(error);
  } else {
    alert("Consultation booked!");
  }
};

  const fetchConsultations = async () => {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;

    if (!user) return;

    const { data, error } = await supabase
      .from("consultations")
      .select(`
        *,
        profiles:user_id (
          full_name,
          phone,
          email
        )
      `)
      .eq("lawyer_id", user.id);

    if (error) {
      console.error("Error fetching:", error);
    } else {
      setConsultations(data);
    }
  };

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from("consultations")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
      fetchConsultations(); // refresh list
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        ← Back
      </button>

      <h2 className={styles.title}>Consultation Requests</h2>

      {consultations.length === 0 ? (
        <p className={styles.empty}>No consultations</p>
      ) : (
        consultations.map((c) => (
          <div key={c.id} className={styles.card}>
            
            <p className={styles.user}>
              <strong>Name:</strong> {c.profiles?.full_name || "N/A"}
            </p>

            <p className={styles.user}>
              <strong>Phone:</strong> {c.profiles?.phone || "N/A"}
            </p>

            <p className={styles.user}>
              <strong>Email:</strong> {c.profiles?.email || "N/A"}
            </p>

            <p className={`${styles.status} ${styles[c.status]}`}>
              Status: {c.status}
            </p>

            <div className={styles.actions}>
              <button
                className={styles.acceptBtn}
                onClick={() => updateStatus(c.id, "accepted")}
              >
                Accept
              </button>

              <button
                className={styles.rejectBtn}
                onClick={() => updateStatus(c.id, "rejected")}
              >
                Reject
              </button>
            </div>

          </div>
        ))
      )}
    </div>
  );
}