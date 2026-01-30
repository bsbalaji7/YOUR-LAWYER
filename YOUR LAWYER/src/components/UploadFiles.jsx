import { useState, useEffect } from 'react';
import { Upload, X, File, FileText, FileJson } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { supabase } from './supabase';
import styles from './UploadFiles.module.css';

export default function UploadFiles({ onBack }) {
  const { profile } = useAuth();

  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ===============================
     Fetch uploaded files
  =============================== */
  const fetchFiles = async () => {
    if (!profile?.id) return;

    const { data, error } = await supabase.storage
      .from('case-files')
      .list(profile.id);

    if (error) {
      console.error(error);
      return;
    }

    const filesWithUrl = data.map((file) => {
      const { data: urlData } = supabase.storage
        .from('case-files')
        .getPublicUrl(`${profile.id}/${file.name}`);

      return {
        name: file.name,
        url: urlData.publicUrl,
      };
    });

    setUploadedFiles(filesWithUrl);
  };

  useEffect(() => {
    fetchFiles();
  }, [profile]);

  /* ===============================
     Drag & Drop
  =============================== */
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover')
      setDragActive(true);
    else
      setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    addFiles(selectedFiles);
  };

  /* ===============================
     Add files (validation)
  =============================== */
  const addFiles = (newFiles) => {
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'image/jpeg',
      'image/png',
      'text/plain',
    ];

    const validFiles = newFiles.filter(
      (file) =>
        validTypes.includes(file.type) &&
        file.size <= 10 * 1024 * 1024
    );

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  /* ===============================
     Upload to Supabase
  =============================== */
  const handleUpload = async () => {
    if (files.length === 0) {
      alert('Please select files');
      return;
    }

    try {
      setLoading(true);

      for (const file of files) {
        // sanitize filename
        const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');

        const filePath = `${profile.id}/${Date.now()}-${cleanName}`;

        const { error } = await supabase.storage
          .from('case-files')
          .upload(filePath, file);

        if (error) throw error;
      }

      alert('Files uploaded successfully ✅');

      setFiles([]);
      fetchFiles(); // refresh list
    } catch (err) {
      console.error(err);
      alert('Upload failed ❌ ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     File icons
  =============================== */
  const getFileIcon = (file) => {
    if (file.type?.includes('pdf')) return <FileText />;
    if (file.type?.includes('image')) return <File />;
    return <FileJson />;
  };

  /* ===============================
     UI
  =============================== */
  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadHeader}>
        <button onClick={onBack}>← Back</button>
        <h2>Upload Files</h2>
      </div>

      <div
        className={`${styles.dropZone} ${dragActive ? styles.active : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload size={40} />
        <p>Drag & drop files here</p>

        <input
          type="file"
          multiple
          onChange={handleFileInput}
        />
      </div>

      {/* ================= Selected Files ================= */}
      {files.length > 0 && (
        <div className={styles.filesList}>
          <h4>Selected Files</h4>

          {files.map((file, index) => (
            <div key={index} className={styles.fileItem}>
              {getFileIcon(file)}
              <span>{file.name}</span>

              <button onClick={() => removeFile(index)}>
                <X size={16} />
              </button>
            </div>
          ))}

          <button onClick={handleUpload} disabled={loading}>
            {loading ? 'Uploading...' : 'Upload Files'}
          </button>
        </div>
      )}

      {/* ================= Uploaded Files ================= */}
      {uploadedFiles.length > 0 && (
        <div className={styles.filesList}>
          <h4>Uploaded Files</h4>

          {uploadedFiles.map((file, index) => (
            <div key={index} className={styles.fileItem}>
              <FileText />
              <span>{file.name}</span>

              <a href={file.url} target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
