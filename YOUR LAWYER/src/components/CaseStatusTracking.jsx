import { useEffect, useState } from "react";
import {
  Calendar,
  FileText,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";
import { supabase } from "../lib/supabase";
import styles from "./CaseStatusTracking.module.css";

export default function CaseStatusTracking({ onBack }) {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  const stages = [
    "Complaint Filed",
    "In Person Verification",
    "FIR Registered",
    "Under Investigation",
    "Evidence Collection",
    "Charge Sheet Filed",
    "Court Hearing",
    "Court Judgement",
    "Case Closed"
  ];

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    setLoading(true);

    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("cases")
      .select("*")
      .eq("user_id", user.id)
      .order("filed_date", { ascending: false });

    if (!error) {
      setCases(data || []);
    }

    setLoading(false);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle className={styles.statusIcon} />;
      case "Active":
        return <AlertCircle className={styles.statusIcon} />;
      default:
        return <Clock className={styles.statusIcon} />;
    }
  };

  if (loading) {
    return (
      <div className={styles.caseContainer}>
        <h2 style={{ padding: "30px" }}>Loading Cases...</h2>
      </div>
    );
  }

  const totalCases = cases.length;
  const activeCases = cases.filter(c => c.status === "Active").length;
  const resolvedCases = cases.filter(c => c.status === "Resolved").length;

  const nextHearingCase = cases.find(c => c.next_hearing);
  const nextHearing = nextHearingCase
    ? new Date(nextHearingCase.next_hearing).toLocaleDateString()
    : "N/A";

  return (
    <div className={styles.caseContainer}>

      {/* HEADER */}
      <div className={styles.caseHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>

        <div className={styles.headerContent}>
          <h1>Case Status Tracking</h1>
          <p>Track your police complaint in real-time</p>
        </div>
      </div>

      {/* ===== STATS SECTION (NEW ADDED) ===== */}
      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <FileText />
          <div>
            <p>Total Cases</p>
            <h3>{totalCases}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <AlertCircle />
          <div>
            <p>Active Cases</p>
            <h3>{activeCases}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <CheckCircle />
          <div>
            <p>Resolved</p>
            <h3>{resolvedCases}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <Calendar />
          <div>
            <p>Next Hearing</p>
            <h3>{nextHearing}</h3>
          </div>
        </div>
      </div>

      {/* ===== CASE LIST ===== */}
      <div className={styles.caseContent}>
        <div className={styles.casesSection}>
          <h2>Your Cases</h2>

          {cases.length === 0 ? (
            <p style={{ padding: "20px" }}>No cases found.</p>
          ) : (
            <div className={styles.casesList}>
              {cases.map((caseItem) => {
                const currentIndex = stages.indexOf(
                  caseItem.stage || "Complaint Filed"
                );

                return (
                  <div key={caseItem.id} className={styles.caseCard}>
                    
                    <div className={styles.caseHeader2}>
                      <div>
                        <h3>{caseItem.title}</h3>
                        <p className={styles.caseNumber}>
                          Case No: {caseItem.case_number}
                        </p>
                      </div>

                      <div className={styles.caseStatus}>
                        {getStatusIcon(caseItem.status)}
                        <span className={styles.statusBadge}>
                          {caseItem.status}
                        </span>
                      </div>
                    </div>

                    <p className={styles.caseDescription}>
                      {caseItem.description}
                    </p>

                    {/* STAGE TRACKER */}
                    <div className={styles.stageContainer}>
                      {stages.map((stageName, index) => {
                        const isCompleted = index <= currentIndex;

                        return (
                          <div key={stageName} className={styles.stageStep}>
                            <div
                              className={`${styles.stageCircle} ${
                                isCompleted ? styles.completedStage : ""
                              }`}
                            >
                              {isCompleted ? "✓" : index + 1}
                            </div>
                            <p className={styles.stageLabel}>
                              {stageName}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className={styles.caseDetails}>
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
                );
              })}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}