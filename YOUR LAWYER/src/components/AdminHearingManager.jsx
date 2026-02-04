import { useState, useEffect } from "react";
import { supabase } from "./supabase"; // ✅ FIXED PATH
import { useAuth } from "../contexts/AuthContext";

export default function AdminHearingManager({ onBack }) {
  const { profile } = useAuth();

  const [hearings, setHearings] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    case_id: "",
    hearing_date: "",
    location: "",
    notes: "",
  });

  /* ================= FETCH CASES ================= */
  const [cases, setCases] = useState([]);

  const fetchCases = async () => {
    const { data } = await supabase.from("cases").select("id, title");
    setCases(data || []);
  };

  /* ================= ✅ MISSING FUNCTION FIXED ================= */
  const fetchHearings = async () => {
    const { data } = await supabase
      .from("hearing_dates")
      .select("*")
      .order("hearing_date");

    setHearings(data || []);
  };

  useEffect(() => {
    fetchCases();
    fetchHearings();
  }, []);

  /* ================= ADD ================= */
  const addHearing = async () => {

  // ✅ FIX: prevent empty uuid
  if (!form.case_id) {
    alert("Please enter Case ID");
    return;
  }

  const { error } = await supabase
    .from("hearing_dates")
    .insert([form]);

  if (error) return alert(error.message);

  clearForm();
  fetchHearings();
};

  /* ================= UPDATE ================= */
  const updateHearing = async () => {
    const { error } = await supabase
      .from("hearing_dates")
      .update(form)
      .eq("id", editingId);

    if (error) return alert(error.message);

    clearForm();
    fetchHearings();
  };

  /* ================= DELETE ================= */
  const deleteHearing = async (id) => {
    await supabase.from("hearing_dates").delete().eq("id", id);
    fetchHearings();
  };

  /* ================= EDIT LOAD ================= */
  const editHearing = (h) => {
    setEditingId(h.id);
    setForm({
      case_id: h.case_id,
      hearing_date: h.hearing_date.slice(0, 16),
      location: h.location,
      notes: h.notes,
    });
  };

  const clearForm = () => {
    setEditingId(null);
    setForm({
      case_id: "",
      hearing_date: "",
      location: "",
      notes: "",
    });
  };

  /* ================= SECURITY ================= */
  if (profile?.role !== "admin") {
    return <h3>Access denied 🚫</h3>;
  }

  /* ================= UI (UNCHANGED) ================= */
  return (
    <div style={{ padding: 30 }}>
      <button onClick={onBack}>← Back</button>

      <h2>Admin Hearing Manager</h2>

      {/* ===== Form ===== */}
      <div style={{ display: "grid", gap: 10, marginBottom: 20 }}>
        <input
          placeholder="Case ID"
          value={form.case_id}
          onChange={(e) =>
            setForm({ ...form, case_id: e.target.value })
          }
        />
        <input
          placeholder="Case No"
          value={form.case_no}
          onChange={(e) =>
            setForm({ ...form, case_no: e.target.value })
          }
        />

        <input
          type="datetime-local"
          value={form.hearing_date}
          onChange={(e) =>
            setForm({ ...form, hearing_date: e.target.value })
          }
        />

        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />

        <input
          placeholder="Notes"
          value={form.notes}
          onChange={(e) =>
            setForm({ ...form, notes: e.target.value })
          }
        />

        {editingId ? (
          <>
            <button onClick={updateHearing}>Update</button>
            <button onClick={clearForm}>Cancel</button>
          </>
        ) : (
          <button onClick={addHearing}>Add Hearing</button>
        )}
      </div>

      {/* ===== List ===== */}
      {hearings.map((h) => (
        <div
          key={h.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <b>{new Date(h.hearing_date).toLocaleString()}</b>
            <p>{h.location}</p>
            <small>{h.notes}</small>
          </div>

          <div>
            <button onClick={() => editHearing(h)}>Edit</button>
            <button onClick={() => deleteHearing(h.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
