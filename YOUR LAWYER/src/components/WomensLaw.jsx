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
                         Rules are to action, fairness is to justice, <br />
                          Administrative law is to administration,<br />
                          Women’s law is to protection and empowerment.
                      </p>
                  </div>
      
                  <div className={styles.introContainer}>
                      <p>Definition •

                            The status of women in India has a very long and ever-changing story. In ancient times women
                              used to enjoy rights and status equal to men. They used to be educated and independent. Their
                              status is evident from facts like women used to enjoy the freedom to choose their husband in a
                              ceremony commonly known as “Swayamwar”. There are instances in history that show that
                              women used to be rulers, administrators, military commanders, teachers, writers, poets and
                              what not. <br /> <br />
                          
                          <img className={styles.introContainer} src="/src/components/assets/womenlaw3.jpg" alt="" />
                         Thereafter, after the invasion of Mughals during medieval period the position of women in
                          India encountered a dramatic decline. Daughters and other women were kept inside homes and
                          were not allowed to enjoy freedom. There are instances that depict that women were treated as
                          slaves and were inflicted with sexual wrongs as well. All these reasons gave rise to customs
                          like Purdah system, Sati, Johar etc. Due to all these, their position in society kept on
                          deteriorating as their interference in administration, law making etc. had almost ended. They
                          had no representation or say in almost everything. <br />
                          Later on, during British rule, many social reformers came up and fought for the rights of
                          women. Due to their efforts, many customs like Sati, Devdasi, Johar etc. could be ended.
                          Schools were set up to provide free education to girls and many other efforts were taken to
                          strengthen the position of females. Post-independence, Constitutional provisions were drafted
                          in such a way that equal rights and opportunities and be provided to women so that they can
                          also live and enjoy their basic human rights. Since then several legislations are being enacted
                          for the welfare and development of women and their status in India.

                          <br /><br />
                          Nemo judex in causa sua – No bias

                            Audi alteram partem – Hear the other side

                            Applies to administrative and quasi-judicial actions

                            Ensures fairness

                            Prevents miscarriage of justice
                          <br /><br /><br />
                           <center><h1>II. Constitution of India and Women</h1> </center> <br />
      
                         Indian constitution has many provisions for protection of women rights. The preamble of
                          Constitution of India also emphasizes on them. It guarantees the equality of rights of men and
                          women in every possible way and prohibits discrimination on the ground of sex. The provisions
                          are based on the principle of gender equality. This particular principle is featured in Preamble,
                          Fundamental rights and Directive Principles. Indian constitution gives power to the States to
                          make laws for the empowerment and the betterment of the women. Constitution allows the
                          positive discrimination in favour of women by the States so that equality can be assured.
                          In the same sequence following are the specific provisions that are enshrined in Constitution
                          of India related to the rights of women of country.
                            <br /><br />
                             Article 14- This provision talks about equality before law and equal protection of law.
                            It means that no one is above law and every citizen of India will be subjected to the law
                            of land. No matter the person is male or female law is same for both. Law sees both of
                            them with same glasses. Law does not discriminate between men and women and treats
                            them with equality. This provision allows for reasonable classification and by doing so
                            special laws can be made for any class or group on the basis of reasonability.
                            <br /><br />
                             Article 15(1) - This Article says that any State will not discriminate against any citizen
                            of India on any basis whether it is religion, race caste sex or place of birth. This
                            provision includes “sex” also which means there can be no discrimination on the part
                            of State on the basis of gender and man and woman should be treated equally.
                            <br /><br />
                             Article 15(3) - It provides for the special provision for women and children. It says
                            that power of the State to make special laws for women and children will not be barred
                            by this article. Hence positive discrimination can be there.
                            <br /><br />
                             Article 16- This article deals with the provision of equality of opportunity in matters
                            of public employment. As per this provision, for any employment which comes under
                            the control of State or any government employment there will be no discrimination
                            against any person on the basis of religion, race, caste, sex, decent, residence, and place
                            of birth. Hence for any government job nothing of the above mentioned can be the
                            criterion. Ground of Sex cannot make a person eligible for public employment. Females
                            are given the equal opportunity as males for this purpose.
                            
                             <br /><br />
                             <h2>Landmark Cases:</h2>
                             <h3>1. Air India v. Nargesh Meerza (AIR 1981 SC 1829)</h3>
                         In this case Supreme Court struck down the regulation no. 46 of the Air India and Indian
                          Airlines Regulations which provided that an Air Hostess will be retired from service if she
                          attains the age of 35 years or if she marries within 4 years of her service or if she gets pregnant
                          whichever occurred earlier. Court held that the regulation was unconstitutional as it violated
                          provisions of Article 14. Court called the provision as arbitrary, cruel and unreasonable as the
                          impact of the law was open insult to Indian motherhood the most sacrosanct and cherished
                          institution. <br />


                          <h3>2. Lata singh v. State of Uttar Pradesh and Another, (2006, (6) SCALE 583)</h3> 
                          In this case Supreme Court held that every woman who has attained the age of maturity and is
                          mentally sound can marry the man of her own choice. Inter caste marriage is not ban under
                          Hindu Marriage Act. Her fundamental rights provided in the constitution are well protected
                          and cannot be infringed under the garb of social norms. 
                          <br />
                          <h3>III. Personal Laws and Women </h3>
                           In India there are different personal laws that supersede general laws applicable with respect
                            to marriage, divorce, adoption, succession and maintenance. A person belonging to any specific
                            religious community like Hindu, Muslim, Parsi, Christian etc. will be dealt under their specific
                            personal laws for matters stated above. This creates a huge disparity in various provisions
                            including the ones applicable for rights of women. Even though the Constitution provides for
                            equality provisions for all genders but the provisions under specific laws (personal laws) defy
                            the very purpose. In order to overcome this demerit Art. 44 of Indian Constitution falling under
                            Part IV forming part of Directive Principle of State Policy provides for a Uniform Civil Code
                            (UCC) that needs to be implemented throughout the nation.
                      </p>
                  </div>  
                  <div className={styles.conPara}>
                      <h4>Marriage and divorce</h4>
                      <p>Polygamy and polyandry are not kept on equal footing under personal laws. In Muslim Law, a
                        male can have up to 4 legally wedded wives but not vice versa. Similarly, in some Hindu
                        Communities in Goa and Daman and Diu polygamy is permissible under pre-merger laws
                        which are still prevalent but not polyandry 2
                        .


                        Under Parsi personal law, a Parsi woman marrying a non-Parsi man is not accepted as a
                        member of Parsi community which is not the case if a Parsi man marries a non-Parsi woman.
                        In matters of divorce, there are certain differentiating provisions under Muslim law like a
                        female Muslim can divorce her husband by following the legal procedure and only on some
                        specified grounds but a male Muslim can do so even by three pronouncements of ‘talaq’
                        (Talaq-e-bidat/triple talaq) and on any reason howsoever meagre it is. Even though this
                        provision of Muslim law has been struck down by Hon’ble Supreme Court in case of
                        Shamim Ara v. State of U.P. & Anr3 but there is still no codified law for this purpose
                        </p>
                  </div>
      
                  <div className={styles.introContainer2}>
                    <h1>Guardianship and adoption</h1>
                    <br />
                      <p>Under Hindu Law, women have been given an inferior right to adopt a child as compared to a
                      man. A woman can adopt only if her husband has either renounced the world, becomes insane
                      or has ceased to be a Hindu. Also, the mother under Hindu Minority and Guardianship Act,
                      1956 is the second natural guardian of a legitimate child, father being the first being given
                      custody of child up to certain age only (5 years). Similar are the provisions under Muslim Law
                      as well where father is the natural guardian of a child and mother has only rights of custody
                      (Hizzanat) of child up to a certain age depending on the sex of child (up to puberty if female
                      and up to 7 years (in Sunnis) or 2 years (in Shias) if male).
                      This unequal position of rights of mother was challenged in Githa Hariharan v. Reserve Bank
                      of India4 where Hon’ble Supreme Court declared this provision as violative of gender justice
                      guaranteed under Indian Constitution and interpreted the term ‘after’ in section 6 as including
                      absence, total apathy or inability as well along with the death of the father. But it does not still
                      guarantee the equal position of women<br />
                          <img className={styles.introContainer2} src="/src/components/assets/womenlaw2.png" alt="" />

                          <h3>The rule against arbitrariness :-</h3>
                         In light of the discriminatory provisions under different personal laws it is advocated that the
                          Uniform Civil Code shall be applicable throughout the nation replacing all the personal laws
                          so that the benefit of equality provisions can reach all the female citizens of the country in order
                          to achieve the gender justice. Personal laws mirror the patriarchal structure of the society and
                          reflect the gender biasness which is a result of absence of engagement of women in their
                          formation. UCC on the other hand are set of civil laws aimed at extending the gender just
                          provisions of personal laws to everyone uniformly so as to ensure empowerment of women
                          and marginalised sections of society. <br /><br />
                          But it is very unfortunate that these days UCC has become more of a political agenda rather
                          than being a measure of development. It has remained in controversy in past few years because
                          of some baseless arguments like it seeks to reform Muslim Laws only in India which is not true
                          as not only Muslim Law but all personal laws are almost on equal footing in the matter of
                          gender inequality. Also, there is no other method better than implementing a Uniform Civil
                          Code so as to effectuate gender justice in India. The courts have also expressed this view in
                          various landmark judgements5
                          that the certain provisions under personal laws are violative of
                          Articles 14, 15 and 21 of Indian Constitution and that UCC is the best way out so as to ensure
                          that basic fundamental rights do not become a legal battle for women.
                            <br /><br />
                            <h3> Criminal laws and women</h3>
                         Adultery- Section 497 of Indian Penal Code deals with the offence of adultery. It says that if
                          a man has sexual intercourse with some woman who is the wife of other person and for the
                          same no consent was obtained from her husband. Such act will be called adultery not rape.
                          Accused of this offence be punished with imprisonment up to 5 years or with fine or with both.
                          This provision shows weak position of women, as if with the consent of husband a woman can
                          be treated as a sex slave by other man. The provision was made for protection of women, but
                          interpretation of this law may lead to other meanings as well. This law has been criticised for
                          treating women as property owned by men. Hence Supreme Court in Joseph Shine v. Union
                          of India6 <br /><br />
                          called this law as anti-women and held that adultery cannot be a criminal offence but
                          it may be a ground of offence.
                          Rape7- Dictionary meaning of Rape means “unlawful sexual intercourse or any other sexual
                          penetration of the vagina, anus, or mouth of another person, with or without force, by a sex
                          organ, other body part, or foreign object, without the consent of the victim”. Rape is defined
                          under section 375 of Indian Penal Code and its punishment is given under section 376. With
                          the passage of time many developments have taken place in the laws related to rape. 
              
                      </p>
                  </div> 
              </div> <br /><br /><br /><br />
              {/* ================= STATUTORY NEWS SECTION ================= */}
