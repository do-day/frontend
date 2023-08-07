import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import useMapView from '@/hooks/useMapView';
import { postSolutionApprove } from '@/api/admin';
import { getSolve } from '@/api/solve';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import Modal from '@/components/Modal';
import RejectModal from '@/components/RejectModal';
import Address from '@/components/Address';
import * as styles from '@/components/styles/report-solve/style';

function AdminSolveDetail() {
  const router = useRouter();
  const solveId = router.query.solveId;
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<string>('');

  const { data: solve } = useQuery({
    queryKey: ['solve', solveId],
    queryFn: () => getSolve(Number(solveId)),
    enabled: !!solveId,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const {} = useMapView(mapRef, solve?.latitude, solve?.longitude);

  const handleClickAcceptBtn = () => {
    approveSolutionMutation.mutate({
      solutionId: Number(solveId),
      adminId: Number(process.env.NEXT_PUBLIC_ADMIN_ID),
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
      <HeadMeta title="해결 내용 확인" description={solve?.location} />
      <Header title="해결 내용 확인" hasBackButton />
      {solve && (
        <>
          <Container>
            <styles.Section>
              <styles.SectionTitle>발생 지역</styles.SectionTitle>
              <styles.SectionDiv>
                <styles.Map ref={mapRef} />
              </styles.SectionDiv>
              <Address address={solve.location} isCopyable />
            </styles.Section>

            <styles.Section>
              <styles.SectionTitle>첨부된 사진</styles.SectionTitle>
              <styles.ImagesDiv>
                <ShapedImage src={solve.photo} alt="첨부된 사진" hasModal />
              </styles.ImagesDiv>
            </styles.Section>

            <styles.Section>
              <styles.SectionTitle>허위 신고 제보</styles.SectionTitle>
              <Textarea rows={6} disabled value={solve.falseReport}></Textarea>
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
              <Modal text={'승인 완료'} isReport={false} />
            ) : (
              <RejectModal
                onClose={() => setIsOpen(false)}
                solutionId={Number(solveId)}
              />
            ))}
        </>
      )}
    </>
  );
}

export default withAuth(AdminSolveDetail, true);
