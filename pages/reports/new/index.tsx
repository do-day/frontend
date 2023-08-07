import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import { useMember } from '@/contexts/member';
import useMap from '@/hooks/useMap';
import { createReport } from '@/api/report';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import BottomModal from '@/components/BottomModal';
import ShapedImage from '@/components/ShapedImage';
import ImageUploadButton from '@/components/ImageUploadButton';
import useUploadImages from '@/hooks/useUploadImages';
import Modal from '@/components/Modal';
import Address from '@/components/Address';
import { ReportForm } from '@/types';
import * as styles from '@/components/styles/report-solve/style';

function ReportNew() {
  const { id } = useMember();
  const [reportForm, setReportForm] = useState<ReportForm>({
    memberId: id,
    location: '',
    description: '',
    latitude: 0,
    longitude: 0,
    photoRaincatch: null,
    photoAround: null,
  });
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const { location, position } = useMap(mapRef);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, onFileChange, onClickFileUpload, deleteImage] =
    useUploadImages(fileInputRef, () => setShowPhotoModal(false));

  const createReportMutation = useMutation({
    mutationFn: createReport,
    onSuccess: () => {
      setIsOpen(true);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const photoRaincatch = uploadedFiles?.files[0];
    if (!photoRaincatch) {
      alert('사진을 1장 이상 첨부해 주세요.');
      return;
    }

    createReportMutation.mutate({
      ...reportForm,
      latitude: position?.latitude,
      longitude: position?.longitude,
      location,
      photoRaincatch,
      photoAround: uploadedFiles?.files[1],
    });
  };

  return (
    <>
      <HeadMeta title="신고하기" />
      <Header title="신고하기" hasBackButton />

      <Container>
        <styles.Form onSubmit={handleSubmit}>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>
              <styles.Map ref={mapRef} />
            </styles.SectionDiv>
            <Address address={location} />
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>사진 첨부</styles.SectionTitle>
            <styles.ImagesDiv>
              {uploadedFiles?.urls.length !== 0 ? (
                <ShapedImage
                  src={uploadedFiles?.urls[0] || ''}
                  alt="첨부된 사진"
                  onClickDelete={() => deleteImage(0)}
                />
              ) : (
                <ImageUploadButton onClick={() => setShowPhotoModal(true)} />
              )}
              {uploadedFiles?.urls.length === 2 ? (
                <ShapedImage
                  src={uploadedFiles?.urls[1] || ''}
                  alt="첨부된 사진"
                  onClickDelete={() => deleteImage(1)}
                />
              ) : (
                <ImageUploadButton onClick={() => setShowPhotoModal(true)} />
              )}
            </styles.ImagesDiv>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>위치 설명</styles.SectionTitle>
            <Textarea
              rows={6}
              placeholder="위치를 쉽게 찾을 수 있도록 빗물받이 주변 건물 등을 알려주세요."
              onChange={(value) =>
                setReportForm({ ...reportForm, description: value })
              }
            ></Textarea>
          </styles.Section>
          <styles.ButtonDiv>
            <Button type="submit">신고하기</Button>
          </styles.ButtonDiv>
        </styles.Form>
      </Container>

      {isOpen ? <Modal text={'신고 완료'} /> : ''}

      {showPhotoModal && (
        <BottomModal onClose={() => setShowPhotoModal(false)}>
          <styles.ModalWrapper>
            <styles.ModalTitle>이런 사진을 올려주세요</styles.ModalTitle>
            <styles.ImagesDiv>
              <div>
                <styles.ModalSubTitle>빗물받이</styles.ModalSubTitle>
                <ShapedImage size="100%" src="/example1.png" alt="빗물받이" />
              </div>
              <div>
                <styles.ModalSubTitle>주변 건물</styles.ModalSubTitle>
                <ShapedImage size="100%" src="/example2.png" alt="주변 건물" />
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
        </BottomModal>
      )}
    </>
  );
}

export default withAuth(ReportNew);
