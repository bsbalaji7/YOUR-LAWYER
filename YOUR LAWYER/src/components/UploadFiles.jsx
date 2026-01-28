import { useState } from 'react';
import { Upload, X, File, FileText, FileJson } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';
import styles from './UploadFiles.module.css';

export default function UploadFiles({ onBack }) {
  const { profile } = useAuth();
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
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

  const addFiles = (newFiles) => {
    const validFiles = newFiles.filter((file) => {
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
      return validTypes.includes(file.type) && file.size <= 10 * 1024 * 1024;
    });

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file) => {
    if (file.type.includes('pdf')) return <FileText className={styles.fileIcon} />;
    if (file.type.includes('word') || file.type.includes('document')) return <FileText className={styles.fileIcon} />;
    if (file.type.includes('sheet') || file.type.includes('excel')) return <File className={styles.fileIcon} />;
    if (file.type.includes('image')) return <File className={styles.fileIcon} />;
    return <FileJson className={styles.fileIcon} />;
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert('Please select at least one file to upload');
      return;
    }
    alert(`${files.length} file(s) ready for upload. Upload functionality would be implemented here.`);
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
        <h2>Upload Files</h2>
      </div>

      <div className={styles.uploadContent}>
        <div className={styles.uploadSection}>
          <h3>Upload Documents for Your {profile?.role === 'lawyer' ? 'Cases' : 'Legal Matters'}</h3>
          <p className={styles.uploadDescription}>
            Upload supporting documents, case files, agreements, or any legal documents. Supported formats: PDF, DOC, XLS, JPG, PNG, TXT (Max 10MB per file)
          </p>

          <div
            className={`${styles.dropZone} ${dragActive ? styles.active : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className={styles.dropIcon} />
            <p className={styles.dropText}>Drag and drop your files here</p>
            <span className={styles.orText}>or</span>
            <label className={styles.browseButton}>
              Browse Files
              <input
                type="file"
                multiple
                onChange={handleFileInput}
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.txt"
                style={{ display: 'none' }}
              />
            </label>
          </div>

          {files.length > 0 && (
            <div className={styles.filesList}>
              <h4>{files.length} file(s) selected</h4>
              <div className={styles.filesGrid}>
                {files.map((file, index) => (
                  <div key={index} className={styles.fileItem}>
                    <div className={styles.fileIconWrapper}>
                      {getFileIcon(file)}
                    </div>
                    <div className={styles.fileInfo}>
                      <p className={styles.fileName}>{file.name}</p>
                      <p className={styles.fileSize}>
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className={styles.removeButton}
                      aria-label="Remove file"
                    >
                      <X className={styles.removeIcon} />
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.uploadActions}>
                <button
                  onClick={() => setFiles([])}
                  className={styles.clearButton}
                >
                  Clear All
                </button>
                <button
                  onClick={handleUpload}
                  className={styles.uploadButton}
                >
                  <Upload className={styles.uploadButtonIcon} />
                  Upload Files
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.uploadInfo}>
          <h4>Upload Guidelines</h4>
          <ul className={styles.guidelines}>
            <li>Maximum file size: 10 MB</li>
            <li>Supported formats: PDF, Word, Excel, Images, Text</li>
            <li>Ensure documents are clear and legible</li>
            <li>Remove sensitive personal information before uploading</li>
            <li>All uploads are encrypted and secured</li>
            <li>You can upload multiple files at once</li>
          </ul>
        </div>
      </div>
    </div>
  );
}