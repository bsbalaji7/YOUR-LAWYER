import { useState, useEffect } from "react";
import { Shield, Heart, Eye, Users, DollarSign, Gavel, Lock, BookOpen, School } from 'lucide-react';
import styles from './PopularCasesAndJudgements.module.css';

export default function PopularCasesAndJudgement({ onBack }) {

  // --- IMAGE SLIDER SETUP ---
  const sliderImages = [
    "/src/components/assets/LRB-3.webp",

    "/src/components/assets/LRA-2.webp",

    "/src/components/assets/LRA-1.webp"
  ];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ---- RIGHTS CONTENT ----
  const rights = [
    {
      icon: Shield,
      title: 'Right to Equality',
      description: 'Everyone is equal before the law. No discrimination based on religion, caste, gender, or race.',
      details: [
        'Equal treatment before the law.',
        'No discrimination based on caste, religion, race, sex, or birthplace.',
        'Equal opportunity in public employment.',
        'Protection against social injustice.',
        'Right to Education: Free education from 6–14 years.',
        'Promotes fairness and prevents inequality.'
      ]
    },
    {
      icon: Heart,
      title: 'Right to Freedom',
      description: 'The Right to Freedom allows individuals to live freely and express themselves.',
      details: [
        'Freedom of speech & expression.',
        'Freedom to assemble peacefully.',
        'Freedom to form associations.',
        'Freedom to reside and travel in India.',
        'Reasonable restrictions apply for national security.'
      ]
    },
    {
      icon: Eye,
      title: 'Right Against Exploitation',
      description: 'YThis right protects people, especially children, from exploitation and abuse.',
      details: ['Child labour in hazardous jobs is strictly prohibited.',
      'No one can be forced to work against their will (forced labour).',
      'Human trafficking, including trafficking of children, is illegal.',
      'This right ensures that children can grow, learn, and live safely.']
    },
    {
      icon: Gavel,
      title: 'Right to Education',
      description: 'Education is a fundamental right for children..',
      details: ['Free and compulsory education is provided to children aged 6 to 14 years.',
      'The government must ensure access to quality education.',
      'This right helps children build knowledge, skills, and a better future.',
      'Schools must not deny education based on caste, gender, or economic status.']
    },
    {
      icon: Users,
      title: 'Right to Constitutional Remedies',
      description: 'This right protects all other fundamental rights.',
      details: ['If your rights are violated, you can approach the courts.',
      'Courts can issue orders to protect your rights.',
      'This right ensures justice and accountability.',
      'It acts as a safeguard against misuse of power.']
    },
    {
      icon: DollarSign,
      title: 'Labour Rights',
      description: 'Labour Rights are the legal and human rights given to workers for fair, safe, and respectful working conditions.',
      details: ['Workers must be paid fairly and at least the Minimum Wage decided by the government.',
        'Workplaces must be free from danger, and workers should get protective equipment and safety training.',
        'Workers cannot be forced to work extreme hours without rest. Overtime pay must be provided for extra hours.',
        'Workers must not be discriminated based on caste, religion, gender, disability, race, etc.'
      ]
    },
    {
      icon: Lock,
      title: 'Property Rights',
      description: 'Right to own, acquire, and dispose of property.',
      details: ['Ownership rights', 'Right to inheritance', 'Protection from unlawful seizure']
    },
    {
      icon: School,
      title: 'Rights at School',
      description: 'Schools must provide a safe and respectful environment.',
      details: ['Physical punishment and harassment are strictly prohibited.',
      'Students have the right to a safe, healthy learning environment.',
      'All students must be treated equally, regardless of background.',
      'Schools should promote dignity, discipline, and emotional safety.']
    },
    {
      icon: Lock,
      title: 'Digital & Privacy Rights',
      description: 'In the digital age, students also have online rights.',
      details: ['Protection from cyberbullying, online harassment, and abuse.',
      'Personal data, photos, and videos cannot be misused without consent.',
      'You can report cybercrimes to authorities.',
      'These rights protect mental health, privacy, and online safety.']
    },
    {
      icon: BookOpen,
      title: 'If Your Rights Are Violated',
      description: 'If any of your rights are violated, you should take action.',
      details: ['Talk to a trusted adult such as a parent, teacher, or guardian.',
      'Contact Childline 1098, a 24/7 helpline for children in India.',
      'Report serious issues to: School authorities, Local police, Child protection services',
      'Taking action helps protect you and others.']
    }
  ];

  return (
    <div className={styles.awarenessContainer}>

      {/* HEADER */}
      <div className={styles.awarenessHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
        <div className={styles.headerContent}>
          <h1>Legal Rights Awareness</h1>
          <p>Understand your fundamental rights and legal protections</p>
        </div>
      </div>

      {/* ---- SLIDER SECTION ---- */}
      <section className={styles.sliderSection}>
        <img src={sliderImages[slide]} alt="legal awareness" className={styles.sliderImage} />
      </section>

      {/* CONTENT */}
      <div className={styles.awarenessContent}>
        <section className={styles.introSection}>
          <div className={styles.introCard}>
            <h2>Fundamental Rights (Indian Constitution)</h2>
            <p>
              Fundamental Rights are basic human rights guaranteed by the Indian Constitution. These rights apply to all citizens including students, children, and minors.

              Fundamental Rights are considered the backbone of Indian democracy. They are designed to protect individuals from unfair treatment by the State, other individuals, and institutions. These rights ensure that every citizen can live with dignity, freedom, and equality, which are essential for a civilized and democratic society.
            </p>
          </div>
        </section>

        <section className={styles.rightsSection}>
          <h2 className={styles.sectionTitle}>Fundamental Rights</h2>
          <div className={styles.rightsGrid}>
            {rights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <div key={index} className={styles.rightCard}>
                  <div className={styles.rightIconBox}>
                    <IconComponent className={styles.rightIcon} />
                  </div>
                  <h3 className={styles.rightTitle}>{right.title}</h3>
                  <p className={styles.rightDescription}>{right.description}</p>
                  <ul className={styles.rightDetails}>
                    {right.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACTION */}
        <section className={styles.actionSection}>
          <div className={styles.actionCard}>
            <h3>What To Do If Your Rights Are Violated?</h3>
            <div className={styles.actionSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4>Document Everything</h4>
                  <p>Record dates, times, and details.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4>Seek Legal Advice</h4>
                  <p>Consult a lawyer for guidance.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4>File a Complaint</h4>
                  <p>Report to proper authorities.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h4>Pursue Legal Action</h4>
                  <p>Seek remedy & compensation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section className={styles.resourcesSection}>
          <h2 className={styles.sectionTitle}>Helpful Resources</h2>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}><h4>Constitutional Rights</h4><p>Learn legal protections</p></div>
            <div className={styles.resourceCard}><h4>Legal Aid</h4><p>Free legal services</p></div>
            <div className={styles.resourceCard}><h4>Consumer Rights</h4><p>File complaints</p></div>
            <div className={styles.resourceCard}><h4>Labour Laws</h4><p>Workplace protections</p></div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Legal Rights Awareness</p>
          <p className={styles.footerText}>
            Empowering citizens by spreading legal awareness and constitutional values across India.
          </p>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} Legal Rights Awareness Initiative. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );


}
