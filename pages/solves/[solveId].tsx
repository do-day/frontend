import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getSolve } from '@/api/solve';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import * as styles from '@/components/styles/report-solve/style';

export default function SolveDetail() {
  const router = useRouter();
  const solveId = router.query.solveId;

  const { data: solve } = useQuery({
    queryKey: ['solve', solveId],
    queryFn: () => getSolve(Number(solveId)),
  });

  return (
    <>
      <Header title="해결 상세보기" hasBackButton />

      <Container>
        <styles.Section>
          <styles.SectionTitle>발생 지역</styles.SectionTitle>
          <styles.SectionDiv>지도</styles.SectionDiv>
          <styles.Address>{solve?.location}</styles.Address>
        </styles.Section>

        <styles.Section>
          <styles.SectionTitle>첨부된 사진</styles.SectionTitle>
          <styles.ImagesDiv>
            <ShapedImage
              size="22rem"
              src={solve?.photo || ''}
              alt="첨부된 사진"
            />
          </styles.ImagesDiv>
        </styles.Section>

        <styles.Section>
          <styles.SectionTitle>허위 신고 제보</styles.SectionTitle>
          <Textarea
            rows={solve?.content ? 4 : 8}
            disabled
            value={solve?.falseReport ?? '내용이 없습니다.'}
          ></Textarea>
        </styles.Section>

        {solve?.content && (
          <styles.Section>
            <styles.SectionTitle>반려 사유</styles.SectionTitle>
            <Textarea rows={4} disabled value={solve?.content}></Textarea>
          </styles.Section>
        )}
      </Container>
    </>
  );
}
