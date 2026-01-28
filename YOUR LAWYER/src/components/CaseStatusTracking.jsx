import { Calendar, FileText, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';
import styles from './CaseStatusTracking.module.css';

export default function CaseStatusTracking({ onBack }) {
  const cases = [
    {
      id: 'CAS-2024-001',
      title: 'Civil Dispute - Property Boundary',
      type: 'Property Law',
      status: 'Active',
      statusColor: 'active',
      filedDate: '2024-01-15',
      nextHearing: '2024-02-20',
      judge: 'Hon\'ble Justice Sharma',
      lawyer: 'Rajesh Kumar',
      description: 'Dispute regarding property boundary with neighboring property',
      progress: 45
    },
    {
      id: 'CAS-2024-002',
      title: 'Labor Dispute - Wrongful Termination',
      type: 'Labor Law',
      status: 'Pending',
      statusColor: 'pending',
      filedDate: '2024-01-22',
      nextHearing: '2024-02-15',
      judge: 'Hon\'ble Justice Patel',
      lawyer: 'Neha Gupta',
      description: 'Employee claims wrongful termination without proper notice',
      progress: 30
    },
    {
      id: 'CAS-2024-003',
      title: 'Criminal Case - Fraud Investigation',
      type: 'Criminal Law',
      status: 'Under Investigation',
      statusColor: 'investigation',
      filedDate: '2024-02-01',
      nextHearing: '2024-02-25',
      judge: 'Hon\'ble Justice Verma',
      lawyer: 'Rajesh Kumar',
      description: 'Investigation of alleged financial fraud scheme',
      progress: 20
    },
    {
      id: 'CAS-2024-004',
      title: 'Family Matter - Custody Dispute',
      type: 'Family Law',
      status: 'Mediation',
      statusColor: 'mediation',
      filedDate: '2024-01-10',
      nextHearing: '2024-02-18',
      judge: 'Hon\'ble Justice Singh',
      lawyer: 'Priya Sharma',
      description: 'Child custody dispute between divorced parents',
      progress: 40
    },
    {
      id: 'CAS-2024-005',
      title: 'Corporate Legal - Contract Dispute',
      type: 'Corporate Law',
      status: 'Hearing Scheduled',
      statusColor: 'scheduled',
      filedDate: '2024-01-25',
      nextHearing: '2024-02-22',
      judge: 'Hon\'ble Justice Gupta',
      lawyer: 'Amit Patel',
      description: 'Contract breach dispute between two business entities',
      progress: 60
    },
    {
      id: 'CAS-2024-006',
      title: 'Real Estate - Title Deed Issue',
      type: 'Property Law',
      status: 'Resolved',
      statusColor: 'resolved',
      filedDate: '2023-12-15',
      nextHearing: 'N/A',
      judge: 'Hon\'ble Justice Khan',
      lawyer: 'Vikram Singh',
      description: 'Title deed verification case successfully resolved',
      progress: 100
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Resolved':
        return <CheckCircle className={styles.statusIcon} />;
      case 'Active':
        return <AlertCircle className={styles.statusIcon} />;
      default:
        return <Clock className={styles.statusIcon} />;
    }
  };

  return (
    <div className={styles.caseContainer}>
      <div className={styles.caseHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
        <div className={styles.headerContent}>
          <h1>Case Status Tracking</h1>
          <p>Monitor your legal case progress in real-time</p>
        </div>
      </div>

      <div className={styles.caseContent}>
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FileText />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Total Cases</p>
              <p className={styles.statValue}>{cases.length}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ color: '#b45309' }}>
              <AlertCircle />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Active Cases</p>
              <p className={styles.statValue}>{cases.filter(c => c.status === 'Active').length}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ color: '#10b981' }}>
              <CheckCircle />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Resolved</p>
              <p className={styles.statValue}>{cases.filter(c => c.status === 'Resolved').length}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon} style={{ color: '#f59e0b' }}>
              <Calendar />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Next Hearing</p>
              <p className={styles.statValue}>20 Feb</p>
            </div>
          </div>
        </div>

        <div className={styles.casesSection}>
          <h2>Your Cases</h2>
          <div className={styles.casesList}>
            {cases.map((caseItem) => (
              <div key={caseItem.id} className={`${styles.caseCard} ${styles[caseItem.statusColor]}`}>
                <div className={styles.caseHeader2}>
                  <div className={styles.caseTitle}>
                    <h3>{caseItem.title}</h3>
                    <p className={styles.caseId}>{caseItem.id}</p>
                  </div>
                  <div className={styles.caseStatus}>
                    {getStatusIcon(caseItem.status)}
                    <span className={`${styles.statusBadge} ${styles[caseItem.statusColor]}`}>
                      {caseItem.status}
                    </span>
                  </div>
                </div>

                <p className={styles.caseDescription}>{caseItem.description}</p>

                <div className={styles.caseType}>
                  <span className={styles.typeBadge}>{caseItem.type}</span>
                </div>

                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${caseItem.progress}%` }}></div>
                </div>
                <p className={styles.progressText}>{caseItem.progress}% Complete</p>

                <div className={styles.caseDetails}>
                  <div className={styles.detailRow}>
                    <div className={styles.detailItem}>
                      <Calendar className={styles.detailIcon} />
                      <div>
                        <p className={styles.detailLabel}>Filed Date</p>
                        <p className={styles.detailValue}>{caseItem.filedDate}</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <Clock className={styles.detailIcon} />
                      <div>
                        <p className={styles.detailLabel}>Next Hearing</p>
                        <p className={styles.detailValue}>{caseItem.nextHearing}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <div className={styles.detailItem}>
                      <Users className={styles.detailIcon} />
                      <div>
                        <p className={styles.detailLabel}>Judge</p>
                        <p className={styles.detailValue}>{caseItem.judge}</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <FileText className={styles.detailIcon} />
                      <div>
                        <p className={styles.detailLabel}>Lawyer</p>
                        <p className={styles.detailValue}>{caseItem.lawyer}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className={styles.viewDetailsButton}>
                  View Case Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}