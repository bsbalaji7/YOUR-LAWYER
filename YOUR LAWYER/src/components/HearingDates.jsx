import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import styles from "./HearingDates.module.css"; // ✅ fixed name
import { Link } from "react-router-dom";
import { Scale, LogOut, CalendarDays, MapPin, FileText } from "lucide-react";
import { useAuth } from "../contexts/AuthContext"; // ✅ add this

export default function HearingDates() {
  const [hearings, setHearings] = useState([]);

  const { profile, signOut } = useAuth(); // ✅ get profile

  // ✅ sign out function
  const handleSignOut = async () => {
    await signOut();
  };

  const fetchHearings = async () => {
    const { data, error } = await supabase
      .from("hearing_dates")
      .select("*")
      .order("hearing_date");

    if (!error) setHearings(data || []);
  };

  useEffect(() => {
    fetchHearings();
  }, []);

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerInner}>

            <div className={styles.headerLeft}>
              <Scale className={styles.headerIcon} />
              <div className={styles.headerTitle}>
                <h1>YOUR LAWYER</h1>
                <p>An Intelligent Legal Assistance Platform</p>
              </div>
            </div>

            <div className={styles.headerRight}>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{profile?.full_name}</p>
                <p className={styles.userRole}>{profile?.role}</p>
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

      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          <div className={styles.navList}>
            <Link to="/" className={styles.navItem}>Home</Link>
            <Link to="/ConstitutionLaw" className={styles.navItem}>Constitution Law</Link>
            <Link to="/StatutoryLaw" className={styles.navItem}>Statutory Law</Link>
            <Link to="/AdministrativeLaw" className={styles.navItem}>Administrative Law</Link>
            <Link to="/WomensLaw" className={styles.navItem}>Womens Law</Link>
          </div>
        </div>
      </nav>

      

<div className={styles.container}>
  <h2 className={styles.title}>My Hearing Dates</h2>

  {hearings.length === 0 ? (
    <div className={styles.empty}>No hearings scheduled</div>
  ) : (
    <div className={styles.grid}>
      {hearings.map((h) => (
        <div key={h.id} className={styles.card}>

          <div className={styles.row}>
            <MapPin className={styles.iconLocation} />
            <span>{h.case_no}</span>
          </div>
          
          <div className={styles.row}>
            <CalendarDays className={styles.iconDate} />
            <span>{new Date(h.hearing_date).toLocaleString()}</span>
          </div>

          <div className={styles.row}>
            <MapPin className={styles.iconLocation} />
            <span>{h.location}</span>
          </div>

          {h.notes && (
            <div className={styles.row}>
              <FileText className={styles.iconNotes} />
              <small>{h.notes}</small>
            </div>
          )}

        </div>
      ))}
    </div>
  )}
</div>


    </>
  );
}
