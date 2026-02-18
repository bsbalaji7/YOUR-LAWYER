import styles from "./JudgementAndOrders.module.css";
import { Gavel, Calendar, Scale, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

function JudgementsAndOrders({ profile, handleSignOut }) {

  const cases = [
    {
      title: "ADR vs Union of India",
      year: "2024",
      court: "Supreme Court",
      status: "Won",
      landmark: true,
      description:
        "Represented petitioners challenging the Electoral Bonds Scheme. Supreme Court declared it unconstitutional ensuring transparency."
    },
    {
      title: "Supriyo vs Union of India",
      year: "2023",
      court: "Supreme Court",
      status: "Constitutional Matter",
      landmark: true,
      description:
        "Appeared in same-sex marriage recognition proceedings arguing equality and constitutional morality."
    },
    {
      title: "Manish Sisodia Bail Matter",
      year: "2024",
      court: "Supreme Court",
      status: "Relief Granted",
      description:
        "Represented high-profile bail proceedings under PMLA. Court emphasized liberty and due process."
    },
    {
      title: "Hijab Constitutional Reference",
      year: "2022",
      court: "Supreme Court",
      status: "Pending",
      description:
        "Argued freedom of religion vs institutional discipline before constitutional bench."
    },
    {
      title: "Central Vista Review",
      year: "2021",
      court: "Supreme Court",
      status: "Disposed",
      description:
        "Raised environmental and procedural compliance issues in redevelopment project."
    },
    {
      title: "Anuradha Bhasin Internet Case",
      year: "2020",
      court: "Supreme Court",
      status: "Landmark",
      description:
        "Court ruled internet restrictions must satisfy proportionality under Article 19."
    },
    {
      title: "Puttaswamy Privacy Case",
      year: "2017",
      court: "Supreme Court",
      status: "Historic Win",
      description:
        "Recognition of Right to Privacy as Fundamental Right under Article 21."
    }
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className={styles.header}>
        <div className={styles.headerInner}>

          <div className={styles.headerLeft}>
            <Scale size={30} />
            <div>
              <h1 className={styles.logo}>YOUR LAWYER</h1>
              <p className={styles.tagline}>An Intelligent Legal Assistance Platform</p>
            </div>
          </div>

          <div className={styles.headerRight}>
            <div>
              <p className={styles.userName}>{profile?.full_name}</p>
              <p className={styles.userRole}>{profile?.role}</p>
            </div>

            <button onClick={handleSignOut} className={styles.signOutButton}>
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* ================= NAVIGATION ================= */}
      <nav className={styles.navigation}>
        <NavLink to="/" className={({isActive}) =>
          isActive ? styles.activeNav : styles.navItem}>Home</NavLink>

        <NavLink to="/ConstitutionLaw" className={({isActive}) =>
          isActive ? styles.activeNav : styles.navItem}>Constitution Law</NavLink>

        <NavLink to="/StatutoryLaw" className={({isActive}) =>
          isActive ? styles.activeNav : styles.navItem}>Statutory Law</NavLink>

        <NavLink to="/AdministrativeLaw" className={({isActive}) =>
          isActive ? styles.activeNav : styles.navItem}>Administrative Law</NavLink>

        <NavLink to="/WomensLaw" className={({isActive}) =>
          isActive ? styles.activeNav : styles.navItem}>Women's Law</NavLink>
      </nav>

      {/* ================= SECTION ================= */}
      <div className={styles.section}>

        <div className={styles.hero}>
          <h2 className={styles.title}>
            <Gavel size={40} />
            Advocate Portfolio – Landmark Judgments
          </h2>
          <p className={styles.subtitle}>
            Constitutional Litigation • Administrative Law • Public Interest Cases
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((item, index) => (
            <div key={index} className={styles.card}>
              {item.landmark && (
                <span className={styles.landmark}>Landmark Case</span>
              )}

              <h3>{item.title}</h3>

              <div className={styles.meta}>
                <span className={styles.badge}>
                  <Calendar size={14}/> {item.year}
                </span>
                <span className={styles.badge}>{item.court}</span>
                <span className={
                  item.status.includes("Win") || item.status === "Won"
                    ? styles.win
                    : styles.status
                }>
                  {item.status}
                </span>
              </div>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default JudgementsAndOrders;