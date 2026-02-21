import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./PoliceComplaint.module.css";

export default function PoliceComplaint({ onBack }) {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    district: "",
    name: "",
    gender: "",
    dob: "",
    address: "",
    mobile: "",
    email: "",
    subject: "",
    dateOfOccurrence: "",
    placeOfOccurrence: "",
    description: "",
  });

  const subjects = [
    { en: "PERSON MISSING", ta: "நபர் காணவில்லை" },
    { en: "CELL PHONE MISSING / THEFT", ta: "செல்போன் திருட்டு" },
    { en: "VEHICLE THEFT", ta: "வாகனம் திருட்டு" },
    { en: "CHEATING / EMBEZZLEMENT", ta: "மோசடி" },
    { en: "PUBLIC NUISANCE", ta: "பொது தொல்லை" },
  ];

  const districts = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruchirappalli",
  ];

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const random = Math.random().toString(36).substring(2, 8);
    setCaptcha(random);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userCaptcha !== captcha) {
      alert("Invalid CAPTCHA");
      generateCaptcha();
      return;
    }

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("User not logged in");
      setLoading(false);
      return;
    }

    const year = new Date().getFullYear();

    const { data: existing } = await supabase
      .from("cases")
      .select("case_number")
      .ilike("case_number", `POL/${year}/%`);

    const nextNumber = (existing?.length || 0) + 1;
    const formatted = String(nextNumber).padStart(4, "0");
    const caseNumber = `POL/${year}/${formatted}`;

    const { error } = await supabase.from("cases").insert([
      {
        user_id: user.id,
        case_number: caseNumber,
        title: form.subject,
        type: "Police Complaint",
        category: "Criminal Law",
        description: `
District: ${form.district}
Name: ${form.name}
Gender: ${form.gender}
DOB: ${form.dob}
Address: ${form.address}
Mobile: ${form.mobile}
Email: ${form.email}
Date of Occurrence: ${form.dateOfOccurrence}
Place: ${form.placeOfOccurrence}

${form.description}
        `,
        stage: "Complaint Filed",
        status: "Active",
        filed_date: new Date().toISOString(),
      },
    ]);

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    alert(`Complaint Registered Successfully\nCase No: ${caseNumber}`);
    setLoading(false);
    onBack();
  };

  return (
    <div className={styles.container}>
      <h1>COMPLAINT REGISTRATION FORM</h1>

      <form onSubmit={handleSubmit}>

        <label>City / District *</label>
        <select name="district" required onChange={handleChange}>
          <option value="">Select District</option>
          {districts.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <h2>Details of Complainant</h2>

        <input
          name="name"
          placeholder="Name / பெயர்"
          required
          onChange={handleChange}
        />

        <select name="gender" onChange={handleChange}>
          <option>Select Gender / பாலினம்</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input type="date" name="dob" onChange={handleChange} />

        <textarea
          name="address"
          placeholder="Address / முகவரி"
          onChange={handleChange}
        />

        <input
          name="mobile"
          placeholder="Mobile No"
          required
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email ID"
          onChange={handleChange}
        />

        <h2>Details of Complaint</h2>

        <select name="subject" required onChange={handleChange}>
          <option value="">Select Subject</option>
          {subjects.map((s) => (
            <option key={s.en} value={s.en}>
              {s.en} ({s.ta})
            </option>
          ))}
        </select>

        <input
          type="date"
          name="dateOfOccurrence"
          onChange={handleChange}
        />

        <textarea
          name="placeOfOccurrence"
          placeholder="Place of Occurrence (Max 200 chars)"
          maxLength={200}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Complaint Description (Max 2000 chars)"
          maxLength={2000}
          required
          onChange={handleChange}
        />

        {/* CAPTCHA */}
        <div className={styles.captchaBox}>
          <span className={styles.captchaText}>{captcha}</span>
          <button type="button" onClick={generateCaptcha}>
            ↻
          </button>
        </div>

        <input
          placeholder="Enter Security Code"
          value={userCaptcha}
          onChange={(e) => setUserCaptcha(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register Complaint"}
        </button>

      </form>
    </div>
  );
}