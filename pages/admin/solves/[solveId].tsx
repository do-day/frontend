import { useState } from 'react';
import { BiCopyAlt } from 'react-icons/bi';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import Modal from '@/components/Modal';
import RejectModal from '@/components/RejectModal';
import * as styles from '@/components/styles/report-solve/style';
import { useMutation } from '@tanstack/react-query';
import { postSolutionApprove } from '@/api/admin';

export default function AdminSolveDetail() {
  // TODO: props로 넘어온 값 사용
  const solutionId = '10';
  const address = '서울특별시 동작구 노량진로 10';
  const image = '/example1.png';
  const content =
    '대방역 3번 출구 앞 버스 정류장 쪽 빗물받이에 담배꽁초가 많아요.';

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<string>('');
  const handleClickAcceptBtn = () => {
    approveSolutionMutation.mutate({
      solutionId: Number(solutionId),
      adminId: 1,
    });
  };
  const handleClickRejectBtn = () => {
    setIsOpen(!isOpen);
    setType('반려');
  };

  const approveSolutionMutation = useMutation({
    mutationFn: postSolutionApprove,
    onSuccess: () => {
      setIsOpen(!isOpen);
      setType('승인');
    },
  });

  return (
    <>
      <Header title="해결 내용 확인" hasBackButton />

      <Container>
        <styles.Section>
          <styles.SectionTitle>발생 지역</styles.SectionTitle>
          <styles.SectionDiv>지도</styles.SectionDiv>
          <styles.CopyButton type="button" onClick={handleClickCopy}>
            <styles.Address>{address}</styles.Address>
            <BiCopyAlt />
          </styles.CopyButton>
        </styles.Section>

        <styles.Section>
          <styles.SectionTitle>첨부된 사진</styles.SectionTitle>
          <styles.ImagesDiv>
            <ShapedImage size="22rem" src={image} alt="첨부된 사진" />
          </styles.ImagesDiv>
        </styles.Section>

        <styles.Section>
          <styles.SectionTitle>허위 신고 제보</styles.SectionTitle>
          <Textarea rows={8} disabled value={content}></Textarea>
        </styles.Section>

        <styles.ButtonDiv>
          <Button onClick={handleClickAcceptBtn} type="button">
            승인하기
          </Button>
          <Button onClick={handleClickRejectBtn} type="button" secondary>
            반려하기
          </Button>
        </styles.ButtonDiv>
      </Container>
      {isOpen &&
        (type === '승인' ? (
          <Modal text={'승인 완료'} isReport="no" />
        ) : (
          // TODO: solveId 변경
          <RejectModal onClose={() => setIsOpen(false)} solutionId="10" />
        ))}
    </>
  );
}
