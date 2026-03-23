import { Link } from "react-router-dom";
import { Scale, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import styles from "./CivilLaw.module.css";
import { Home, Users, FileText, Briefcase, Shield } from "lucide-react";

export default function CivilLaw() {
  const { profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const civilTopics = [
    {
      icon: Home,
      title: "Property Law",
      description: "Ownership and property disputes",
      details: [
        "Land ownership and transfer",
        "Tenancy and lease agreements",
        "Inheritance and succession",
        "Property registration"
      ]
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Family-related legal matters",
      details: [
        "Marriage and divorce",
        "Child custody",
        "Maintenance rights",
        "Adoption laws"
      ]
    },
    {
      icon: Briefcase,
      title: "Contract Law",
      description: "Agreements between parties",
      details: [
        "Breach of contract",
        "Business agreements",
        "Compensation claims",
        "Legal obligations"
      ]
    },
    {
      icon: Shield,
      title: "Consumer Law",
      description: "Protection of consumer rights",
      details: [
        "Defective products",
        "Unfair trade practices",
        "Online fraud",
        "Consumer court cases"
      ]
    },
    {
      icon: FileText,
      title: "Civil Procedure Code",
      description: "Rules for civil court cases",
      details: [
        "Filing civil suits",
        "Court procedures",
        "Evidence submission",
        "Execution of judgment"
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
                <p>Civil Law Assistance Platform</p>
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

      {/* NAVIGATION */}
      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          <div className={styles.navList}>
            <Link to="/" className={styles.navItem}>Home</Link>
            <Link to="/ConstitutionLaw" className={styles.navItem}>Constitution Law</Link>
            <Link to="/CriminalLaw" className={styles.navItem}>Criminal Law</Link>
            <Link to="/CivilLaw" className={styles.navItem}>Civil Law</Link>
            <Link to="/WomensLaw" className={styles.navItem}>Womens Law</Link>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className={styles.mainContent}>

        {/* HERO */}
        <div className={styles.content}>
          <div className={styles.textArea}>
            <h1 className={styles.title}>Civil Law</h1>
            <p className={styles.subtitle}>
              Resolving disputes between individuals, organizations, and businesses
            </p>
            <a href="#topics" className={styles.btn}>Explore Topics</a>
          </div>

          <img
            className={styles.topimgCL}
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            alt="Civil Law"
          />
        </div>

        {/* CONTENT */}
        <div id="topics" className={styles.topContainer}>

          <div className={styles.slogan}>
            <h4>Justice:</h4>
            <p>
              Civil law protects rights and ensures fairness <br />
              in everyday life disputes
            </p>
          </div>

          {/* INTRO */}
          <div className={styles.introContainer}>
            <p>
              Civil law deals with disputes between individuals and organizations.
              It focuses on resolving conflicts through compensation rather than punishment.

              <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc" alt="" />

              It covers areas such as property, contracts, family issues, and consumer rights.
              Civil law ensures peaceful resolution and legal protection.
            </p>
          </div>

          {/* TYPES */}
          <div className={styles.conPara}>
            <h4>Types of Civil Law</h4>
            <p>
              Civil law includes contract law, property law, family law, tort law,
              and consumer protection law. Each area deals with different disputes.
            </p>
          </div>

          {/* PROCEDURE */}
          <div className={styles.introContainer2}>
            <h2>Civil Court Procedure</h2>
            <p>
              Civil cases follow a structured legal process:

              <img src="https://images.unsplash.com/photo-1555374018-13a8994ab246" alt="" />

              Filing a suit → Notice → Evidence → Arguments → Judgment.
              Courts ensure justice through fair hearing.
            </p>
          </div>

          {/* RELIEFS */}
          <div className={styles.introContainer}>
            <h2>Reliefs in Civil Law</h2>
            <ul>
              <li>Compensation (Damages)</li>
              <li>Injunction (Court Orders)</li>
              <li>Specific Performance</li>
              <li>Restitution</li>
            </ul>
          </div>

          {/* CARDS */}
          <div className={styles.articalCon}>
            {civilTopics.map((item, index) => {
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
          <h2 className={styles.newsHeading}>Latest Civil Law Updates</h2>

          <div className={styles.newsLayout}>
            <div className={styles.newsGrid}>
              <div className={styles.newsCard}>
                <img src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab" />
                <p>Supreme Court on Property Disputes</p>
              </div>

              <div className={styles.newsCard}>
                <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb" />
                <p>Consumer Protection Updates</p>
              </div>

              <div className={styles.newsCard}>
                <img src="https://images.unsplash.com/photo-1555374018-13a8994ab246" />
                <p>Family Law Reforms</p>
              </div>
            </div>

            <div className={styles.newsSidebar}>
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" />
              <p>
                Civil law reforms aim to improve dispute resolution speed and ensure justice accessibility.
              </p>
              <button>Read more...</button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Civil Law Awareness</p>
          <p className={styles.footerText}>
            Protecting rights and resolving disputes through legal frameworks.
          </p>
        </div>
      </footer>

    </div>
  );
}