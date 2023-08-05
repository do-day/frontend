import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import { useMember } from '@/contexts/member';
import useMapView from '@/hooks/useMapView';
import { getReport } from '@/api/report';
import { createSolve } from '@/api/solve';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import BottomModal from '@/components/BottomModal';
import ShapedImage from '@/components/ShapedImage';
import ImageUploadButton from '@/components/ImageUploadButton';
import useUploadImages from '@/hooks/useUploadImages';
import Modal from '@/components/Modal';
import Address from '@/components/Address';
import { SolveForm } from '@/types';
import * as styles from '@/components/styles/report-solve/style';

function SolveNew() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [solveForm, setSolveForm] = useState<SolveForm>({
    latitude: 0,
    longitude: 0,
    location: '',
    photo: null,
    falseReport: '',
  });

  const router = useRouter();
  // TODO: reportId나 solveId가 없으면 잘못된 접근이므로 404 페이지로 이동
  const { reportId, solveId } = router.query;
  const { id } = useMember();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, onFileChange, onClickFileUpload] = useUploadImages(
    fileInputRef,
    () => setShowPhotoModal(false),
  );

  const { data: report } = useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReport(Number(reportId)),
    enabled: !!reportId,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const {} = useMapView(mapRef, report?.latitude, report?.longitude);

  const submitSolveMutation = useMutation({
    mutationFn: createSolve,
    onSuccess: () => {
      setIsOpen(true);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (uploadedFiles?.files.length === 0) {
      alert('사진을 첨부해 주세요.');
      return;
    }

    submitSolveMutation.mutate({
      solutionId: Number(solveId),
      memberId: id,
      solveForm: {
        ...solveForm,
        location: report?.location,
        latitude: report?.latitude,
        longitude: report?.longitude,
        photo: uploadedFiles?.files[0],
      },
    });
  };

  return (
    <>
      <Header title="보고하기" hasBackButton />

      <Container>
        <styles.Form onSubmit={handleSubmit}>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>
              <styles.Map ref={mapRef} />
            </styles.SectionDiv>
            {report && <Address address={report.location} isCopyable />}
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>사진 첨부</styles.SectionTitle>
            <styles.ImagesDiv>
              {uploadedFiles?.urls.length ? (
                <ShapedImage
                  src={uploadedFiles?.urls[0] || ''}
                  alt="첨부된 사진"
                />
              ) : (
                <ImageUploadButton onClick={() => setShowPhotoModal(true)} />
              )}
            </styles.ImagesDiv>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>허위 신고 제보</styles.SectionTitle>
            <Textarea
              rows={6}
              placeholder="신고가 거짓일 경우 알려주세요."
              onChange={(value) =>
                setSolveForm({ ...solveForm, falseReport: value })
              }
            ></Textarea>
          </styles.Section>

          <Button type="submit">보고하기</Button>
        </styles.Form>
      </Container>

      {isOpen ? <Modal text={'보고 완료'} /> : ''}

      {showPhotoModal && (
        <BottomModal onClose={() => setShowPhotoModal(false)}>
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
        </BottomModal>
      )}
    </>
  );
}

export default withAuth(SolveNew);
