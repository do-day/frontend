import { useRef, useState } from 'react';
import Container from '@/pages/components/container';
import HeaderBack from '@/pages/components/header';
import Button from '@/pages/components/button';
import Textarea from '@/pages/components/textarea';
import ModalBottom from '@/pages/components/modal-bottom';
import ShapedImage from '@/pages/components/shaped-image';
import ImageUploadButton from '@/pages/components/image-upload-button';
import * as styled from '@/pages/components/styles/new';

export default function ReportNew() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{
    files: File[];
    urls: string[];
  }>({ files: [], urls: [] });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const fileArray = Array.from(files);
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setUploadedFiles({
      files: [...uploadedFiles.files, ...fileArray],
      urls: [...uploadedFiles.urls, ...urls],
    });
    setShowPhotoModal(false);
  };

  const handleClickFileUpload = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current?.click();
  };

  return (
    <>
      <HeaderBack title="신고하기" />

      <Container>
        <styled.Form>
          <styled.Section>
            <styled.SectionTitle>발생 지역</styled.SectionTitle>
            <styled.SectionDiv>지도</styled.SectionDiv>
            <styled.Address>서울특별시 동작구 노량진로 10</styled.Address>
          </styled.Section>

          <styled.Section>
            <styled.SectionTitle>사진 첨부</styled.SectionTitle>
            <styled.ImagesDiv>
              {uploadedFiles?.urls.length !== 0 ? (
                <ShapedImage
                  size="7.5rem"
                  src={uploadedFiles?.urls[0] || ''}
                  alt="첨부된 사진"
                />
              ) : (
                <ImageUploadButton
                  size="7.5rem"
                  onClick={() => setShowPhotoModal(true)}
                />
              )}
              {uploadedFiles?.urls.length === 2 ? (
                <ShapedImage
                  size="7.5rem"
                  src={uploadedFiles?.urls[1] || ''}
                  alt="첨부된 사진"
                />
              ) : (
                <ImageUploadButton
                  size="7.5rem"
                  onClick={() => setShowPhotoModal(true)}
                />
              )}
            </styled.ImagesDiv>
          </styled.Section>

          <styled.Section>
            <styled.SectionTitle>위치 설명</styled.SectionTitle>
            <Textarea
              rows={5}
              placeholder="위치를 쉽게 찾을 수 있도록 빗물받이 주변 건물 등을 알려주세요."
            ></Textarea>
          </styled.Section>

          <Button type="submit">신고하기</Button>
        </styled.Form>
      </Container>

      {showPhotoModal && (
        <ModalBottom onClose={() => setShowPhotoModal(false)}>
          <styled.ModalWrapper>
            <styled.ModalTitle>이런 사진을 올려주세요</styled.ModalTitle>
            <styled.ImagesDiv>
              <div>
                <styled.ModalSubTitle>빗물받이</styled.ModalSubTitle>
                <ShapedImage size="15vh" src="/example1.png" alt="빗물받이" />
              </div>
              <div>
                <styled.ModalSubTitle>주변 건물</styled.ModalSubTitle>
                <ShapedImage size="15vh" src="/example2.png" alt="주변 건물" />
              </div>
            </styled.ImagesDiv>
            <styled.ButtonWrapper>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                multiple
              />
              <Button rounded onClick={handleClickFileUpload}>
                사진 보관함
              </Button>
            </styled.ButtonWrapper>
          </styled.ModalWrapper>
        </ModalBottom>
      )}
    </>
  );
}
