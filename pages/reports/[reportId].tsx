import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMember } from '@/contexts/member';
import useMapView from '@/hooks/useMapView';
import { getReport } from '@/api/report';
import { applySolve } from '@/api/solve';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import Address from '@/components/Address';
import { ROUTES } from '@/constants';
import { Solve } from '@/types';
import * as styles from '@/components/styles/report-solve/style';

export default function ReportDetail() {
  // TODO: 이미 해결중인 신고인지 확인 후 초기값 설정
  const [buttonText, setButtonText] = useState('해결하기');
  const [solveId, setSolveId] = useState<number>(0);

  const router = useRouter();
  const reportId = router.query.reportId;
  const { id } = useMember();

  const { data: report } = useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReport(Number(reportId)),
    enabled: !!reportId,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const {} = useMapView(mapRef, report?.latitude, report?.longitude);

  const applySolveMutation = useMutation({
    mutationFn: () => applySolve(Number(reportId), id),
    onSuccess: ({ solutionId }: Solve) => {
      setSolveId(solutionId);
      setButtonText('보고하러 가기');
    },
  });

  const handleClickSolve = () => {
    if (!id) {
      router.push(ROUTES.LOGIN);
      return;
    }
    if (buttonText === '해결하기') {
      applySolveMutation.mutate();
    } else {
      router.push({
        pathname: ROUTES.SOLVES.NEW,
        query: { solveId },
      });
    }
  };

  return (
    <>
      <HeadMeta title="신고 상세보기" description={report?.location} />
      <Header title="신고 상세보기" hasBackButton />

      {report && (
        <Container>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>
              <styles.Map ref={mapRef} />
            </styles.SectionDiv>
            <Address address={report.location} isCopyable />
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
        </Container>
      )}
    </>
  );
}
