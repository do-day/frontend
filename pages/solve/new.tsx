import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Container from '@/pages/components/container';
import HeaderBack from '@/pages/components/header';
import Button from '@/pages/components/button';
import Textarea from '@/pages/components/textarea';
import ModalBottom from '@/pages/components/modal-bottom';
import ShapedImage from '@/pages/components/shaped-image';
import ImageUploadButton from '@/pages/components/image-upload-button';
import useUploadImages from '@/pages/hooks/useUploadImages';
import * as styled from '@/pages/components/styles/new';

export default function ReportNew() {
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

  return (
    <>
      <HeaderBack title="보고하기" />

      <Container>
        <styled.Form>
          <styled.Section>
            <styled.SectionTitle>발생 지역</styled.SectionTitle>
            <styled.SectionDiv>지도</styled.SectionDiv>
            <styled.Address>
              {address}
              <styled.CopyButton type="button" onClick={handleClickCopy}>
                <FontAwesomeIcon icon={faCopy} />
              </styled.CopyButton>
            </styled.Address>
          </styled.Section>

          <styled.Section>
            <styled.SectionTitle>사진 첨부</styled.SectionTitle>
            <styled.ImagesDiv>
              {uploadedFiles?.urls.length ? (
                <ShapedImage
                  size="15rem"
                  src={uploadedFiles?.urls[0] || ''}
                  alt="첨부된 사진"
                />
              ) : (
                <ImageUploadButton
                  size="15rem"
                  onClick={() => setShowPhotoModal(true)}
                />
              )}
            </styled.ImagesDiv>
          </styled.Section>

          <styled.Section>
            <styled.SectionTitle>허위 신고 제보</styled.SectionTitle>
            <Textarea
              rows={5}
              placeholder="신고가 거짓일 경우 알려주세요."
            ></Textarea>
          </styled.Section>

          <Button type="submit">신고하기</Button>
        </styled.Form>
      </Container>

      {showPhotoModal && (
        <ModalBottom onClose={() => setShowPhotoModal(false)}>
          <styled.ModalWrapper>
            <styled.ModalTitle>이런 사진을 올려주세요</styled.ModalTitle>
            <styled.ModalList>
              <li>청소가 끝난 빗물받이 사진</li>
              <li>
                허위 신고를 입증할 수 있는 사진
                <br />
                (예: 해당 위치에 빗물받이가 없음)
              </li>
            </styled.ModalList>
            <styled.ButtonWrapper>
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
            </styled.ButtonWrapper>
          </styled.ModalWrapper>
        </ModalBottom>
      )}
    </>
  );
}
