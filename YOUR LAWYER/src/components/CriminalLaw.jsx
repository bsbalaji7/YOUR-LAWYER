import { Link } from "react-router-dom";
import {
  Scale,
  LogOut,
  ShieldAlert,
  Gavel,
  Siren,
  FileText,
  Users
} from "lucide-react";

import { useAuth } from "../contexts/AuthContext.jsx";
import styles from "./CriminalLaw.module.css";

export default function CriminalLaw() {
  const { profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const criminalLaws = [
    {
      icon: Gavel,
      title: "Indian Penal Code (IPC)",
      description: "Defines crimes and punishments in India.",
      details: [
        "Section 302 – Murder",
        "Section 376 – Rape",
        "Section 420 – Cheating",
        "Section 498A – Domestic cruelty"
      ]
    },
    {
      icon: ShieldAlert,
      title: "Criminal Procedure Code (CrPC)",
      description: "Procedure for arrest & trial.",
      details: [
        "Section 41 – Arrest rules",
        "Section 167 – Custody",
        "Section 438 – Anticipatory Bail",
        "Section 125 – Maintenance"
      ]
    },
    {
      icon: Siren,
      title: "Cyber Crime Laws",
      description: "Protection against online crimes.",
      details: [
        "IT Act Section 66 – Hacking",
        "Section 67 – Obscene content",
        "Identity theft laws",
        "Online fraud punishments"
      ]
    },
    {
      icon: Users,
      title: "Women Protection Laws",
      description: "Legal protection for women.",
      details: [
        "Domestic Violence Act",
        "POSH Act",
        "Dowry Prohibition Act",
        "Sexual assault laws"
      ]
    },
    {
      icon: FileText,
      title: "New Criminal Laws (2023)",
      description: "Latest updated Indian laws.",
      details: [
        "Bharatiya Nyaya Sanhita (BNS)",
        "BNSS replaces CrPC",
        "BSA replaces Evidence Act",
        "Modern criminal justice system"
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
                <p>Criminal Law Assistance</p>
              </div>
            </div>

            <div className={styles.headerRight}>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{profile?.full_name}</p>
                <p className={styles.userRole}>{profile?.role}</p>
              </div>

              <button onClick={handleSignOut} className={styles.signOutButton}>
                <LogOut className={styles.signOutIcon} />
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
            <Link to="/WomensLaw" className={styles.navItem}>Womens Law</Link>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className={styles.mainContent}>

  {/* HERO */}
  <div className={styles.content}>
    <div className={styles.textArea}>
      <h1 className={styles.title}>Criminal Law</h1>
      <p className={styles.subtitle}>
        Understand crimes, punishments & your legal rights in India
      </p>
      <a href="#topics" className={styles.btn}>Explore Laws</a>
    </div>

    <img
      className={styles.topimgCL}
      src="/src/components/assets/CriminalLaw.jpeg"
      alt="Criminal Law"
    />
  </div>

  {/* INTRO */}
  <div id="topics" className={styles.topContainer}>
    <h2>What is Criminal Law?</h2>
    <p>
      Criminal law is a body of law that deals with crimes, punishment, and justice.
      It protects society by defining illegal actions and providing penalties.
    </p>
  </div>

  {/* 🔥 DETAILED SECTION */}
  <div className={styles.introContainer}>
    <h2>Importance of Criminal Law</h2>

    <p>
      Criminal law is essential for maintaining law and order in society. It helps
      in preventing crimes by creating fear of punishment. It ensures justice for
      victims and protects the rights of accused persons.
    </p>

    <p>
      It defines acceptable behavior and punishes actions like murder, theft,
      assault, fraud, cybercrime, and domestic violence. Without criminal law,
      society would face chaos and insecurity.
    </p>

    <h3>Objectives of Criminal Law</h3>
    <ul>
      <li>Maintain law and order</li>
      <li>Prevent crime</li>
      <li>Protect citizens</li>
      <li>Deliver justice</li>
      <li>Reform criminals</li>
    </ul>
  </div>

  {/* 🔥 TYPES OF CRIMES */}
  <div className={styles.introContainer2}>
    <h2>Types of Crimes</h2>

    <p><strong>1. Violent Crimes:</strong> Murder, assault, rape</p>
    <p><strong>2. Property Crimes:</strong> Theft, robbery, burglary</p>
    <p><strong>3. Cyber Crimes:</strong> Hacking, online fraud</p>
    <p><strong>4. White Collar Crimes:</strong> Corruption, tax fraud</p>
    <p><strong>5. Organized Crimes:</strong> Drug trafficking, human trafficking</p>
  </div>

  {/* 🔥 PUNISHMENTS */}
  <div className={styles.conPara}>
    <h2>Types of Punishments in India</h2>

    <ul>
      <li>Death Penalty</li>
      <li>Life Imprisonment</li>
      <li>Imprisonment (Simple & Rigorous)</li>
      <li>Fine</li>
      <li>Forfeiture of property</li>
    </ul>

    <p>
      Punishments are designed to deter crime and reform offenders. Courts decide
      punishment based on the severity of the crime.
    </p>
  </div>

  {/* 🔥 FIR PROCESS */}
  <div className={styles.introContainer}>
    <h2>FIR (First Information Report)</h2>

    <p>
      FIR is the first step in the criminal justice system. It is filed in police
      stations when a crime is reported.
    </p>

    <ul>
      <li>Anyone can file FIR</li>
      <li>Police must register FIR (for cognizable offenses)</li>
      <li>Free copy must be given</li>
      <li>Can be filed online in some states</li>
    </ul>
  </div>

  {/* 🔥 RIGHTS OF ACCUSED */}
  <div className={styles.introContainer2}>
    <h2>Rights of an Accused Person</h2>

    <ul>
      <li>Right to fair trial</li>
      <li>Right to lawyer</li>
      <li>Right against self-incrimination</li>
      <li>Right to bail</li>
      <li>Right to remain silent</li>
    </ul>
  </div>

  {/* 🔥 POLICE POWERS */}
  <div className={styles.introContainer}>
    <h2>Police Powers & Duties</h2>

    <ul>
      <li>Arrest suspects</li>
      <li>Investigate crimes</li>
      <li>Collect evidence</li>
      <li>Maintain law & order</li>
      <li>Protect citizens</li>
    </ul>
  </div>

  {/* 🔥 NEW LAWS */}
  <div className={styles.conPara}>
    <h2>New Criminal Laws (2023)</h2>

    <p>
      India introduced new criminal laws replacing old British-era laws:
    </p>

    <ul>
      <li>Bharatiya Nyaya Sanhita (BNS)</li>
      <li>Bharatiya Nagarik Suraksha Sanhita (BNSS)</li>
      <li>Bharatiya Sakshya Adhiniyam (BSA)</li>
    </ul>

    <p>
      These laws focus on faster justice, digital evidence, and modern crimes.
    </p>
  </div>

  {/* 🔥 CARDS SECTION (KEEP YOUR EXISTING) */}
  <section className={styles.rightsSection}>
    <h2 className={styles.sectionTitle}>Key Criminal Laws</h2>

    <div className={styles.rightsGrid}>
      {criminalLaws.map((law, index) => {
        const Icon = law.icon;

        return (
          <div key={index} className={styles.rightCard}>
            <div className={styles.rightIconBox}>
              <Icon className={styles.rightIcon} />
            </div>

            <h3 className={styles.rightTitle}>{law.title}</h3>
            <p className={styles.rightDescription}>{law.description}</p>

            <ul className={styles.rightDetails}>
              {law.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>

</main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Criminal Law Awareness</p>
          <p className={styles.footerText}>
            Stay informed. Know your rights. Stay protected.
          </p>
        </div>
      </footer>

    </div>
  );
}