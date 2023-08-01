import { useRef, useState } from 'react';
import { BiCopyAlt } from 'react-icons/bi';
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

export default function SolveNew() {
  // TODO: 지도 API 연동 후 기본값 수정
  const [address, setAddress] = useState('서울특별시 동작구 노량진로 10');
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, onFileChange, onClickFileUpload] = useUploadImages(
    fileInputRef,
    () => setShowPhotoModal(false),
  );

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleClickReportBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderBack title="보고하기" />

      <Container>
        <styles.Form>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>지도</styles.SectionDiv>
            <styles.CopyButton type="button" onClick={handleClickCopy}>
              <styles.Address>{address}</styles.Address>
              <BiCopyAlt />
            </styles.CopyButton>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>사진 첨부</styles.SectionTitle>
            <styles.ImagesDiv>
              {uploadedFiles?.urls.length ? (
                <ShapedImage
                  size="22rem"
                  src={uploadedFiles?.urls[0] || ''}
                  alt="첨부된 사진"
                />
              ) : (
                <ImageUploadButton
                  size="22rem"
                  onClick={() => setShowPhotoModal(true)}
                />
              )}
            </styles.ImagesDiv>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>허위 신고 제보</styles.SectionTitle>
            <Textarea
              rows={8}
              placeholder="신고가 거짓일 경우 알려주세요."
            ></Textarea>
          </styles.Section>

          <Button onClick={handleClickReportBtn} type="submit">
            보고하기
          </Button>
        </styles.Form>
      </Container>
      {isOpen ? <Modal text={'보고 완료'} /> : ''}

      {showPhotoModal && (
        <ModalBottom onClose={() => setShowPhotoModal(false)}>
          <styles.ModalWrapper>
            <styles.ModalTitle>이런 사진을 올려주세요</styles.ModalTitle>
            <styles.ModalList>
              <li>청소가 끝난 빗물받이 사진</li>
              <li>
                허위 신고를 입증할 수 있는 사진
                <br />
                (예: 해당 위치에 빗물받이가 없음)
              </li>
            </styles.ModalList>
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
