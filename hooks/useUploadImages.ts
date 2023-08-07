import { useState } from 'react';
import imageCompression from 'browser-image-compression';

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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const fileArray = Array.from(files);
    const { compressedFiles, urls } = await compressImages(fileArray);
    setUploadedFiles({
      files: [...uploadedFiles.files, ...compressedFiles],
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

const compressImages = async (files: File[]) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const compressedFiles = await Promise.all(
    files.map((file) => imageCompression(file, options)),
  );
  const urls = await Promise.all(
    compressedFiles.map((file) => imageCompression.getDataUrlFromFile(file)),
  );
  return { compressedFiles, urls };
};
