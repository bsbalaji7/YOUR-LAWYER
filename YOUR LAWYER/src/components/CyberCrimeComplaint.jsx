import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./CyberCrimeComplaint.module.css";

export default function CyberCrimeComplaint({ onBack }) {

  const [form, setForm] = useState({
    title: "",
    name: "",
    mobile: "",
    dob: "",
    gender: "",
    email: "",
    relationType: "",
    relationName: "",
    houseNo: "",
    street: "",
    colony: "",
    city: "",
    tehsil: "",
    state: "TAMIL NADU",
    district: "",
    policeStation: "",
    pincode: ""
  });

  const [loading, setLoading] = useState(false);

  // 🔥 Auto fetch logged-in profile
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      setForm((prev) => ({
        ...prev,
        name: data.full_name || "",
        mobile: data.phone || "",
        email: data.email || ""
      }));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 FINAL SUBMIT FUNCTION WITH AUTO CASE NUMBER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      alert("User not logged in");
      setLoading(false);
      return;
    }

    const currentYear = new Date().getFullYear();

    // 🔥 Count existing CYB cases for this year
    const { data: existingCases, error: countError } = await supabase
      .from("cases")
      .select("case_number")
      .ilike("case_number", `CYB/${currentYear}/%`);

    if (countError) {
      console.error(countError);
      alert("Error generating case number");
      setLoading(false);
      return;
    }

    const nextNumber = (existingCases?.length || 0) + 1;
    const formattedNumber = String(nextNumber).padStart(4, "0");

    const caseNumber = `CYB/${currentYear}/${formattedNumber}`;

    // 🔥 Insert complaint
    const { error } = await supabase.from("cases").insert([
      {
        user_id: user.id,
        case_number: caseNumber,
        title: "Cyber Crime Complaint",
        type: "Cyber Crime",
        category: "Cyber Law",
        description: `
Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email}
District: ${form.district}
Police Station: ${form.policeStation}
        `,
        status: "Active",
        status_color: "active",
        progress: 10,
        filed_date: new Date().toISOString()
      }
    ]);

    if (error) {
      console.error(error);
      alert(error.message);
      setLoading(false);
      return;
    }

    alert(`Complaint Submitted Successfully\nCase Number: ${caseNumber}`);
    setLoading(false);
    onBack();
  };
  return (
    <div className={styles.container}>
      
      {/* Top Menu */}
      <div className={styles.topMenu}>
        <span>Draft Complaint</span>
        <span>Report Cyber Crime</span>
        <span>Check Status</span>
        <span>Complaint Withdraw</span>
        <span>Update Mobile Number</span>
        <span>User Profile</span>
      </div>

      {/* Section Header */}
      <div className={styles.sectionHeader}>USER PROFILE DETAILS</div>

      <form onSubmit={handleSubmit} className={styles.form}>

        {/* Title */}
        <div className={styles.row}>
          <label>Title *</label>
          <div className={styles.radioGroup}>
            {["Mr", "Mrs", "Dr", "Shri", "Smt", "Prof", "Miss"].map((t) => (
              <label key={t}>
                <input
                  type="radio"
                  name="title"
                  value={t}
                  checked={form.title === t}
                  onChange={handleChange}
                />
                {t}
              </label>
            ))}
          </div>
        </div>

        {/* Name */}
        <div className={styles.row}>
          <label>Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mobile */}
        <div className={styles.row}>
          <label>Mobile *</label>
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* DOB */}
        <div className={styles.row}>
          <label>DOB *</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className={styles.row}>
          <label>Gender *</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Email */}
        <div className={styles.row}>
          <label>Email Id *</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Relation */}
        <div className={styles.row}>
          <label>Father/Mother/Spouse *</label>
          <div className={styles.inline}>
            <select
              name="relationType"
              value={form.relationType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Spouse</option>
            </select>
            <input
              name="relationName"
              value={form.relationName}
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Address Section */}
        <div className={styles.addressHeader}>Present Address</div>

        <div className={styles.addressGrid}>
          <input name="houseNo" value={form.houseNo} placeholder="House No." onChange={handleChange} />
          <input name="street" value={form.street} placeholder="Street Name" onChange={handleChange} />
          <input name="colony" value={form.colony} placeholder="Colony" onChange={handleChange} />
          <input name="city" value={form.city} placeholder="Village/Town/City" onChange={handleChange} />
          <input name="tehsil" value={form.tehsil} placeholder="Tehsil" onChange={handleChange} />

          <select name="district" value={form.district} onChange={handleChange} required>
            <option value="">--Select District--</option>
            <option>Chennai</option>
            <option>Coimbatore</option>
            <option>Madurai</option>
            <option>Tiruchirappalli</option>
            <option>Salem</option>
            <option>Erode</option>
            <option>Vellore</option>
            <option>Thanjavur</option>
            <option>Tirunelveli</option>
            <option>Thoothukudi</option>
            <option>Dindigul</option>
            <option>Kanchipuram</option>
            <option>Namakkal</option>
            <option>Krishnagiri</option>
            <option>Cuddalore</option>
            <option>Villupuram</option>
          </select>

          <select name="policeStation" value={form.policeStation} onChange={handleChange} required>
            <option value="">--Select Police Station--</option>
            <option>T Nagar Police Station</option>
            <option>Adyar Police Station</option>
            <option>Anna Nagar Police Station</option>
            <option>Velachery Police Station</option>
            <option>Tambaram Police Station</option>
            <option>Avadi Police Station</option>
            <option>RS Puram Police Station</option>
            <option>Gandhipuram Police Station</option>
            <option>Peelamedu Police Station</option>
            <option>Madurai Town Police Station</option>
            <option>Srirangam Police Station</option>
            <option>Salem Town Police Station</option>
            <option>Erode South Police Station</option>
            <option>Vellore North Police Station</option>
            <option>Thanjavur Medical College PS</option>
            <option>Tirunelveli Junction PS</option>
          </select>

          <input name="pincode" value={form.pincode} placeholder="Pincode" onChange={handleChange} />
        </div>

        <div className={styles.note}>
          (AlphaNumeric and Symbols like @ . , ( ) / - : are allowed.)
        </div>

        <button type="submit" className={styles.saveBtn}>
          Save & Continue
        </button>

      </form>
    </div>
  );
}