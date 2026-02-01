import { useAuth } from "../contexts/AuthContext";
import AdminHearingManager from "./AdminHearingManager";
import HearingDates from "./HearingDates";
import HearingViewer from "./HearingDates";

export default function HearingRoute() {
  const { profile } = useAuth();

  if (!profile) return null;

  return profile.role === "admin"
    ? <AdminHearingManager />
    : <HearingDates />;
}
