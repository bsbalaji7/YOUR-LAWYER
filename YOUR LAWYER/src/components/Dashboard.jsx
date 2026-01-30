import { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Scale,
  BookOpen,
  Landmark,
  FileText,
  Calendar,
  MessageCircle,
  LogOut,
  Users,
  AlertCircle,
  BookMarked,
  Upload,
  BookOpenText
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';
import UploadFiles from './UploadFiles.jsx';
import LegalRightsAwareness from './LegalRightsAwareness.jsx';
import LawyersList from './LawyersList.jsx';
import CaseStatusTracking from './CaseStatusTracking.jsx';
import PopularCasesAndJudgement from './PopularCasesAndJudgements.jsx'
import AdministrativeLaw from './AdministrativeLaw.jsx';
import styles from './Dashboard.module.css';



export default function Dashboard() {
  const { profile, signOut } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');
  /* ✅ Bar Council verification state */
const [barCouncilId, setBarCouncilId] = useState(profile?.barCouncilId || '');
const [isVerified, setIsVerified] = useState(!!profile?.barCouncilId);

const handleVerifyBarId = () => {
  if (barCouncilId.trim() === '1234') {
    setIsVerified(true);
  }
   else {
    alert('Please enter a valid Bar Council ID');
  }
};


  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (currentPage === 'upload') {
    return <UploadFiles onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'legalRights') {
    return <LegalRightsAwareness onBack={() => setCurrentPage('dashboard')} />;
  }
  if (currentPage === 'popularCase') {
    return <PopularCasesAndJudgement onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'lawyersList') {
    return <LawyersList onBack={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'caseTracking') {
    return <CaseStatusTracking onBack={() => setCurrentPage('dashboard')} />;
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

      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          <div className={styles.navList}>
            {['Home', <Link to = '/ConstitutionLaw'>Constitution Law</Link>, <Link to ='/StatutoryLaw'>StatutoryLaw</Link>,<Link to="/AdministrativeLaw" className={styles.navItem}>Administrative Law</Link>, <Link to="/WomensLaw" className={styles.navItem}>Womens Law</Link>].map((item) => (
              <button
                key={item}
                className={styles.navItem}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <aside className={styles.sidebar}>
            <div className={`${styles.sidebarCard} ${styles.brandCard}`}>
              <div className={styles.brandCardTitle}>
                <Scale className={styles.brandCardIcon} />
                <h2>Legal Dashboard</h2>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.sidebarTitle}>
                <BookOpen className={styles.sidebarTitleIcon} />
                <h3>Legal Services</h3>
              </div>
              <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                 <button> <Link to = '/ChatBot'>AI Legal Assistant</Link></button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button onClick={() => setCurrentPage('legalRights')}>Know Your Rights</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Legal Advice & Guidance</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Case Status Tracking</button>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.sidebarTitle}>
                <Users className={styles.sidebarTitleIcon} />
                <h3>Lawyers</h3>
              </div>
              <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                  <button onClick={() => setCurrentPage('lawyersList')}>Find a Lawyer</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Lawyer Directory</button>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.sidebarTitle}>
                <Landmark className={styles.sidebarTitleIcon} />
                <h3>Law Categories</h3>
              </div>
              <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                  <button>Constitutional Law</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Criminal Law</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Civil Law</button>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.sidebarTitle}>
                <Scale className={styles.sidebarTitleIcon} />
                <h3>Case Management</h3>
              </div>
              <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                  <button onClick={() => setCurrentPage('caseTracking')}>Case Status Tracking</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Active Cases</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Hearing Dates</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Case History</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Judgments & Orders</button>
                </li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.sidebarTitle}>
                <BookMarked className={styles.sidebarTitleIcon} />
                <h3>Quick Actions</h3>
              </div>
              <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                  <button onClick={() => setCurrentPage('upload')}>
                    <Upload style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                    Upload Files
                  </button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Search Laws</button>
                </li>
                <li className={styles.sidebarListItem}>
                  <button>Help & Support</button>
                </li>
              </ul>
            </div>
          </aside>

          <main className={styles.mainArea}>
            <div className={styles.serviceGrid}>
              <button
                onClick={() => setCurrentPage('legalRights')}
                className={`${styles.serviceCard} ${styles.serviceCardButton}`}
              >
                <div className={styles.serviceIconBox}>
                  <AlertCircle className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <Link to = '/LegalRightsAwareness'>Legal Rights Awareness</Link>
                  <p>Learn about your fundamental rights</p>
                </div>
              </button>

              <button
                
                className={`${styles.serviceCard} ${styles.serviceCardButton}`}
              >
                <div className={styles.serviceIconBox}>
                  <MessageCircle className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <Link to = '/ChatBot'>AI Legal Assistant</Link>
                  <p>Get instant legal guidance</p>
                </div>
              </button>

              <button
                onClick={() => setCurrentPage('upload')}
                className={`${styles.serviceCard} ${styles.serviceCardButton}`}
              >
                <div className={styles.serviceIconBox}>
                  <Upload className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <h3>Upload Files</h3>
                  <p>Upload your legal documents</p>
                </div>
              </button>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIconBox}>
                  <FileText className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <a target='_blank' href='https://consumerhelpline.gov.in/user/signup.php'>Consumer Complaint</a>
                  <p>File a consumer complaint online</p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIconBox}>
                  <AlertCircle className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <a target='_blank' href='https://eservices.tnpolice.gov.in/CCTNSNICSDC/ComplaintRegistrationPage?1'>Raise Complaint</a>
                  <p>Submit a new legal complaint</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIconBox}>
                  <AlertCircle className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <a target='_blank' href='https://cybercrime.gov.in/Webform/Accept.aspx'>Cyber Crime Raise Complaint</a>
                  <p>Write A Cybercrime Complaint</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIconBox}>
                  <MessageCircle className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <a target='_blank' href='https://eservices.tnpolice.gov.in/CCTNSNICSDC/WomensHelpline'>Women Helpline</a>
                  <p>Helpline Number Service</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentPage('popularCase')}
                className={`${styles.serviceCard} ${styles.serviceCardButton}`}
              >
                <div className={styles.serviceIconBox}>
                  <BookOpenText className={styles.serviceIcon} />
                </div>
                <div className={styles.serviceContent}>
                  <h3>Popular Cases and Judgements</h3>
                  <p>Highlight important verdicts that changed legal understanding and impacted society.</p>
                </div>
              </button>
              
            </div>

            <div className={styles.welcomeSection}>
              <h2 className={styles.welcomeTitle}>Welcome to Your Legal Dashboard</h2>
              <p className={styles.welcomeText}>
                Access comprehensive legal resources, manage your cases, and get AI-powered assistance for all your legal needs. Our platform is designed to make legal information accessible and understandable for everyone.
              </p>
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <h4>24/7 AI Support</h4>
                  <p>Get instant answers to your legal questions anytime</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Case Tracking</h4>
                  <p>Monitor your case progress and hearing dates</p>
                </div>
                <div className={styles.featureItem}>
                  <h4>Legal Resources</h4>
                  <p>Access laws, articles, and legal documents</p>
                </div>
              </div>
            </div>
            {profile?.role === 'lawyer' && (
  isVerified ? (

    /* ✅ SHOW LAWYER DASHBOARD */
    <div className={styles.lawyerDashboard}>
      <h3>Lawyer Dashboard</h3>
      <div className={styles.lawyerGrid}>
        <div className={styles.lawyerStatCard}>
          <Users />
          <h4>My Clients</h4>
          <div className={styles.statNumber}>0</div>
        </div>

        <div className={styles.lawyerStatCard}>
          <FileText />
          <h4>Active Cases</h4>
          <div className={styles.statNumber}>0</div>
        </div>

        <div className={styles.lawyerStatCard}>
          <Calendar />
          <h4>Upcoming Hearings</h4>
          <div className={styles.statNumber}>0</div>
        </div>

        <div className={styles.lawyerStatCard}>
          <MessageCircle />
          <h4>Consultations</h4>
          <div className={styles.statNumber}>0</div>
        </div>
      </div>
    </div>

  ) :  (

    /* ✅ ASK FOR BAR COUNCIL ID */
    <div className={styles.lawyerDashboard}>
      <h3>Bar Council Verification Required</h3>
    
      <input
        type="text"
        placeholder="Enter Bar Council ID"
        value={barCouncilId}
        onChange={(e) => setBarCouncilId(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />

      <button onClick={handleVerifyBarId}>
        Verify
      </button>
    </div>

  )
)}

          </main>
        </div>
      </div>
      <footer className={styles.footer}>
  <div className={styles.footerContent}>
    <p className={styles.footerTitle}>Legal Rights Awareness</p>
    <p className={styles.footerText}>
      Empowering citizens by spreading awareness about fundamental rights, duties, and legal protections in India.
    </p>
    <p className={styles.footerCopyright}>
      © {new Date().getFullYear()} Legal Rights Awareness Initiative. All rights reserved.
    </p>
  </div>
</footer>
 
    </div>
  );


}