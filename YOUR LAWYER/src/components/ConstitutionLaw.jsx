import { Link } from "react-router-dom";
import { Scale, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import styles from "./ConstitutionLaw.module.css";
import { Shield, Heart, Eye, Users, DollarSign, Gavel, Lock, School } from 'lucide-react';


export default function ConstitutionLaw() {
  const { profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const rights = [
    {
      icon: Shield,
      title: 'Right to Equality',
      description: 'Everyone is equal before the law. No discrimination based on religion, caste, gender, or race.',
      details: [
        'The Right to Equality guarantees that all persons are equal before the law and receive equal protection. It prohibits discrimination based on religion, caste, race, gender, or place of birth.',
        ' This right promotes fairness and equal opportunities in education, employment, and public services. It helps remove social inequalities and strengthens national unity..'
      ]
    },
    {
      icon: Heart,
      title: 'Right to Freedom',
      description: 'The Right to Freedom allows individuals to live freely and express themselves.',
      details: [
        'The Right to Freedom ensures that citizens can think, speak, and act freely. It includes freedom of speech and expression, peaceful assembly, movement, residence, and profession.',' These freedoms encourage personal growth and democratic participation. However, reasonable restrictions may be applied in the interest of public order, morality, and national security.'
      ]
    },
    {
      icon: Eye,
      title: 'Right to Life and Personal Liberty',
      description: 'YThis right protects people, especially children, from exploitation and abuse.',
      details: ['The Right to Life and Personal Liberty guarantees that every person has the right to live with dignity and safety. No one can be deprived of life or freedom except according to lawful procedures.',
        ' This right includes access to health, privacy, education, and a clean environment. It is considered the most important right because it protects human existence itself.']
    },
    {
      icon: Gavel,
      title: 'Cultural and Educational Rights',
      description: 'Education is a fundamental right for children..',
      details: ['Cultural and Educational Rights protect the language, culture, and traditions of different communities, especially minorities.',
        ' These groups have the right to preserve their identity and establish their own educational institutions. This ensures diversity and strengthens the rich cultural heritage of India.']
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
      title: 'Directive Principles of State Policy',
      description: 'Right to own, acquire, and dispose of property.',
      details: ['Directive Principles guide the government in creating a just and welfare-oriented society. They encourage the state to reduce poverty, promote education, provide healthcare, ensure equal pay, and improve living conditions.',
        ' Though not enforceable by courts, these principles serve as moral and social obligations for the government to work for the common good.']
    },
    {
      icon: School,
      title: 'Role of the Judiciary',
      description: 'Schools must provide a safe and respectful environment.',
      details: ['The Constitution divides power among three branches: Legislature, Executive, and Judiciary. The Legislature makes laws, the Executive implements them, and the Judiciary interprets them.',
        ' This separation prevents concentration of power and ensures checks and balances, which protect democracy and prevent misuse of authority.']
    },
    {
      icon: Gavel,
      title: 'Separation of Powers',
      description: 'In the digital age, students also have online rights.',
      details: ['The Constitution divides power among three branches: Legislature, Executive, and Judiciary. The Legislature makes laws, the Executive implements them, and the Judiciary interprets them.',
        ' This separation prevents concentration of power and ensures checks and balances, which protect democracy and prevent misuse of authority.']
    }
  ];
  return (
    <div className={styles.dashboardWrapper}>

      {/* ================= HEADER ================= */}
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

              <button onClick={handleSignOut} className={styles.signOutButton}>
                <LogOut className={styles.signOutIcon} />
                Sign Out
              </button>
            </div>

          </div>
        </div>
      </header>


      {/* ================= NAVIGATION ================= */}
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


      {/* ================= PAGE CONTENT ================= */}
      <main className={styles.mainContent}>
        <div className={styles.content}>
            <div className={styles.textArea}>
              <h1 className={styles.title}>Constitution Law</h1>
              <p className={styles.subtitle}>
                Understanding governance, accountability and control of public authorities
              </p>
        
              <a href="#topics" className={styles.btn}>Explore Topics</a>
            </div>
        
            <img
              className={styles.topimgCL}
              src="/src/components/assets/constitutional-law.jpg"
              alt="Administrative Law"
            />
          </div>
        <div id="topics" className={styles.topContainer}>
            <div className={styles.slogan}>
                <h4>Liberty:</h4>
                <p>
                    What light is to the eyes, what air is to the lungs. <br />
                    What love is to the heart, liberty is to the soul of
                    man.
                </p>
                <span>—Ingersoll</span>
            </div>

            <div className={styles.introContainer}>
                <p>Those who commented in 1950, that our Constitution is the
                    lengthiest in the world should be shocked to see the volume
                    of the subject today. Of course, growth there must be and

                    change there should be, but, change with too many Amend-
                    ments, 97 Amendments up to 2011 plus 98th in the offing in

                    2012 ] which seeks to create a National Judicial Commission]. <br />
                    with a plethora of cases decided by the Supreme .Court and
                    the High Courts, has made the subject formidable to the
                    students and the readers. <br />
                    <img className={styles.introContainer} src="/src/components/assets/Constitution-Law-2.jpg" alt="" />
                    In fact, the 42nd amendment should be considered as a
                    ‘package deal' as it has, made a number of changes at one
                    stroke. What is amusing is the head-on collision between
                    the Judiciary and the Parliament: Cases decided by the
                    Supreme Court are neutralized by the Parliament. <br />
                    Provisions in Part III and Art. 368 are subject to this
                    dangerous development. To cite one illustration: In
                    Keshavananda Bharati's case, the Supreme Court held that
                    the Parliament may amend but should not affect the 'basic
                    structure' of the Constitution. To meet this decision, the
                    Parliament provided in the 42nd Amendment that any
                    Amendment to the Constitution should not be questioned in
                    any Court of Law. This came under fire, in the Minerva Mills
                    case, and the Supreme Court struck down this portion, as
                    violative of basic structure concept.

                    Art. 19(l)(f) dealt with the right to property and Art. 31
                    with the deprivation of property. This was subject to the 1st,
                    4th, 17th, 25th, 29th and the 42nd Amendments! Serious
                    dents upon dents: What was the result ? The 44th Amendment
                    removed this fundamental right to property from Arts. 19 and
                    31! This is like washing the bath tub, along with the baby!
                    In Kihota v Zachilhu 1993 the Supreme Court struck down

                    Para 7 of the 10th Schedule to the Constitution.[Anti-
                    defection: Bar of Jurisdiction of courts to decide

                    disqualification of a member of the House ]
                    The basic structure concept may, to some extent, arrest the
                    Parliament's spree for amendments, but time alone can
                    decide this.
                    To digest our Lengthiest Constitution, one should have a
                    strong Constitution!
                </p>
            </div>  
            <div className={styles.conPara}>
                <h4>Importance of Constitution Law</h4>
                <p>Constitution Law is the backbone of the Indian legal system because it establishes the framework within which the government functions and citizens exercise their rights. It defines the structure of the State, distributes powers among the Legislature, Executive, and Judiciary, and ensures that no authority exceeds its limits. By guaranteeing Fundamental Rights such as equality, freedom, and justice, it protects individuals from misuse of power and safeguards human dignity. Constitution Law also promotes democracy, accountability, and the rule of law, ensuring that every decision of the government serves the welfare of the people. Without constitutional law, there would be no stability, fairness, or protection of liberties in society.</p>
            </div>

            <div className={styles.introContainer2}>
              <h1>The Preamble</h1>
                <p>Those who commented in 1950, that our Constitution is the
                    lengthiest in the world should be shocked to see the volume
                    of the subject today. Of course, growth there must be and

                    change there should be, but, change with too many Amend-
                    ments, 97 Amendments up to 2011 plus 98th in the offing in

                    2012 ] which seeks to create a National Judicial Commission]. <br />
                    with a plethora of cases decided by the Supreme .Court and
                    the High Courts, has made the subject formidable to the
                    students and the readers. <br />
                    <img className={styles.introContainer2} src="/src/components/assets/Constitution-Law-3.jpg" alt="" />
                    The Preamble establishes that all power in India originates from “We, the People of India,” meaning that the government derives its authority from the citizens. This ensures that the State remains accountable to the people and functions within constitutional limits. It strengthens the democratic nature of governance and prevents arbitrary or authoritarian rule. <br />
                    The Supreme Court has repeatedly recognized the legal significance of the Preamble in several landmark judgments. In the Kesavananda Bharati case (1973), the Court held that the Preamble is a part of the Constitution and forms the basic structure of the Constitution. This means that Parliament cannot amend or destroy the core principles mentioned in the Preamble, such as democracy, secularism, equality, and justice.
                      <br /><br />
                    Furthermore, the Preamble acts as a standard to test the validity of laws. Any law or policy that violates the ideals of justice, liberty, equality, or fraternity can be challenged and struck down by the courts. Thus, the Preamble indirectly protects the rights of citizens and ensures that governance remains fair and constitutional.

                    In essence, the Preamble is not merely symbolic or decorative; it is legally significant because it guides interpretation, limits government power, protects democratic values, and preserves the spirit of the Constitution. It serves as the moral and legal foundation upon which the entire constitutional framework stands. <br /><br />

                   <strong> Basis of the Basic Structure Doctrine </strong>
                    The ideals mentioned in the Preamble—justice, liberty, equality, secularism, and democracy—form the basic structure of the Constitution, which cannot be amended or destroyed. <br /><br />
                  

                    <strong>Standard to Test Laws and Policies </strong>
                    Any law or government action that violates the principles of the Preamble can be challenged in court, helping protect citizens’ rights and maintain constitutional governance.
                </p>
            </div> 
        </div> <br /><br /><br /><br />
        <section className={styles.rightsSection}>
                  <h2 className={styles.sectionTitle}>Constitutional Law Fundamental Rights</h2>
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
      </main>


      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Legal Rights Awareness</p>
          <p className={styles.footerText}>
            Empowering citizens by spreading awareness about fundamental rights,
            duties, and legal protections in India.
          </p>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} Legal Rights Awareness Initiative. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
