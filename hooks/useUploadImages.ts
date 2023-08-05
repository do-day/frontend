import { useState } from 'react';

type Files = {
  files: File[];
  urls: string[];
};

type Return = [
  uploadedFiles: Files,
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleClickFileUpload: () => void,
];

export default function useUploadImages(
  fileInputRef: React.RefObject<HTMLInputElement>,
  closeModal?: () => void,
): Return {
  const [uploadedFiles, setUploadedFiles] = useState<Files>({
    files: [],
    urls: [],
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const fileArray = Array.from(files);
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setUploadedFiles({
      files: [...uploadedFiles.files, ...fileArray],
      urls: [...uploadedFiles.urls, ...urls],
    });
    closeModal && closeModal();
  };

  const handleClickFileUpload = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current?.click();
  };

  return [uploadedFiles, handleFileChange, handleClickFileUpload];
}
