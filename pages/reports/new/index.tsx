import { useRef, useState } from 'react';
import Container from '@/components/Container';
import HeaderBack from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ModalBottom from '@/components/ModalBottom';
import ShapedImage from '@/components/ShapedImage';
import ImageUploadButton from '@/components/ImageUploadButton';
import useUploadImages from '@/hooks/useUploadImages';
import * as styles from '@/components/styles/report-solve/style';
import Modal from '@/components/Modal';

export default function ReportNew() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, onFileChange, onClickFileUpload] = useUploadImages(
    fileInputRef,
    () => setShowPhotoModal(false),
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleClickReportBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderBack title="신고하기" />

      <Container>
        <styles.Form>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>지도</styles.SectionDiv>
            <styles.Address>서울특별시 동작구 노량진로 10</styles.Address>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>사진 첨부</styles.SectionTitle>
            <styles.ImagesDiv>
              {uploadedFiles?.urls.length !== 0 ? (
                <ShapedImage
                  size="12.5rem"
                  src={uploadedFiles?.urls[0] || ''}
                  alt="첨부된 사진"
                />
              ) : (
                <ImageUploadButton
                  size="12.5rem"
                  onClick={() => setShowPhotoModal(true)}
                />
              )}
              {uploadedFiles?.urls.length === 2 ? (
                <ShapedImage
                  size="12.5rem"
                  src={uploadedFiles?.urls[1] || ''}
                  alt="첨부된 사진"
                />
              ) : (
                <ImageUploadButton
                  size="12.5rem"
                  onClick={() => setShowPhotoModal(true)}
                />
              )}
            </styles.ImagesDiv>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>위치 설명</styles.SectionTitle>
            <Textarea
              rows={8}
              placeholder="위치를 쉽게 찾을 수 있도록 빗물받이 주변 건물 등을 알려주세요."
            ></Textarea>
          </styles.Section>
          <styles.ButtonDiv>
            <Button onClick={handleClickReportBtn} type="submit">
              신고하기
            </Button>
          </styles.ButtonDiv>
        </styles.Form>
      </Container>
      {isOpen ? <Modal text={'신고 완료'} /> : ''}

      {showPhotoModal && (
        <ModalBottom onClose={() => setShowPhotoModal(false)}>
          <styles.ModalWrapper>
            <styles.ModalTitle>이런 사진을 올려주세요</styles.ModalTitle>
            <styles.ImagesDiv>
              <div>
                <styles.ModalSubTitle>빗물받이</styles.ModalSubTitle>
                <ShapedImage size="15vh" src="/example1.png" alt="빗물받이" />
              </div>
              <div>
                <styles.ModalSubTitle>주변 건물</styles.ModalSubTitle>
                <ShapedImage size="15vh" src="/example2.png" alt="주변 건물" />
              </div>
            </styles.ImagesDiv>
            <styles.ButtonWrapper>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={onFileChange}
                style={{ display: 'none' }}
                multiple
              />
              <Button rounded onClick={onClickFileUpload}>
                사진 보관함
              </Button>
            </styles.ButtonWrapper>
          </styles.ModalWrapper>
        </ModalBottom>
      )}
    </>
  );
}
