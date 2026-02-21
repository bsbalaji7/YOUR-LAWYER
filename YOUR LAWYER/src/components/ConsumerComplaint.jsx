import { useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./ConsumerComplaint.module.css";

export default function ConsumerComplaint({ onBack }) {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    grievanceType: "Grievance",
    classification: "",
    state: "",
    city: "",
    category: "",
    nature: "",
    company: "",
    productValue: "",
    details: "",
    expectation: "",
    registeredWithCompany: "",
  });

  const [files, setFiles] = useState({
    doc1: null,
    doc2: null,
    doc3: null,
  });

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/msword",
  ];

  const validateFile = (file) => {
    if (!file) return true;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      alert("Only jpg, png, pdf, doc allowed");
      return false;
    }

    if (file.name.split(".").length > 2) {
      alert("Double extensions not allowed");
      return false;
    }

    return true;
  };

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (validateFile(file)) {
      setFiles({ ...files, [key]: file });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      .ilike("case_number", `CON/${year}/%`);

    const nextNumber = (existing?.length || 0) + 1;
    const formatted = String(nextNumber).padStart(4, "0");
    const caseNumber = `CON/${year}/${formatted}`;

    const uploadFile = async (file, label) => {
      if (!file) return null;

      const { data, error } = await supabase.storage
        .from("case-files")
        .upload(`${caseNumber}-${label}-${file.name}`, file);

      if (error) {
        alert(error.message);
        return null;
      }

      return data.path;
    };

    const doc1Path = await uploadFile(files.doc1, "doc1");
    const doc2Path = await uploadFile(files.doc2, "doc2");
    const doc3Path = await uploadFile(files.doc3, "doc3");

    const { error } = await supabase.from("cases").insert([
      {
        user_id: user.id,
        case_number: caseNumber,
        title: form.nature,
        type: "Consumer Complaint",
        category: "Consumer Law",
        description: `
Company: ${form.company}
State: ${form.state}
City: ${form.city}
Category: ${form.category}
Product Value: ${form.productValue}
Expectation: ${form.expectation}
Registered With Company: ${form.registeredWithCompany}

${form.details}
        `,
        stage: "Complaint Filed",
        status: "Active",
        filed_date: new Date().toISOString(),
        document1: doc1Path,
        document2: doc2Path,
        document3: doc3Path,
      },
    ]);

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    alert(`Complaint Submitted Successfully\nCase No: ${caseNumber}`);
    setLoading(false);
    onBack();
  };

  if (!agreed) {
    return (
      <div className={styles.popup}>
        <h3>
          List of Subjects/Topics which can not be treated as Consumer Grievances
        </h3>
        <ul>
          <li>RTI Matters</li>
          <li>Court related / Subjudice matters</li>
          <li>Grievance against foreign Government</li>
          <li>Religious matters</li>
          <li>Suggestions</li>
        </ul>
        <p>
          I agree that my grievance does not fall in any of the above listed
          categories
        </p>
        <div className={styles.popupButtons}>
          <button onClick={() => setAgreed(true)}>I Agree</button>
          <button onClick={onBack}>I Do Not Agree</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Grievance Registration Form</h1>

      <form onSubmit={handleSubmit} className={styles.form}>

        <div className={styles.grid2}>
          <div>
            <label>Grievance Type *</label>
            <select name="grievanceType" onChange={handleChange}>
              <option>Grievance</option>
            </select>
          </div>

          <div>
            <label>Grievance Classification *</label>
            <input name="classification" onChange={handleChange} required />
          </div>

          <div>
            <label>State *</label>
            <input name="state" onChange={handleChange} required />
          </div>

          <div>
            <label>Purchase City *</label>
            <input name="city" onChange={handleChange} required />
          </div>

          <div>
            <label>Category *</label>
            <input name="category" onChange={handleChange} required />
          </div>

          <div>
            <label>Nature of Grievance *</label>
            <input name="nature" onChange={handleChange} required />
          </div>

          <div>
            <label>Company *</label>
            <input name="company" onChange={handleChange} required />
          </div>

          <div>
            <label>Product Value *</label>
            <input name="productValue" onChange={handleChange} required />
          </div>
        </div>

        <label>Grievance Details *</label>
        <textarea
          rows="4"
          name="details"
          required
          onChange={handleChange}
        />

        <div className={styles.grid2}>
          <div>
            <label>Expectation *</label>
            <input name="expectation" required onChange={handleChange} />
          </div>

          <div>
            <label>Have you registered with company? *</label>
            <select
              name="registeredWithCompany"
              required
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* DOCUMENT UPLOADS */}
        <div className={styles.docSection}>
          <label>Document 1 (Product Related)</label>
          <input type="file" onChange={(e) => handleFileChange(e, "doc1")} />
          <small>
            (Only jpg, jpeg, png, doc or pdf allowed. Max 5MB. Double extensions not allowed.)
          </small>
        </div>

        <div className={styles.docSection}>
          <label>Document 2 (Product Related)</label>
          <input type="file" onChange={(e) => handleFileChange(e, "doc2")} />
          <small>
            (Only jpg, jpeg, png, doc or pdf allowed. Max 5MB. Double extensions not allowed.)
          </small>
        </div>

        <div className={styles.docSection}>
          <label>Document 3 (Product Related)</label>
          <input type="file" onChange={(e) => handleFileChange(e, "doc3")} />
          <small>
            (Only jpg, jpeg, png, doc or pdf allowed. Max 5MB. Double extensions not allowed.)
          </small>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  );
}