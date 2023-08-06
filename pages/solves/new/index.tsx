import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import { useMember } from '@/contexts/member';
import useMapView from '@/hooks/useMapView';
import { createSolve, getSolve } from '@/api/solve';
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
import { ROUTES } from '@/constants';
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
  const { solveId } = router.query;
  const { id } = useMember();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, onFileChange, onClickFileUpload] = useUploadImages(
    fileInputRef,
    () => setShowPhotoModal(false),
  );

  useEffect(() => {
    if (solveId) return;
    router.push(ROUTES.ERROR.NOT_FOUND);
  }, [router, solveId]);

  const { data: solve } = useQuery({
    queryKey: ['solve', solveId],
    queryFn: () => getSolve(Number(solveId)),
    enabled: !!solveId,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const {} = useMapView(mapRef, solve?.latitude, solve?.longitude);

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
        location: solve?.location,
        latitude: solve?.latitude,
        longitude: solve?.longitude,
        photo: uploadedFiles?.files[0],
      },
    });
  };

  return (
    <>
      <HeadMeta title="보고하기" />
      <Header title="보고하기" hasBackButton />

      <Container>
        <styles.Form onSubmit={handleSubmit}>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>
              <styles.Map ref={mapRef} />
            </styles.SectionDiv>
            {solve && <Address address={solve.location} isCopyable />}
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
