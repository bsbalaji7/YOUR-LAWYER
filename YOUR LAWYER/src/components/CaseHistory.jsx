import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./CaseHistory.module.css";
import { Clock, User, Shield } from "lucide-react";

export default function CaseHistory({ caseId, onBack }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // 🔥 CASE-SPECIFIC HISTORY
    if (caseId) {
      console.log("✅ Fetching history for caseId:", caseId);
      fetchHistory(caseId);

      const channel = supabase
        .channel("case-history")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "case_history",
            filter: `case_id=eq.${caseId}`
          },
          (payload) => {
            console.log("🔥 Realtime update:", payload.new);
            setHistory((prev) => [payload.new, ...prev]);
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }

    // 🔥 ALL HISTORY (NO caseId)
    console.log("⚠️ No caseId → fetching ALL history");
    fetchAllHistory();

  }, [caseId]);

  // 🔥 FETCH SINGLE CASE HISTORY
  const fetchHistory = async (id) => {
    setLoading(true);

    const { data, error } = await supabase
      .from("case_history")
      .select("*")
      .eq("case_id", id)
      .order("created_at", { ascending: false });

    console.log("📦 CASE DATA:", data);
    console.log("❌ ERROR:", error);

    if (!error) {
      setHistory(data || []);
    }

    setLoading(false);
  };

  // 🔥 FETCH ALL HISTORY
  const fetchAllHistory = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("case_history")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("📦 ALL HISTORY:", data);
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

            </div>
          ))}
        </div>
      )}
    </div>
  );
}