import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BiCopyAlt } from 'react-icons/bi';
import { getReport } from '@/api/report';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/report-solve/style';
import { applySolve } from '@/api/solve';

export default function ReportDetail() {
  // TODO: 이미 해결중인 신고인지 확인 후 초기값 설정
  const [buttonText, setButtonText] = useState('해결하기');

  const router = useRouter();
  const reportId = router.query.reportId;
  // TODO: 로그인 정보 확인해서 memberId 가져오기
  const memberId = '1';

  const { data: report } = useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReport(Number(reportId)),
  });

  const applySolveMutation = useMutation({
    mutationFn: () => applySolve(Number(reportId), Number(memberId)),
    onSuccess: () => {
      setButtonText('보고하러 가기');
    },
  });

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(report?.location ?? '');
  };

  const handleClickSolve = () => {
    if (buttonText === '해결하기') {
      applySolveMutation.mutate();
    } else {
      router.push({ pathname: ROUTES.SOLVES.NEW, query: { reportId } });
    }
  };

  return (
    <>
      <Header title="신고 상세보기" hasBackButton />

      {report && (
        <Container>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>지도</styles.SectionDiv>
            <styles.CopyButton type="button" onClick={handleClickCopy}>
              <styles.Address>{report.location}</styles.Address>
              <BiCopyAlt />
            </styles.CopyButton>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>첨부된 사진</styles.SectionTitle>
            <styles.ImagesDiv>
              <ShapedImage
                size={`${report.photoAround ? '12.5rem' : '22rem'}`}
                src={report.photoRaincatch}
                alt="첨부된 사진"
              />
              {report.photoAround && (
                <ShapedImage
                  size="12.5rem"
                  src={report.photoAround}
                  alt="첨부된 사진"
                />
              )}
            </styles.ImagesDiv>
          </styles.Section>

          <styles.Section>
            <styles.SectionTitle>위치 설명</styles.SectionTitle>
            <Textarea rows={8} disabled value={report?.description}></Textarea>
          </styles.Section>

          <Button type="button" onClick={handleClickSolve}>
            {buttonText}
          </Button>
        </Container>
      )}
    </>
  );
}
