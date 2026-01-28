import { Star, MapPin, Phone, Mail, Briefcase } from 'lucide-react';
import styles from './LawyersList.module.css';

export default function LawyersList({ onBack }) {
  const lawyers = [
    {
      id: 1,
      name: 'Asim Abbas',
      specialization: 'Regulatory Law',
      experience: '25 years',
      rating: 4.8,
      location: 'Delhi, Bengalore',
      phone: '+91- 95389-79789',
      email: 'rajesh.kumar@law.com',
      image: 'https://www.lexisnexis.co.uk/legal/images/default-source/experts-profile-images/8701.jpg',
      bio: 'Specialized in Regulatory Law with proven track record in high-profile cases'
    },
    {
      id: 2,
      name: 'Hiroo Advani',
      specialization: 'Arbitration law',
      experience: '40 years',
      rating: 4.9,
      reviews: 156,
      location: 'Mumbai',
      phone: ' +91-22 2289 9300',
      email: 'Hiroo.advani@bharucha.in ',
      image: 'https://www.inhousecommunity.com/wp-content/uploads/2018/09/Hiroo-Advani.jpg',
      bio: ' successfully representing clients in multi-million-dollar awards in domestic and international arbitration.Expert in family matters, divorce settlements, and custody cases'
    },
    {
      id: 3,
      name: 'Mahesh Agarwall',
      specialization: 'International Arbitration',
      experience: '22+ years',
      rating: 4.7,
      reviews: 189,
      location: 'New Delhi, India',
      phone: '+91-93827-29386',
      email: 'maheshagarwal9058@gmail.com',
      image: 'https://cdn.law.asia/wp-content/uploads/2023/01/Mahesh-Agarwal.png',
      bio: 'Specializes in mergers, acquisitions, and corporate compliance matters'
    },
    {
      id: 4,
      name: 'P.S. Raman',
      specialization: 'Senior Advocate',
      experience: '30+ years',
      rating: 4.6,
      reviews: 128,
      location: ' Royapettah, Chennai',
      phone: '044-29550284',
      email: 'bharat.lawman@gmail.com.',
      image: 'https://th-i.thgim.com/public/incoming/ias54g/article67727493.ece/alternates/FREE_1200/Senior%20Counsel%20P.S.%20Raman.jpeg',
      bio: 'V. P. Raman served as the third Advocate-General of Tamil Nadu during 1977-79'
    },
    {
      id: 5,
      name: 'Harish Salve',
      specialization: 'Senior Advocate',
      experience: '45+ years',
      rating: 4.8,
      reviews: 167,
      location: 'Poorvi Marg, Vasant Vihar, New Delhi',
      phone: '+91-11-23387233',
      email: 'office@hsalve.com',
      image: 'https://lawbeat.in/sites/default/files/news_images/harish-salve.1.810668_0.jpg',
      bio: 'International Commercial Arbitration, Litigation, Public International Law, Human Rights, Constitutional Law, Energy, Tax.'
    },
    {
      id: 6,
      name: 'Sumathi Lokesh',
      specialization: ' POSH law',
      experience: '30+ years',
      rating: 4.6,
      reviews: 128,
      location: 'Chennai',
      phone: '99529 65421',
      email: 'bharat.lawman@gmail.com.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyN1DN6UHjUbcAC7JSKy_l4I_HLKW_59tNQ&s',
      bio: 'V. P. Raman served as the third Advocate-General of Tamil Nadu during 1977-79'
    },
    {
      id: 7,
      name: 'Advocate Bala Janaki',
      specialization: 'Family Law Advocate',
      experience: '30+ years',
      rating: 4.6,
      reviews: 128,
      location: 'Thambuchetty Street, Chennai',
      phone: '9884011101',
      email: 'sureshcms@gmail.com',
      image: 'https://davidwyld.co.uk/wp-content/uploads/2018/06/Bala-PP2-1.png',
      bio: 'the international law firm Rights & Marks, specializing in Intellectual Property Law (IPR) but also handling Civil, Criminal, and Family law, with extensive experience in litigation, brand protection, and cross-border advisory services, especially in India'
    },
    {
      id: 8,
      name: 'Kapil Sibal',
      specialization: 'Criminal Defense',
      experience: '40+ years',
      rating: 4.6,
      reviews: 128,
      location: 'Delhi',
      phone: '91-011-69261749',
      email: 'nfo@sibalandassociates.in',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Kapil_Sibal_%28cropped%29.jpg',
      bio: 'Senior advocate and former Union Minister with extensive experience in Supreme Court litigation involving constitutional, commercial, and public policy matters'
    },
    {
      id: 9,
      name: 'Adv. B Zakir Hussain',
      specialization: 'Banking & Finance',
      experience: '5+ years',
      rating: 4.6,
      reviews: 128,
      location: '(Thiruvottiyur, Chennai',
      phone: '8428****47',
      email: 'mb.zakirhussain@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcGnyMuG4n3gPsSkD3s8EIyritB6nvKcQEQ&s',
      bio: 'Specializes in banking and finance law, handling loan recovery, secured transactions, SARFAESI matters, and financial regulatory compliance for banks and NBFCs.'
    },
    {
      id: 10,
      name: 'Advocate K Prema',
      specialization: 'Senior Advocate',
      experience: '10+ years',
      rating: 4.6,
      reviews: 128,
      location: 'Armenian Street, Chennai',
      phone: '044-29550284',
      email: 'bharat.lawman@gmail.com.',
      image: 'https://lawrato.com/experts/uploads/2484/thumb_advocate-k-prema.jpg',
      bio: 'Senior advocate with extensive experience in high-value civil, corporate, and appellate litigation, representing clients before the High Court and various tribunals'
    },
    {
      id:11,
      name: 'Adv. Ravi Shankar',
      specialization: 'Corporate Law',
      experience: '20+ years',
      rating: 4.6,
      reviews: 128,
      location: ' Anna Nagar, Chennai',
      phone: '09731840177',
      email: 'rsvrlawfirm@gmail.com',
      image: 'https://lawrato.com/expert_images/thumb/webp/advocate-ravi-shankar-chennai.webp',
      bio: 'Advises corporate clients on business transactions, commercial contracts, regulatory compliance, and company law matters, with representation before corporate tribunals and regulatory bodies.'
    },
    {
      id: 12,
      name: 'Saravvanan Rajendra',
      specialization: 'Property & Family Law:',
      experience: '10+ years',
      rating: 4.6,
      reviews: 128,
      location: ' Maduravoyal, Chennai',
      phone: '9994287060',
      email: 'info@lawyerchennai.com.',
      image: 'https://media.licdn.com/dms/image/v2/C5103AQEbwzzml0ss8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548076772174?e=2147483647&v=beta&t=rtgnPiipi90c94ct1Tk4-oUnDZUC60TD6CXd6zg9nGg',
      bio: 'handle complex property inheritance and transfer matters. One client sought our advice on transferring property from father to son during the father’s lifetime.'
    },
    {
      id: 13,
      name: 'Raghuraman Balaji',
      specialization: 'Divorce Advocate',
      experience: '5+ years',
      rating: 4.6,
      reviews: 128,
      location: ' Anna Nagar, Chennai',
      phone: '98416 53999',
      email: 'raghuramanbalaji@gmail.com.',
      image: 'https://lawrato.com/experts/uploads/11711/thumb_raghu.jpg',
      bio: 'Family and divorce advocate assisting clients with mutual consent divorce, contested divorce, maintenance, child custody, and matrimonial dispute resolution before family courts'
    },
    {
      id: 14,
      name: 'Adv. Fathima Sulthana',
      specialization: 'Labour Advocate',
      experience: '30+ years',
      rating: 4.6,
      reviews: 128,
      location: 'Parrys, Chennai',
      phone: '08105646570',
      email: 'bharat.lawman@gmail.com.',
      image: 'https://www.pathlegal.in/photos/face/df.png',
      bio: 'Practices in labour and employment matters, advising on workplace disputes, employee rights, statutory compliance, and industrial relations before labour courts and tribunals'
    },
    {
      id: 15,
      name: 'Adv. S.ANITHA',
      specialization: ' ADVOCATE GENERAL',
      experience: '30+ years',
      rating: 4.6,
      reviews: 128,
      location: 'Chennai',
      phone: '7010090300',
      email: ' ani.shanmugam@gmail.com',
      image: 'https://lawrato.com/expert_images/thumb/webp/advocate-devapriya-v.webp',
      bio: 'V. P. Raman served as the third Advocate-General of Tamil Nadu during 1977-79'
    },
  ];

  return (
    <div className={styles.lawyersContainer}>
      <div className={styles.lawyersHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
        <div className={styles.headerContent}>
          <h1>Find Your Lawyer</h1>
          <p>Connect with experienced legal professionals</p>
        </div>
      </div>

      <div className={styles.lawyersContent}>
        <div className={styles.filterSection}>
          <input
            type="text"
            placeholder="Search lawyers by name or specialization..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.lawyersGrid}>
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className={styles.lawyerCard}>
              <div className={styles.cardHeader}>
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className={styles.lawyerImage}
                />
                <div className={styles.lawyerBadge}>
                  <Briefcase className={styles.badgeIcon} />
                  {lawyer.specialization}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.lawyerName}>{lawyer.name}</h3>

                <div className={styles.ratingBox}>
                  <div className={styles.stars}>
                    <Star className={styles.filledStar} />
                    <span className={styles.rating}>{lawyer.rating}</span>
                  </div>
                  <span className={styles.reviews}>({lawyer.reviews} reviews)</span>
                </div>

                <p className={styles.bio}>{lawyer.bio}</p>

                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <Briefcase className={styles.detailIcon} />
                    <span>{lawyer.experience}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <MapPin className={styles.detailIcon} />
                    <span>{lawyer.location}</span>
                  </div>
                </div>

                <div className={styles.contactInfo}>
                  <a href={`tel:${lawyer.phone}`} className={styles.contactLink}>
                    <Phone className={styles.contactIcon} />
                    Call
                  </a>
                  <a href={`mailto:${lawyer.email}`} className={styles.contactLink}>
                    <Mail className={styles.contactIcon} />
                    Email
                  </a>
                </div>

                <button className={styles.consultButton}>
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}