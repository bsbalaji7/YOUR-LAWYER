import { useEffect, useState } from "react";
import {
  Calendar,
  AlertCircle,
  FileText
} from "lucide-react";
import { supabase } from "../lib/supabase";
import styles from "./ActiveCases.module.css";

export default function ActiveCases({ onBack }) {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActiveCases();
  }, []);

  const fetchActiveCases = async () => {
    setLoading(true);

    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    // 🔥 GET ALL CASES (NO FILTER HERE)
    const { data, error } = await supabase
      .from("cases")
      .select("*")
      .eq("user_id", user.id)
      .order("filed_date", { ascending: false });

    if (!error) {
      console.log("ALL CASES:", data);

      // 🔥 FILTER ACTIVE CASES SAFELY
      const activeCases = (data || []).filter(
        (c) =>
          c.status &&
          c.status.toLowerCase().trim() === "active"
      );

      console.log("ACTIVE CASES:", activeCases);

      setCases(activeCases);
    } else {
      console.error(error);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className={styles.caseContainer}>
        <h2 style={{ padding: "30px" }}>Loading Active Cases...</h2>
      </div>
    );
  }

  return (
    <div className={styles.caseContainer}>

      {/* HEADER */}
      <div className={styles.caseHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>

        <div className={styles.headerContent}>
          <h1>Active Cases</h1>
          <p>All ongoing cases under investigation</p>
        </div>
      </div>

      {/* STATS */}
      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <FileText />
          <div>
            <p>Total Active Cases</p>
            <h3>{cases.length}</h3>
          </div>
        </div>
      </div>

      {/* CASE LIST */}
      <div className={styles.caseContent}>
        <div className={styles.casesSection}>
          <h2>Active Case List</h2>

          {cases.length === 0 ? (
            <p style={{ padding: "20px" }}>No active cases found.</p>
          ) : (
            <div className={styles.casesList}>
              {cases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className={`${styles.caseCard} ${styles.active}`}
                >

                  {/* HEADER */}
                  <div className={styles.caseHeader2}>
                    <div className={styles.caseTitle}>
                      <h3>{caseItem.title}</h3>
                      <p className={styles.caseId}>
                        Case No: {caseItem.case_number}
                      </p>
                    </div>

                    <div className={styles.caseStatus}>
                      <AlertCircle className={styles.statusIcon} />
                      <span className={`${styles.statusBadge} ${styles.active}`}>
                        Active
                      </span>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className={styles.caseDescription}>
                    {caseItem.description}
                  </p>

                  {/* DETAILS */}
                  <div className={styles.caseDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detailItem}>
                        <Calendar className={styles.detailIcon} />
                        <div>
                          <p className={styles.detailLabel}>Filed Date</p>
                          <p className={styles.detailValue}>
                            {caseItem.filed_date
                              ? new Date(caseItem.filed_date).toLocaleDateString()
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className={styles.viewDetailsButton}>
                    View Full Details
                  </button>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}