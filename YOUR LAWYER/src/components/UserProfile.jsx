import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./UserProfile.module.css";
import { User, Edit, Save, Camera, ArrowLeft } from "lucide-react";

function UserProfile({ onBack }) {
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile(data);
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setAvatar(data.avatar_url || "");
      }
    };

    fetchProfile();
  }, []);

  // Profile Completion %
  const calculateProgress = () => {
    let total = 4;
    let filled = 0;

    if (profile?.full_name) filled++;
    if (email) filled++;
    if (phone) filled++;
    if (avatar) filled++;

    return Math.round((filled / total) * 100);
  };

  // Upload Profile Image
  const handleAvatarUpload = async (event) => {
    try {
      setUploading(true);
      const file = event.target.files[0];
      const { data: { user } } = await supabase.auth.getUser();

      const filePath = `${user.id}-${Date.now()}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      setAvatar(data.publicUrl);

      await supabase
        .from("profiles")
        .update({ avatar_url: data.publicUrl })
        .eq("id", user.id);

    } catch (error) {
      alert("Upload failed");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  // Save Email & Phone
  const handleSave = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    await supabase
      .from("profiles")
      .update({ email, phone })
      .eq("id", user.id);

    alert("Profile Updated ✅");
    setIsEditing(false);
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* 🔙 BACK BUTTON */}
        <button onClick={onBack} className={styles.backBtn}>
          <ArrowLeft size={18} /> Back
        </button>

        {/* Avatar */}
        <div className={styles.avatarSection}>
          <div className={styles.avatarWrapper}>
            {avatar ? (
              <img src={avatar} alt="avatar" className={styles.avatar} />
            ) : (
              <User size={80} />
            )}
          </div>

          <label className={styles.cameraBtn}>
            <Camera size={16} />
            {uploading ? "Uploading..." : "Change Photo"}
            <input type="file" hidden onChange={handleAvatarUpload} />
          </label>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <p>Profile Completion: {calculateProgress()}%</p>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
        </div>

        <h2>User Profile</h2>

        <div className={styles.infoGroup}>
          <label>Full Name</label>
          <p>{profile.full_name}</p>
        </div>

        <div className={styles.infoGroup}>
          <label>Role</label>
          <p>{profile.role}</p>
        </div>

        <div className={styles.infoGroup}>
          <label>Email</label>
          {isEditing ? (
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
            <p>{email}</p>
          )}
        </div>

        <div className={styles.infoGroup}>
          <label>Phone</label>
          {isEditing ? (
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          ) : (
            <p>{phone || "Not Provided"}</p>
          )}
        </div>

        <div className={styles.buttonGroup}>
          {isEditing ? (
            <button onClick={handleSave} className={styles.saveBtn}>
              <Save size={16} /> Save
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className={styles.editBtn}>
              <Edit size={16} /> Edit Profile
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default UserProfile;