import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { BiCopyAlt } from 'react-icons/bi';
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
import { SolveForm } from '@/types';
import * as styles from '@/components/styles/report-solve/style';

export default function SolveNew() {
  // TODO: 지도 API 연동 후 기본값 수정
  const [address, setAddress] = useState('서울특별시 동작구 노량진로 10');
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
  // TODO: solveId가 없으면 잘못된 접근이므로 404 페이지로 이동
  const solveId = router.query.solveId;
  // TODO: 로그인 정보 확인해서 memberId 가져오기
  const memberId = '1';

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, onFileChange, onClickFileUpload] = useUploadImages(
    fileInputRef,
    () => setShowPhotoModal(false),
  );

  const submitSolveMutation = useMutation({
    mutationFn: createSolve,
    onSuccess: () => {
      setIsOpen(true);
    },
  });

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (uploadedFiles?.files.length === 0) {
      alert('사진을 첨부해 주세요.');
      return;
    }

    submitSolveMutation.mutate({
      solutionId: Number(solveId),
      memberId: Number(memberId),
      solveForm: { ...solveForm, photo: uploadedFiles?.files[0] },
    });
  };

  return (
    <>
      <Header title="보고하기" hasBackButton />

      <Container>
        <styles.Form onSubmit={handleSubmit}>
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
