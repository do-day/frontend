import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BiCopyAlt } from 'react-icons/bi';
import useMapView from '@/hooks/useMapView';
import { getReport } from '@/api/report';
import { applySolve } from '@/api/solve';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/report-solve/style';
import { Solve } from '@/types';
import CopyToast from '@/components/CopyToast';
import { useDebounce } from '@/utils';

export default function ReportDetail() {
  // TODO: 이미 해결중인 신고인지 확인 후 초기값 설정
  const [buttonText, setButtonText] = useState('해결하기');
  const [solveId, setSolveId] = useState<number>(0);
  const [copy, setCopy] = useState(false);

  const router = useRouter();
  const reportId = router.query.reportId;
  // TODO: 로그인 정보 확인해서 memberId 가져오기
  const memberId = '1';

  const { data: report } = useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReport(Number(reportId)),
    enabled: !!reportId,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const {} = useMapView(mapRef, report?.latitude, report?.longitude);

  const applySolveMutation = useMutation({
    mutationFn: () => applySolve(Number(reportId), Number(memberId)),
    onSuccess: ({ solutionId }: Solve) => {
      setSolveId(solutionId);
      setButtonText('보고하러 가기');
    },
  });

  const handleClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(report?.location ?? '');
      setCopy(true); // 클립보드 복사 성공시 setCopy(true)로 변경
    } catch (error) {
      console.error('클립보드 복사 에러:', error);
      // 복사 실패 시 예외 처리
    }
  };

  const debounceCopy = useDebounce<React.MouseEventHandler<HTMLButtonElement>>(
    handleClickCopy,
    500,
  );

  const handleClickSolve = () => {
    if (buttonText === '해결하기') {
      applySolveMutation.mutate();
    } else {
      router.push({
        pathname: ROUTES.SOLVES.NEW,
        query: { reportId, solveId },
      });
    }
  };

  return (
    <>
      <Header title="신고 상세보기" hasBackButton />

      {report && (
        <Container>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>
              <styles.Map ref={mapRef} />
            </styles.SectionDiv>
            <styles.CopyButton type="button" onClick={debounceCopy}>
              <styles.Address>{report.location}</styles.Address>
              <BiCopyAlt />
            </styles.CopyButton>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>첨부된 사진</styles.SectionTitle>
            <styles.ImagesDiv>
              <ShapedImage src={report.photoRaincatch} alt="첨부된 사진" />
              {report.photoAround && (
                <ShapedImage src={report.photoAround} alt="첨부된 사진" />
              )}
            </styles.ImagesDiv>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>위치 설명</styles.SectionTitle>
            <Textarea rows={6} disabled value={report?.description}></Textarea>
          </styles.Section>

          <Button type="button" onClick={handleClickSolve}>
            {buttonText}
          </Button>
          {copy ? <CopyToast setCopy={setCopy} /> : ''}
        </Container>
      )}
    </>
  );
}
