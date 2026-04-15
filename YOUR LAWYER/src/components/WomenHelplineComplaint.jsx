import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./WomenHelplineComplaint.module.css";

export default function WomenHelplineComplaint({ onBack }) {

const [form, setForm] = useState({
name: "",
mobile: "",
email: "",
dob: "",
address: "",
district: "",
policeStation: "",
complaintType: "",
description: ""
});

const [loading, setLoading] = useState(false);

useEffect(() => {
fetchProfile();
}, []);

// ✅ Auto fetch user
const fetchProfile = async () => {
const { data: { user } } = await supabase.auth.getUser();
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

// ✅ SUBMIT (AUTO CASE TRACKING)
const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);

const { data: { user } } = await supabase.auth.getUser();

if (!user) {
  alert("User not logged in");
  setLoading(false);
  return;
}

const year = new Date().getFullYear();

// 🔥 Generate case number
const { data: existingCases } = await supabase
  .from("cases")
  .select("case_number")
  .ilike("case_number", `WH/${year}/%`);

const next = (existingCases?.length || 0) + 1;
const caseNumber = `WH/${year}/${String(next).padStart(4, "0")}`;

// 🔥 Insert into cases table
const { error } = await supabase.from("cases").insert([
  {
    user_id: user.id,
    case_number: caseNumber,
    title: "Women Helpline Complaint",
    type: "Women Safety",
    category: "Women Protection",
    description: `
Complaint Type: ${form.complaintType}
Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email}
District: ${form.district}
Police Station: ${form.policeStation}

Details:
${form.description}
`,
status: "Active",
status_color: "active",
progress: 10,
filed_date: new Date().toISOString()
}
]);

if (error) {
  alert(error.message);
  setLoading(false);
  return;
}

alert(`✅ Complaint Submitted\nCase Number: ${caseNumber}`);
setLoading(false);
onBack();
};

return ( <div className={styles.container}>
  <h2 className={styles.header}>Women Helpline Complaint</h2>

  {/* Emergency Info */}
  <div className={styles.docSection}>
    <><strong>Emergency: Call 181 Women Helpline</strong><small>Your complaint will be securely recorded & tracked.</small></>
  </div>

  <form onSubmit={handleSubmit} className={styles.form}>

    <div className={styles.grid2}>
      <div>
        <label>Name *</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Mobile *</label>
        <input name="mobile" value={form.mobile} onChange={handleChange} required />
      </div>
    </div>

    <label>Email *</label>
    <input name="email" value={form.email} onChange={handleChange} required />

    <label>Date of Birth</label>
    <input type="date" name="dob" value={form.dob} onChange={handleChange} />

    <label>Address</label>
    <textarea name="address" value={form.address} onChange={handleChange} />

    <div className={styles.grid2}>
      <div>
        <label>District *</label>
        <select name="district" value={form.district} onChange={handleChange} required>
          <option value="">Select</option>
          <option>Chennai</option>
          <option>Coimbatore</option>
          <option>Madurai</option>
        </select>
      </div>

      <div>
        <label>Police Station *</label>
        <select name="policeStation" value={form.policeStation} onChange={handleChange} required>
          <option value="">Select</option>
          <option>T Nagar Police Station</option>
          <option>Adyar Police Station</option>
        </select>
      </div>
    </div>

    <label>Complaint Type *</label>
    <select name="complaintType" value={form.complaintType} onChange={handleChange} required>
      <option value="">Select</option>
      <option>Domestic Violence</option>
      <option>Harassment</option>
      <option>Stalking</option>
      <option>Dowry</option>
      <option>Workplace Abuse</option>
    </select>

    <label>Description *</label>
    <textarea
      name="description"
      value={form.description}
      onChange={handleChange}
      required
    />

    <button type="submit" disabled={loading}>
      {loading ? "Submitting..." : "Submit Complaint"}
    </button>

  </form>
</div>
);
}
