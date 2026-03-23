import { Link } from "react-router-dom";
import { Scale, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import styles from "./AdministrativeLaw.module.css";
import {
  ShieldCheck,
  Users,
  Gavel,
  FileText,
  Phone,
  AlertTriangle
} from "lucide-react";

export default function KnowYourRights() {
  const { profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const rightsList = [
    {
      icon: ShieldCheck,
      title: "Right to Equality",
      description: "All citizens are equal before law.",
      details: [
        "No discrimination based on religion or caste",
        "Equal protection under law",
        "Fair treatment in legal system"
      ]
    },
    {
      icon: Users,
      title: "Right to Freedom",
      description: "Freedom of speech and expression.",
      details: [
        "Freedom of speech",
        "Freedom to assemble peacefully",
        "Freedom of movement"
      ]
    },
    {
      icon: Gavel,
      title: "Right Against Exploitation",
      description: "Protection from forced labor.",
      details: [
        "No child labor",
        "No forced labor",
        "Protection against trafficking"
      ]
    },
    {
      icon: FileText,
      title: "Legal Rights",
      description: "Rights during arrest and trial.",
      details: [
        "Right to lawyer",
        "Right to fair trial",
        "Right to remain silent"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Women Rights",
      description: "Special protections for women.",
      details: [
        "Protection from domestic violence",
        "Workplace safety (POSH)",
        "Equal pay rights"
      ]
    },
    {
      icon: Phone,
      title: "Emergency Rights",
      description: "Help during emergencies.",
      details: [
        "Dial 100 for police",
        "Dial 1091 for women helpline",
        "Free legal aid available"
      ]
    }
  ];

  return (
    <div className={styles.dashboardWrapper}>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerInner}>

            <div className={styles.headerLeft}>
              <Scale className={styles.headerIcon} />
              <div className={styles.headerTitle}>
                <h1>YOUR LAWYER</h1>
                <p>Know Your Rights</p>
              </div>
            </div>

            <div className={styles.headerRight}>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{profile?.full_name}</p>
                <p className={styles.userRole}>{profile?.role}</p>
              </div>

              <button onClick={handleSignOut} className={styles.signOutButton}>
                <LogOut />
                Sign Out
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* NAV */}
      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          <div className={styles.navList}>
            <Link to="/" className={styles.navItem}>Home</Link>
            <Link to="/ConstitutionLaw" className={styles.navItem}>Constitution Law</Link>
            <Link to="/CriminalLaw" className={styles.navItem}>Criminal Law</Link>
            <Link to="/CivilLaw" className={styles.navItem}>Civil Law</Link>
            <Link to="/KnowYourRights" className={styles.navItem}>Know Your Rights</Link>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className={styles.mainContent}>

        {/* HERO */}
        <div className={styles.content}>
          <div className={styles.textArea}>
            <h1 className={styles.title}>Know Your Rights</h1>
            <p className={styles.subtitle}>
              Understanding your legal rights is the first step to justice and protection
            </p>
            <a href="#rights" className={styles.btn}>Explore Rights</a>
          </div>

          <img
            className={styles.topimgCL}
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            alt="rights"
          />
        </div>

        {/* CONTENT */}
        <div id="rights" className={styles.topContainer}>

          {/* INTRO */}
          <div className={styles.introContainer}>
            <p>
              Every citizen has legal rights that protect them from injustice and unfair treatment.
              Knowing your rights helps you take action when needed.

              <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc" alt="" />

              Rights ensure freedom, equality, and dignity in society.
              They are guaranteed by the Constitution and various laws.
            </p>
          </div>

          {/* IMPORTANCE */}
          <div className={styles.conPara}>
            <h4>Why Knowing Your Rights is Important</h4>
            <p>
              It empowers individuals, prevents exploitation, and ensures access to justice.
              Awareness helps you respond correctly in legal situations.
            </p>
          </div>

          {/* RIGHTS GRID */}
          <div className={styles.articalCon}>
            {rightsList.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={styles.articalConIN}>
                  <Icon />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <ul>
                    {item.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>

        {/* NEWS */}
        <section className={styles.newsSection}>
          <h2 className={styles.newsHeading}>Latest Legal Awareness</h2>

          <div className={styles.newsLayout}>
            <div className={styles.newsGrid}>
              <div className={styles.newsCard}>
                <img src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab" />
                <p>Know your arrest rights</p>
              </div>

              <div className={styles.newsCard}>
                <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb" />
                <p>Women safety laws updated</p>
              </div>

              <div className={styles.newsCard}>
                <img src="https://images.unsplash.com/photo-1555374018-13a8994ab246" />
                <p>Consumer rights awareness</p>
              </div>
            </div>

            <div className={styles.newsSidebar}>
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" />
              <p>
                Awareness of rights helps protect individuals from injustice.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Know Your Rights</p>
          <p className={styles.footerText}>
            Stay informed. Stay protected. Know your legal rights.
          </p>
        </div>
      </footer>

    </div>
  );
}