import { useState } from 'react';
import { Scale, UserCircle, Briefcase } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password, fullName, role, phone);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginGrid}>
        <div className={styles.loginLeft}>
          <div className={styles.brandSection}>
            <Scale className={styles.brandIcon} />
            <div className={styles.brandText}>
              <h1>YOUR LAWYER</h1>
              <p>A Intelligent Legal Assistance Platform</p>
            </div>
          </div>
          <p className={styles.brandDescription}>
            Access legal assistance, manage cases, and connect with legal professionals all in one platform.
          </p>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitDot}></div>
              <p className={styles.benefitText}>AI-powered legal assistance available 24/7</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitDot}></div>
              <p className={styles.benefitText}>Track your cases and hearing dates</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitDot}></div>
              <p className={styles.benefitText}>Connect with experienced lawyers</p>
            </div>
          </div>
        </div>

        <div className={styles.loginCard}>
          <h2 className={styles.cardTitle}>
            {isLogin ? 'Welcome Back' : 'Get Started'}
          </h2>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Select Role</label>
                  <div className={styles.roleSelector}>
                    <button
                      type="button"
                      onClick={() => setRole('user')}
                      className={`${styles.roleButton} ${role === 'user' ? styles.active : ''}`}
                    >
                      <UserCircle className={styles.roleIcon} />
                      <span className={styles.roleLabel}>User</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('lawyer')}
                      className={`${styles.roleButton} ${role === 'lawyer' ? styles.active : ''}`}
                    >
                      <Briefcase className={styles.roleIcon} />
                      <span className={styles.roleLabel}>Lawyer</span>
                    </button>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.formInput}
                  />
                </div>
              </>
            )}

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.formInput}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className={styles.toggleAuth}>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={styles.toggleLink}
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}