import React, { useCallback } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload: (file: any) => void;
}

const ReactDropzoneFileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: any[], fileRejections: FileRejection[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        onFileUpload(file);
      }

      if (fileRejections.length > 0) {
        console.error('File rejected:', fileRejections);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
        'text/csv': ['.csv'],
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
          '.xlsx',
        ],
        'application/octet-stream': ['.xes'],
      },
    multiple: false,
  });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      <p>Drag & drop a file here, or click to select a file</p>
    </div>
  );
};

const dropzoneStyle: React.CSSProperties = {
  border: '2px dashed #ddd',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ReactDropzoneFileUpload;
