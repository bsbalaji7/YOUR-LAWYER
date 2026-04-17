import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./CaseHistory.module.css";
import { Clock, User, Shield } from "lucide-react";

export default function CaseHistory({ caseId, onBack }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, [caseId]);

  const loadHistory = async () => {
    setLoading(true);

    // 🔥 GET CURRENT USER
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      console.log("❌ No user logged in");
      setLoading(false);
      return;
    }

    console.log("👤 Current User:", user.id);

    // 🔥 STEP 1: GET ALLOWED CASE IDS
    const { data: allowedCases, error: caseError } = await supabase
      .from("cases")
      .select("id")
      .or(`user_id.eq.${user.id},lawyer_id.eq.${user.id}`);

    if (caseError) {
      console.log("❌ Case Fetch Error:", caseError);
      setLoading(false);
      return;
    }

    const caseIds = allowedCases?.map(c => c.id) || [];

    console.log("✅ Allowed Case IDs:", caseIds);

    if (caseIds.length === 0) {
      setHistory([]);
      setLoading(false);
      return;
    }

    // 🔥 STEP 2: FETCH HISTORY
    let query = supabase
      .from("case_history")
      .select("*")
      .in("case_id", caseIds)
      .order("created_at", { ascending: false });

    // 🔥 OPTIONAL: SPECIFIC CASE FILTER
    if (caseId) {
      console.log("📌 Filtering for caseId:", caseId);
      query = query.eq("case_id", caseId);
    }

    const { data, error } = await query;

    console.log("📦 FINAL HISTORY DATA:", data);
    console.log("❌ ERROR:", error);

    if (!error) {
      setHistory(data || []);
    }

    setLoading(false);
  };

  // 🔥 ICON BASED ON ROLE
  const getIcon = (role) => {
    if (role === "lawyer") return <Shield />;
    return <User />;
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <div className={styles.header}>
        {onBack && (
          <button onClick={onBack} className={styles.backButton}>
            ← Back
          </button>
        )}
        <h2>Case History</h2>
      </div>

      {/* LOADING */}
      {loading ? (
        <p style={{ padding: "20px" }}>Loading history...</p>
      ) : history.length === 0 ? (
        <p style={{ padding: "20px" }}>No history found</p>
      ) : (
        <div className={styles.timeline}>
          {history.map((item, index) => (
            <div key={item.id || index} className={styles.card}>

              <div className={styles.top}>
                {getIcon(item.role)}
                <span>{item.role || "unknown"}</span>
              </div>

              <p className={styles.message}>
                {item.message || "No message"}
              </p>

              <div className={styles.meta}>
                <span>{item.stage || "N/A"}</span>
                <span>{item.status || "N/A"}</span>
              </div>

              <div className={styles.time}>
                <Clock />
                {item.created_at
                  ? new Date(item.created_at).toLocaleString()
                  : "No time"}
              </div>
{/*  */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}