<section className={styles.newsSection}>
  <h2 className={styles.newsHeading}>Latest Womens Law Updates</h2>

  <div className={styles.newsLayout}>

    {/* LEFT NEWS GRID */}
    <div className={styles.newsGrid}>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/womenlawnews1.webp" alt="" />
        <div>
          <h4>High-Handedness By State: Supreme Court Sets Aside Order Removing Chhattisgarh Woman Sarpanch From Office </h4>
          <p>14 Nov 2024</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/womenlawnews2.jpg" alt="" />
        <div>
          <h4>Clothing Is Form Of Self-Expression, Courts Should Not Morally Police Women Based On Their Clothes: Kerala High Court </h4>
          <p> 13 Dec 2024</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/womenlawnews3.webp" alt="" />
        <div>
          <h4>MLA Rahul Mamkootathil Moves Sessions Court Seeking Bail In Third Rape Case  </h4>
          <p>10 Days ago</p>
        </div>
      </div>

      <div className={styles.newsCard}>
        <img src="/src/components/assets/womenlawnews4.jpg" alt="" />
        <div>
          <h4>Kerala High Court Orders Medical Board To Examine Jailed Kenyan Woman Seeking Medical Termination Of Pregnancy </h4>
          <p> 12 Mar 2024</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDEBAR */}
    <div className={styles.newsSidebar}>
      <img className={styles.newsMain} src="/src/components/assets/womenlawnews5.jpg" alt="" /> 
      <p>The Bombay High Court last week transferred a matrimonial case observing that law considers women as belonging to weaker section of society and her inconvenience needs to be prioritized. The court observed,"Even though this reason may be of some importance, the fact that the Applicant in Miscellaneous Civil Application No.171 of 2022 is a lady, her inconvenience needs to be...
      </p>
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
