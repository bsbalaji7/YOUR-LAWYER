import { Link } from "react-router-dom";
import { Scale, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import styles from "./PopularCasesAndJudgements.module.css";
import { Shield, Heart, Eye, Users, DollarSign, Gavel, Lock, School } from 'lucide-react';
import { useState,useEffect } from "react";



export default function PopularCasesAndJudgements({ children }) {
  const { profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const sliderImages = [
    "/src/components/assets/pcjhead1.avif",

    "/src/components/assets/pcjhead2.avif",

    "/src/components/assets/pcjhead3.jpeg"
  ];
  const [slide, setSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSlide(prev => (prev + 1) % sliderImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

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
        <h1>Popular Cases And Judgements</h1>
          <section className={styles.sliderSection}>
            <img
              src={sliderImages[slide]}
              alt="legal awareness"
              className={styles.sliderImage}
            />
          </section>

              <div id="topics" className={styles.topContainer}>
                  <div className={styles.slogan}>
                      <h4>Liberty:</h4>
                      <p>
                        Justice Today,<br /> Stronger India Tomorrow<br />
                      </p>
                  </div>
      
                  <div className={styles.introContainer}>
                      <p>

                            Popular cases and judgments in India refer to landmark decisions delivered by the Supreme Court of India and various High Courts that have significantly influenced the country’s legal framework, constitutional interpretation, and democratic structure. These judgments are not just ordinary court decisions; they shape national policies, redefine citizens’ rights, and strengthen the foundation of justice in India. <br /> <br />
                          
                          <img className={styles.introContainer} src="/src/components/assets/womenlaw3.jpg" alt="" />
                        Over the years, the Indian judiciary has played a crucial role in safeguarding the Constitution and ensuring that the rule of law prevails. Through progressive interpretations and bold rulings, the courts have expanded the scope of fundamental rights, ensured equality, protected minority interests, and maintained a balance of power between the legislature, executive, and judiciary.
                         <br /> <br />
                         <h3>⚖️ Why Are These Cases Called “Landmark” Judgments?</h3> <br />
                          Landmark judgments are decisions that bring significant legal, social, or political change. They become guiding principles for future cases and are frequently cited in courts, academic studies, and public discussions.

                          <br /><br />
                          1️⃣ Interpret Important Constitutional Provisions <br />

                          The courts clarify the meaning and scope of constitutional articles, ensuring that laws align with constitutional values. <br /> <br />


                          2️⃣ Protect Fundamental Rights<br />

                          They safeguard rights such as equality, freedom of speech, personal liberty, privacy, and dignity under Part III of the Constitution.<br /><br />

                          3️⃣ Establish Legal Precedents<br />

                          Under the doctrine of precedent, decisions of higher courts guide lower courts in future cases, ensuring consistency and fairness in the judicial system.<br /><br />

                          4️⃣ Promote Social and Political Reforms<br />

                          Many landmark judgments have addressed issues like gender equality, minority rights, workplace safety, privacy rights, and LGBTQ rights.<br /><br />

                           <img className={styles.introContainer2} src="/src/components/assets/pcj2.avif" alt="" />

                          5️⃣ Strengthen Democracy and Rule of Law<br />

                          By reviewing government actions and ensuring accountability, the judiciary acts as a guardian of democracy.<br /><br />

                          6️⃣ Expand the Scope of Justice<br />

                          Courts have interpreted laws dynamically to adapt to changing societal needs and modern challenges.
                          <br /><br /><br />
                           <center><h1>Kesavananda Bharati Case (1973)</h1> </center> <br />
                           <h3>📌 Case: Kesavananda Bharati vs State of Kerala</h3><br />
                           <h3>🏛 Court: Supreme Court of India</h3><br />
                           <h3>📅 Year: 1973</h3><br />
      
                         The Kesavananda Bharati case (1973) is one of the most important landmark judgments in Indian constitutional history. The case was filed by Swami Kesavananda Bharati, the head of a religious institution in Kerala, challenging the Kerala government’s land reform laws which affected the property owned by his mutt. The main issue before the Court was whether Parliament has unlimited power to amend the Constitution under Article 368, especially after several constitutional amendments that tried to restrict Fundamental Rights.
                            <br /><br />
                            <img className={styles.introContainer2} src="/src/components/assets/pcjhead1.avif" alt="" />
                             The case was heard by the largest bench in Indian judicial history, consisting of 13 judges, and the judgment was delivered with a narrow majority of 7:6. The Supreme Court held that Parliament has the power to amend any part of the Constitution, including Fundamental Rights. However, it clearly stated that Parliament cannot alter or destroy the “Basic Structure” of the Constitution. This principle came to be known as the Basic Structure Doctrine, which became a foundation of Indian constitutional law.
                            <br /><br />
                            According to the judgment, certain essential features such as the supremacy of the Constitution, rule of law, separation of powers, judicial review, secularism, federalism, democracy, and sovereignty form the basic structure. These features cannot be removed or damaged through constitutional amendments. If any amendment violates the basic structure, the Supreme Court has the power to strike it down.
                            <br /><br />
                             This case is significant because it limited the amending power of Parliament and strengthened the role of the judiciary. It protected the core values of the Constitution and ensured that India remains a democratic and federal nation.
                            
                             <br /><br />
                             <h3>📜 Important Articles Involved</h3>
                        • Article 368 – Deals with the power of Parliament to amend the Constitution. The main question was whether this power is unlimited. <br /> <br />
                        • Article 13 – States that any law violating Fundamental Rights is void. The issue was whether constitutional amendments are “law” under Article 13. <br /> <br />

                  <center>      <h4>⚖️ Judgment and Doctrine</h4>

                          The Supreme Court (13-judge bench, 7:6 majority) held that: <br />

                          ✔ Parliament can amend any part of the Constitution under Article 368. <br />
                          ✔ Constitutional amendments are not ordinary “law” under Article 13. <br />
                          ❌ But Parliament cannot destroy or damage the Basic Structure of the Constitution. <br />

                          This led to the formation of the Basic Structure Doctrine. <br /> <br /> </center>


                         <center><h1>Maneka Gandhi v. Union of India</h1> </center> <br />
                           <h3>Maneka Gandhi v. Union of India</h3><br />
                           <h3>🏛 Court: Supreme Court of India</h3><br />
                           <h3>📅 Year: 1979</h3><br />
                          <br />
                          The Maneka Gandhi case (1978) is a landmark judgment that greatly expanded the scope of Right to Personal Liberty under Article 21 of the Indian Constitution. The case arose when Maneka Gandhi’s passport was seized by the Government of India under the Passport Act, 1967, without giving proper reasons. She challenged this action, claiming it violated her Fundamental Rights. <br />
                          The key question was whether the “procedure established by law” under Article 21 can be any procedure passed by Parliament, or whether it must be fair, just, and reasonable.
                      </p>
                  </div>  <br />
                  <div className={styles.conPara}>
                      <h4>📜 Important Articles Involved</h4>
                      <p>

                        • Article 21 – Protection of life and personal liberty. It states that no person shall be deprived of life or personal liberty except according to “procedure established by law.” <br />
                        • Article 14 – Right to Equality before law. <br />
                        • Article 19(1)(a) & 19(1)(g) – Freedom of speech and expression and freedom to practice any profession. <br /> 
                        “Article 21 became powerful after Maneka Gandhi – Life means dignified life with fair procedure.” <br /> <br />

    <img src="/src/components/assets/pcj3.webp" alt="" />
                      <h2>  🏛 Judgment</h2>

                          The Supreme Court held that: <br /> <br />
                          

                          ✔ The procedure under Article 21 must be fair, just, and reasonable, not arbitrary or oppressive. <br />
                          ✔ Articles 14, 19, and 21 are interconnected and must be read together (Golden Triangle Doctrine). <br />
                          ✔ Any law depriving personal liberty must pass the test of equality (Article 14) and freedom (Article  19). <br /> <br />
                            
                          This judgment expanded the meaning of Right to Life to include: <br /> <br />
                          • Right to live with dignity <br />
                          • Right to travel abroad <br />
                          • Right to privacy (later strengthened in other cases) <br />
                          • Right to legal aid <br />
                          • Right to speedy trial <br />
                        </p>
                  </div>
      
                  <div className={styles.introContainer2}>
                    <h1> Mohd. Ahmed Khan v. Shah Bano Begum</h1>
                    <h3>🏛 Court: Supreme Court of India</h3>
                           <h3>📅 Year: 1985</h3><br />
                    <br />
                      <p>The Shah Bano case (1985) is a landmark judgment related to maintenance rights of divorced Muslim women. This case created a major debate in India about women’s rights, secular law, and the Uniform Civil Code. <br />

Shah Bano, a 62-year-old Muslim woman, was divorced by her husband, Mohd. Ahmed Khan, through triple talaq. After divorce, her husband refused to provide financial maintenance beyond the iddat period (a waiting period after divorce under Muslim personal law). Shah Bano filed a petition under Section 125 of the Criminal Procedure Code (CrPC), 1973, which provides maintenance to a wife who is unable to maintain herself.<br />
                          <img className={styles.introContainer2} src="/src/components/assets/pcj4.png" alt="" />

                        <div className={styles.conPara}>
                      <h4>📜 Important Articles Involved</h4>
                      <p>

                        • Section 125, CrPC – Provides maintenance to wives (including divorced wives), children, and parents who cannot maintain themselves. It applies to all citizens, irrespective of religion.<br />
                       • Article 14 – Right to Equality. <br />
                       • Article 15 – Prohibition of discrimination. <br /> 
                       • Article 44 – Directive Principle of State Policy regarding Uniform Civil Code (UCC). <br /> <br />
                       <center><h3>Main Issue</h3>  <br />
                       <h5>The main question before the Court was:
👉 Whether a Muslim husband is liable to pay maintenance under Section 125 CrPC after divorce, even if Muslim personal law limits maintenance to the iddat period.</h5></center> <br />
                      <h2>  🏛 Judgment</h2>

                          The Supreme Court held that: <br /> <br />
                          

                          ✔ Section 125 CrPC applies to all citizens, including Muslims. <br />
                          ✔ A divorced Muslim woman has the right to claim maintenance if she cannot maintain herself. <br />
                         ✔ Maintenance is not limited only to the iddat period.<br /> 
                         ✔ Religion cannot be used to deny basic rights of financial support.<br /> <br />
                            
                         <h3>🏛 Aftermath – Muslim Women Act, 1986 </h3>  <br /> <br />
                         Due to political and religious opposition, the government passed the Muslim Women (Protection of Rights on Divorce) Act, 1986. <br />

                         This Act limited the husband’s liability mainly to the iddat period, but later judgments interpreted the Act in a way that still protects women’s right to fair maintenance.<br />
                        </p>
                  </div>sage of time many developments have taken place in the laws related to rape. 
              
                      </p>
                  </div> 
              </div> <br /><br /><br /><br />
              {/* ================= STATUTORY NEWS SECTION ================= */}


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
