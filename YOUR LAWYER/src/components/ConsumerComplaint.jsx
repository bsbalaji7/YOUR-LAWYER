import { useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./ComplaintForm.module.css";

export default function ConsumerComplaint({ onBack }) {
  const [form, setForm] = useState({
    product: "",
    company: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const caseId = `CON-${Date.now()}`;

    await supabase.from("cases").insert([
      {
        case_id: caseId,
        title: `${form.product} Issue`,
        type: "Consumer Complaint",
        category: "Consumer Law",
        description: form.description,
      }
    ]);

    alert("Consumer Complaint Submitted");
    onBack();
  };

  return (
    <div className={styles.formContainer}>
      <h2>Raise Consumer Complaint</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          required
          onChange={(e) => setForm({ ...form, product: e.target.value })}
        />

        <input
          placeholder="Company Name"
          required
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <textarea
          placeholder="Explain issue"
          required
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}