import { Link } from "react-router-dom";
import { Scale, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import styles from "./StatutoryLaw.module.css";
import { Shield, Heart, Eye, Users, DollarSign, Gavel, Lock, School } from 'lucide-react';



export default function StatutoryLaw({ children }) {
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
                  <div className={styles.content}>
                      <div className={styles.textArea}>
                        <h1 className={styles.title}>Statutory Law</h1>
                        <p className={styles.subtitle}>
                          Understanding governance, accountability and control of public authorities
                        </p>
                  
                        <a href="#topics" className={styles.btn}>Explore Topics</a>
                      </div>
                  
                      <img
                        className={styles.topimgCL}
                        src="/src/components/assets/StatutoryLaw.png"
                        alt="Administrative Law"
                      />
                    </div>
              <div id="topics" className={styles.topContainer}>
                  <div className={styles.slogan}>
                      <h4>Liberty:</h4>
                      <p>
                         Statutory law is the written backbone of justice <br />
                          where the will of the legislature becomes the rule of society.
                      </p>
                  </div>
      
                  <div className={styles.introContainer}>
                      <p>TThe term “statutory law” is used widely in order to denote the laws together like civil and criminal laws. The laws are generally considered as the rules that have been implemented by the controlling body in order to maintain the legal forces and also in order to put a punishment in case the legal operations are not followed. The fundamental aim behind the application of the statutory law is to provide the common people justice and to eliminate the chances of the emergence of harm from the social world. This law has been distinguished from the common law by the means of the statutes enacted in a legislative manner. <br />
                          
                          <img className={styles.introContainer} src="/src/components/assets/StatutoryLaw2.png" alt="" />
                          The bills have been created by some legislative authority and from the proper establishment of the bill, the statutes have been created. In this regard, it is essential for the legislative authorities to examine the bills and then approve them. In the context of several cases, it has been observed that the Indian constitution refuses to sign the bill and in this regard, it is then mentioned as “Veto”. When the bills get approval from the executive power the legislative authority, the bills then transform into statutory law. Within the bill, there are separate provisions that remain available that have been often considered as “statutes”.   <br />
                          The statutory law has been needed to be signed or promoted by the executive or in other terms, by the proper legislative body in order to make them taken into consideration. In the context of the state legislature, the law needs to be passed by the concern of the state Governor. Statutory law always needs to be written and in this manner, it is different from customary law. In this context, it is essential to mention that statutory law has been often considered as part of constitutional law.
                          <br /><br />
                           <h3>Types of Statutory Laws</h3> 
      
                         While classifying the types of statutory, it has been observed that the statutes include several aspects such as consolidating statute, temporary statute, codifying status, penal statute, remedial statute. The classification of the statute has been generally based on the method, time, duration, and application. When the statute has been classified by the object, it includes declaratory statutes, codifying statutes, remedial statute, amending statute, and many others.
                            <br />
                         The declaratory statute has been used to eliminate the doubts emerging due to the implementation of the common law. The codifying statute provides a wide range of rules over specific subject matters and the names of such laws include The Hindu Marriage Act 195, Civil Procedure Code 1908. The remedial statute is the one that offers a wide range of the remedy over the emergence of any kind of wrongful act and the name of such law includes the Industrial dispute act 1947. 


      
                          In case the statute has been classified based on the duration, it includes permanent statute and temporary statute. The temporary statute is the one that has a valid time up to some known period whereas, in the permanent statute, it has been observed that the statute is permanent as per its existence and implementation.
                          <br />
                           Finally, in the context, when the statute has been classified by method, it includes directory statute and mandatory statute. The directive statute is the one that cannot be invalidated even when it has not complied, however, the mandatory statute causes illegal proceedings when it has not complied. 
                      </p>
                  </div>  
                  <div className={styles.conPara}>
                      <h4>Different statutory laws</h4>
                      <p>The Indian Constitution, offers major authority to the Indian legal system, several laws created by the Governors and parliament, and also by the acts of the parliaments. It has been observed while scrutinizing the different types of statutory law of India, that several laws have also been prepared before the emergence and implementation of the pre-independent legislation. In this regard, the names of such laws include Civil Procedure Code 1908, Government of India Act (1919), Indian Penal code (1860), Indian Contract Act (1872).  Moreover, among the post-independence laws providing statutory impact include the Motor vehicle act (1988), Criminal Procedure Code (1973), Right to Information Act (2005). The proper understanding of the laws and also the contribution of the legal leaders helps enhance the magnitude of the laws to society. </p>
                  </div>
      
                  <div className={styles.introContainer2}>
                    <h1>Statutory Compliance</h1>
                    <br />
                      <p>Statutory compliance refers to the process by which an organization follows all the laws, rules, and regulations laid down by the government for conducting its business operations legally. It is a mandatory requirement for every company to ensure that its activities are carried out within the legal framework. These laws are framed to regulate business practices, protect stakeholders, and maintain order and discipline in the corporate environment. In simple terms, statutory compliance means obeying the law while running a business. <br />
                          <img className={styles.introContainer2} src="/src/components/assets/StatutoryLaw3.png" alt="" />
                         Statutory compliance covers various areas such as labour laws, tax laws, corporate governance, health and safety regulations, and environmental protection. It ensures the welfare and rights of employees, proper payment of wages, safe working conditions, and timely payment of taxes. In India, several important statutory compliances include the Trade Unions Act, 1926, Payment of Wages Act, 1936, Industrial Disputes Act, 1947, Minimum Wages Act, 1948, and the Companies Act, 2013. These laws help maintain fairness, transparency, and accountability in business operations.
                            <br /><br />
                          Following statutory compliance is essential for the smooth functioning and long-term success of any organization. Non-compliance may result in heavy fines, legal penalties, lawsuits, or even cancellation of business licenses. On the other hand, proper compliance builds trust among employees, customers, and investors, improves the company’s reputation, and reduces legal risks. Therefore, statutory compliance is not only a legal duty but also a key factor in achieving sustainable growth and responsible business practices.<br /><br />
      
                         <strong>Scope: </strong>
                          It covers different areas such as labour laws, tax laws, corporate governance, and safety regulations. Acts like the Trade Unions Act, Payment of Wages Act, and Industrial Disputes Act guide companies in protecting employees and maintaining fair practices. <br /><br />
                        
      
                          <strong>Conclusion: </strong>
                          Therefore, statutory compliance is essential for every organization to operate smoothly, legally, and achieve long-term growth and success.
                      </p>
                  </div> 
              </div> <br /><br /><br /><br />
              {/* ================= STATUTORY NEWS SECTION ================= */}
<section className={styles.newsSection}>
  <h2 className={styles.newsHeading}>Latest Statutory Law Updates</h2>

  <div className={styles.newsLayout}>

    {/* LEFT NEWS GRID */}
    <div className={styles.newsGrid}>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/StatutoryLawNews.png" alt="" />
        <div>
          <h4>Registry Cannot Question Party Impleadment : Supreme Court</h4>
          <p>Supreme Court clarified limits of registry power in judicial matters.</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/StatutoryLawNews2.png" alt="" />
        <div>
          <h4>Rights Of Persons With Disabilities Act – Annual Digest 2025</h4>
          <p>New statutory protections and implementation guidelines issued.</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/StatutoryLawNews3.png" alt="" />
        <div>
          <h4>Registered Sale Deed Has Strong Presumption Of Genuineness</h4>
          <p>Courts warn against lightly declaring documents invalid.</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/StatutoryLaw.png" alt="" />
        <div>
          <h4>Digitize Land Records Using Blockchain Technology</h4>
          <p>Government advised to adopt tamper-proof statutory mechanisms.</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDEBAR */}
    <div className={styles.newsSidebar}>
      <img src="/src/components/assets/StatutoryLawNews4.png" alt="" /> 
      <p>In order to create awareness among the public regarding the rights and protection of the girl child, commemorating National Girl Child Day – 2026, the Telangana State Legal Services Authority (TSLSA), Hyderabad, in association with the District Legal Services Authority (Sessions Division),..</p>
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
