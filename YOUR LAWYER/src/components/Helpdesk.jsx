import { useState } from "react";
import styles from "./Helpdesk.module.css";

import { useNavigate, Link } from "react-router-dom";

// ✅ Missing imports added
import { Scale, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

// ✅ Add these components if they exist in your project
import UploadFiles from "../components/UploadFiles";
import LegalRightsAwareness from "../components/LegalRightsAwareness";
import LawyersList from "../components/LawyersList";
import CaseStatusTracking from "../components/CaseStatusTracking";

export default function HelpSupport() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "How do I book a lawyer?",
      a: "You can choose a lawyer and book a slot from the lawyers page."
    },
    {
      q: "Is my data secure?",
      a: "Yes, your legal data is encrypted and secure."
    },
    {
      q: "Can I consult multiple lawyers?",
      a: "Yes, you can consult multiple lawyers before choosing one."
    },
    {
      q: "What types of legal services are available?",
      a: "We provide civil, criminal, corporate and family law services."
    },
    {
      q: "How long does it take to get response?",
      a: "Usually within 24 hours depending on urgency."
    },
    {
      q: "Is there any consultation fee?",
      a: "Some lawyers offer free consultation, others may charge."
    }
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const navigate = useNavigate();

  const { profile, signOut } = useAuth();
  const [currentPage, setCurrentPage] = useState("dashboard");

  /* ✅ Bar Council verification state */
  const [barCouncilId, setBarCouncilId] = useState(
    profile?.barCouncilId || ""
  );
  const [isVerified, setIsVerified] = useState(
    !!profile?.barCouncilId
  );

  const handleVerifyBarId = () => {
    if (barCouncilId.trim() === "1234") {
      setIsVerified(true);
    } else {
      alert("Please enter a valid Bar Council ID");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (currentPage === "upload") {
    return <UploadFiles onBack={() => setCurrentPage("dashboard")} />;
  }

  if (currentPage === "legalRights") {
    return (
      <LegalRightsAwareness onBack={() => setCurrentPage("dashboard")} />
    );
  }

  if (currentPage === "lawyersList") {
    return <LawyersList onBack={() => setCurrentPage("dashboard")} />;
  }

  if (currentPage === "caseTracking") {
    return (
      <CaseStatusTracking onBack={() => setCurrentPage("dashboard")} />
    );
  }

  return (
    <div className={styles.dashboardWrapper}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerInner}>
            <div className={styles.headerLeft}>
              <Scale className={styles.headerIcon} />
              <div className={styles.headerTitle}>
                <h1>YOUR LAWYER</h1>
                <p>A Intelligent Legal Assistance Platform</p>
              </div>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.userInfo}>
                <Link to="/Userprofile">
                  <p className={styles.userName}>
                    {profile?.full_name}
                  </p>
                </Link>
                <p className={styles.userRole}>
                  {profile?.role}
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className={styles.signOutButton}
              >
                <LogOut className={styles.signOutIcon} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          <div className={styles.navList}>
            {[
              "Home",
              <Link to="/ConstitutionLaw">Constitution Law</Link>,
              <Link to="/StatutoryLaw">StatutoryLaw</Link>,
              <Link to="/AdministrativeLaw" className={styles.navItem}>
                Administrative Law
              </Link>,
              <Link to="/WomensLaw" className={styles.navItem}>
                Womens Law
              </Link>
            ].map((item, index) => (
              <button key={index} className={styles.navItem}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <h1 className={styles["main-title"]}>Help & Support</h1>

      {/* FAQ */}
      <div className={styles["faq-container"]}>
        <h2 className={styles["faq-heading"]}>
          Frequently asked questions
        </h2>

        {faqs.map((item, i) => (
          <div key={i} className={styles["faq-line"]}>
            <div
              className={styles["faq-question"]}
              onClick={() => toggle(i)}
            >
              <span>{item.q}</span>
              <span
                className={`${styles.arrow} ${
                  active === i ? styles.open : ""
                }`}
              >
                ▼
              </span>
            </div>

            {active === i && (
              <div className={styles["faq-answer"]}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className={styles["form-container"]}>
        <h2 className={styles["form-title"]}>Submit Your Issue</h2>

        <form className={styles["form-box"]}>
          <input
            placeholder="Full Name"
            className={styles["input-field"]}
          />
          <input
            placeholder="Phone Number"
            className={styles["input-field"]}
          />
          <input
            placeholder="Email Address"
            className={styles["input-field"]}
          />
          <textarea
            placeholder="Describe your issue..."
            className={`${styles["input-field"]} ${styles["textarea"]}`}
          ></textarea>

          <button className={styles["submit-btn"]}>
            Submit
          </button>
        </form>
      </div>

      {/* CONTACT */}
      <div className={styles["contact"]}>
        <p>📞 +91 90000 00000</p>
        <p>📧 support@yourlawyer.com</p>
      </div>
    </div>
  );
}