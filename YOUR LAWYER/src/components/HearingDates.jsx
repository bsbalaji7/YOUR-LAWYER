import { useState, useEffect } from "react";
import { supabase } from "./supabase";

export default function HearingDates() {
  const [hearings, setHearings] = useState([]);

  const fetchHearings = async () => {
    const { data } = await supabase
      .from("hearing_dates")
      .select("*")
      .order("hearing_date");

    setHearings(data || []);
  };

  useEffect(() => {
    fetchHearings();
  }, []);

  return (
    <div>
      <h2>My Hearing Dates</h2>

      {hearings.map((h) => (
        <div key={h.id}>
          <b>{new Date(h.hearing_date).toLocaleString()}</b>
          <p>{h.location}</p>
          <small>{h.notes}</small>
        </div>
      ))}
    </div>
  );
}
