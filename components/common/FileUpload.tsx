
import React, { useState, useCallback, useRef } from 'react';
import Button from './Button';

// interface FileUploadProps { // Removed
//   onFileSelect: (file: File | null) => void;
//   acceptedFormats: string; 
// }

const FileUpload = ({ onFileSelect, acceptedFormats }) => { // Removed React.FC<FileUploadProps>
  const [fileName, setFileName] = useState(null); // Removed <string | null>
  const fileInputRef = useRef(null); // Removed <HTMLInputElement>

  const handleFileChange = useCallback((event) => { // Removed : ChangeEvent<HTMLInputElement>
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    } else {
      setFileName(null);
      onFileSelect(null);
    }
    if (event.target) {
        event.target.value = '';
    }
  }, [onFileSelect]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      <Button variant="outline" onClick={handleButtonClick}>
        Choose File
      </Button>
      <input
        id="file-upload-input"
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept={acceptedFormats}
        onChange={handleFileChange}
      />
      {fileName && <p className="text-sm text-gray-600">Selected: {fileName}</p>}
      {!fileName && <p className="text-sm text-gray-500">No file chosen. Accepted formats: {acceptedFormats}</p>}
    </div>
  );
};

export default FileUpload;