import { Link } from "react-router-dom";
import { Scale, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import styles from "./WomensLaw.module.css";
import { Shield, Heart, Eye, Users, DollarSign, Gavel, Lock, School } from 'lucide-react';



export default function WomensLaw({ children }) {
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


      {/* ================= NAVIGATION ================= */}
      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          <div className={styles.navList}>

            <Link to="/" className={styles.navItem}>
              Home
            </Link>

            <Link to="/ConstitutionLaw" className={styles.navItem}>
              Constitution Law
            </Link>

            <Link to="/StatutoryLaw" className={styles.navItem}>
              Statutory Law
            </Link>
            <Link to="/AdministrativeLaw" className={styles.navItem}>
              Administrative Law
            </Link>
             <Link to="/WomensLaw" className={styles.navItem}>Womens Law</Link>

          </div>
        </div>
      </nav>


      {/* ================= PAGE CONTENT ================= */}
      <main className={styles.mainContent}>
              <div className={styles.headerSection}>
  <div className={styles.content}>
    <div className={styles.textArea}>
      <h1 className={styles.title}>Womens Law</h1>
      <p className={styles.subtitle}>
        Understanding governance, accountability and control of public authorities
      </p>

      <a href="#topics" className={styles.btn}>Explore Topics</a>
    </div>

    <img
      className={styles.topimgCL}
      src="/src/components/assets/womenlaw1.png"
      alt="Womens Law"
    />
  </div>
</div>



              <div id="topics" className={styles.topContainer}>
                  <div className={styles.slogan}>
                      <h4>Liberty:</h4>
                      <p>
                         What rules are to action and fairness is to justice, <br />
                          Administrative law is to administration
                      </p>
                  </div>
      
                  <div className={styles.introContainer}>
                      <p>Definition •

                            Administrative law deals with law relating to administration. It
                            is the basic foundation of administration. To Holland and Maitland

                            administrative law is part of Constitutional law. The general Princi-
                            ples relating to the organisation, powers and functions of "the organs

                            of the State, namely Legislative, Executive and Judicial) and their
                            relationship are, inter alia, dealt with, in the Constitution.

                            Administrative law determines the organisation powers and
                            functions of the Administrative authorities. (Wade &
                            Philips). It includes the matters relating to civil services,
                            public departments, -public corporations, local authorities and
                            other statutory bodies exercising quasi-Judicial functions and the
                            law governing Judicial review of administrative actions. ject

                            As Jennings rightly points out ,the subject matter of
                            administrative law is "Public Administration". <br /> <br />
                          
                          <img className={styles.introContainer} src="/src/components/assets/AdministrativeLaw1.jpg" alt="" />
                         'Natural Justice' is an expression of English Common Law
                            having its origin in Jus natural (law of Nature.) It involves procedural
                            requirement of fairness. In England it was initially applied to the courts,
                            but later projected from the judicial to the Administrative sphere. It is
                            justice that is simple and elementary, and fair play in action.
                            In fact, Arthasastra of Kautilya has a reference to natural
                            justice.
                            In Ridge V Baldwin, 1964 the observance of natural justice
                            was made applicable to the entire range of administrative action.
                            This was followed in India in State of Orissa V. Binapani, Kraipak V.
                            Union, and Maneka Gandhi V Union. The purpose of Natural Justice
                            is prevention of miscarriage of justice, and hence is applicable to

                            administrative enquiries. It was held that if there is no specific provi-
                            sion or rule to follow these principles, before taking action against an

                            individual, the Court would read into the provision the require-
                            ment of natural Justice.
                          <br /><br />
                          Nemo judex in causa sua – No bias

                            Audi alteram partem – Hear the other side

                            Applies to administrative and quasi-judicial actions

                            Ensures fairness

                            Prevents miscarriage of justice
                          <br /><br /><br />
                           <center><h1>Judicial Control</h1> </center> <br />
      
                         Ultra Vires means "beyond powers".

                            If the subordinate legislative Authority goes beyond the pow-
                            ers conferred by the enabling Act, such an exercise of power is Ultra

                            Vires & void.

                            This applies to all Authorities exercising Governmental func-
                            tions including the subordinate legislative bodies or Authorities which

                            make rules, regulations, Bye laws, Orders etc

                            The doctrine of Ultra Vires was expounded by Dicey. Accord-
                            ing to him, the Subordinate Legislation may be declared by the courts

                            as 'beyond the powers' of the Parent Act i.e., the enabling Act. This
                            is the Judicial control over Subordinate Legislation.
                            <br />
                            <div className={styles.articalCon}>
                                <div className={styles.articalConIN}>
                                <h2>Constitutional Articles</h2>
                                <ul>
                                    <li>Article 32 – Supreme Court</li>
                                    <li>Article 226 – High Court</li>
                                </ul>
                                </div>
                                <div className={styles.articalConIN}>
                                <h2>Types of Writs</h2>
                                <ol>
                                    <li>Habeas Corpus</li>
                                    <li>Mandamus</li>
                                    <li>Certiorari</li>
                                    <li>Prohibition</li>
                                    <li>Quo Warranto</li>
                                </ol>
                                </div>
                                <div className={styles.articalConIN}>
                                <h2>Purpose of Writs</h2>
                                <ul>
                                    <li>Control excess of jurisdiction</li>
                                    <li>Correct errors</li>
                                    <li>Enforce rights</li>
                                </ul>
                                </div>
                            </div>
                             <br />
                         The declaratory statute has been used to eliminate the doubts emerging due to the implementation of the common law. The codifying statute provides a wide range of rules over specific subject matters and the names of such laws include The Hindu Marriage Act 195, Civil Procedure Code 1908. The remedial statute is the one that offers a wide range of the remedy over the emergence of any kind of wrongful act and the name of such law includes the Industrial dispute act 1947. 


      
                          In case the statute has been classified based on the duration, it includes permanent statute and temporary statute. The temporary statute is the one that has a valid time up to some known period whereas, in the permanent statute, it has been observed that the statute is permanent as per its existence and implementation.
                          <br />
                           While Parliament may delegate ancillary and procedural matters such as fixing dates or extending laws, it cannot delegate essential legislative functions. Policy formulation, amendment of statutes, and declaration of offences must remain with the legislature. Delegation of such essential powers is unconstitutional and ultra vires
                      </p>
                  </div>  
                  <div className={styles.conPara}>
                      <h4>Administrative Discretion</h4>
                      <p>Rule of law demands that Govt. should be of laws and not of
                        men. However, in the Govt. vast administrative machinery, officers,
                        while discharging their functions should invariably have "discretions"
                        to exercise their powers effectively. These administrative functions
                        are general and varied (Refer: Ch. 6 Item 3) .
                        Administrative discretion means the "determination" reached
                        by the Authority, on facts (ascertained by it), on consideration of

                        available evidence, and on the basis of policy, efficiency & expedi-
                        ency of the Department. </p>
                  </div>
      
                  <div className={styles.introContainer2}>
                    <h1>Rule of Law (Dicey)</h1>
                    <br />
                      <p>Rule of law is a dynamic concept and is one of the essentials of a
                            constitution based on Democracy. It heralds the "Supremacy of Law'
                            and is opposed to the Rules of man.
                            Bracton in the 13th century had said" Even the Rulers are subject to
                            law', Fortseque uses this rule to justify that tax could not be imposed
                            without "law made by the Parliament". It was Chief Justice Coke
                            who originated it in England.
                            The modern concept of rule of law was expounded by Dicey and
                            his exposition has three importance factors: <br />
                          <img className={styles.introContainer2} src="/src/components/assets/AdministrativeLaw3.jpg" alt="" />

                          <h3>The rule against arbitrariness :-</h3>
                         This means that Administrative officers should not exercise their
                            powers arbitrarily and even an act of an officer must have some basis
                            in the "Act" of the legislature or the rule authorizing him to do it.
                            Hence, the Executive officer should exercise only those powers which
                            are authorized by legislature.
                            This is what Dicey meant when he said that the rule of law is
                            in operation. Further, it should be noted that no discriminatory power
                            should be given to the executive officials by Act or by rules.

                            Ultimately all the powers are to be controlled by the Constitu-
                            tion. This is the effective part of the rule of law. Administrative

                            powers are limited by legislation. But the Parliament itself is
                            controlled by the people.
                            <br /><br />
                            <h3>Equality:</h3>
                         The second part of the rule of law is that among equals law
                            should be equal and should be equally administered. It means that
                            the like should be treated alike.
                            To Dicey, this is 'equality before the law' He declared that
                            "no one should be made to suffer in body or goods except for a
                            distinct breach of law.
                            It also means that "all persons must be amendable to the
                            ordinary jurisdiction of the court".
                            Rule of law contains the guiding principles to the
                            administrators. They should exercise their powers without making
                            discrimination between persons and persons in society. If they
                            excercise this power arbitrarily or by making discrimination, then, it
                            should be controlled or corrected by Judicial scrutiny.<br /><br />
      
                         <strong>Liability of State </strong>
                         The state is liable for both contractual and tortious obligations. If the government or its authorities commit wrongful acts or breach contracts, affected persons may seek remedies through courts. This ensures accountability of the state <br /><br />
                        
      
                          <strong>Public Interest Litigation (PIL) </strong>
                         Public Interest Litigation allows individuals or groups to approach courts on behalf of those whose rights are violated but cannot seek justice themselves. The rule of locus standi is relaxed to promote social justice and protect weaker sections of society from administrative abuse
                      </p>
                  </div> 
              </div> <br /><br /><br /><br />
              {/* ================= STATUTORY NEWS SECTION ================= */}
<section className={styles.newsSection}>
  <h2 className={styles.newsHeading}>Latest Administrative Law Updates</h2>

  <div className={styles.newsLayout}>

    {/* LEFT NEWS GRID */}
    <div className={styles.newsGrid}>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/AdministrativeLawNews2.webp" alt="" />
        <div>
          <h4>Supreme Court Upholds Centre's Rule Prescribing 'Compulsory Retirement' As Punishment For...</h4>
          <p>11 May 2024</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/AdministrativeLawNews1jpg.webp" alt="" />
        <div>
          <h4>Eligibility Criteria Can't Be Changed After Commencement Of Recruitment Process Unless Rules Permit So : Supreme Court</h4>
          <p> 7 Nov 2024</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/AdministrativeLawNews3.webp" alt="" />
        <div>
          <h4>NLU Jodhpur's CALQ Journal Announces Call For Submissions On Constitutional And Administrative Law </h4>
          <p>30 Oct 2025</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/AdministrativeLawNews4.webp" alt="" />
        <div>
          <h4>Supreme Court Quarterly Digest On ADMINISTRATIVE LAW [Jan – Mar, 2023]</h4>
          <p> 22 Apr 2023</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDEBAR */}
    <div className={styles.newsSidebar}>
      <img className={styles.newsMain} src="/src/components/assets/AdministrativeLawNews5.webp" alt="" /> 
      <p>Administrative Law Administrative Law - Administrative/executive orders or circulars, as the case may be, in the absence of any legislative competence cannot be made applicable with retrospective effect. Only law could be made retrospectively if it was expressly provided by the Legislature in the Statute. (Para 30) Bharat Sanchar Nigam Ltd. v. Tata Communications Ltd., 2022 LiveLaw...</p>
      <button>Read more....</button>
    </div>

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
