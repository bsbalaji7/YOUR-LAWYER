import { useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./ComplaintForm.module.css";

export default function PoliceComplaint({ onBack }) {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const caseId = `POL-${Date.now()}`;

    const { error } = await supabase.from("cases").insert([
      {
        case_id: caseId,
        title: form.subject,
        type: "Police Complaint",
        category: "Criminal Law",
        description: form.description,
        next_hearing: null
      }
    ]);

    if (!error) {
      alert("Complaint Registered Successfully");
      onBack();
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Raise Police Complaint</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Complaint Subject"
          required
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <textarea
          placeholder="Describe the issue"
          required
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}