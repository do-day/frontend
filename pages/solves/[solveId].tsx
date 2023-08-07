import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import useMapView from '@/hooks/useMapView';
import { getSolve } from '@/api/solve';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import Address from '@/components/Address';
import Button from '@/components/Button';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/report-solve/style';

function SolveDetail() {
  const router = useRouter();
  const solveId = router.query.solveId;

  const { data: solve } = useQuery({
    queryKey: ['solve', solveId],
    queryFn: () => getSolve(Number(solveId)),
    enabled: !!solveId,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const {} = useMapView(mapRef, solve?.latitude, solve?.longitude);

  return (
    <>
      <HeadMeta title="해결 상세보기" description={solve?.location} />
      <Header title="해결 상세보기" hasBackButton />

      {solve && (
        <Container>
          <styles.Section>
            <styles.SectionTitle>발생 지역</styles.SectionTitle>
            <styles.SectionDiv>
              <styles.Map ref={mapRef} />
            </styles.SectionDiv>
            <Address address={solve.location} />
          </styles.Section>
          {solve.state === 'RESOLVING' ? (
            <Button
              type="button"
              onClick={() =>
                router.push({
                  pathname: ROUTES.SOLVES.NEW,
                  query: { solveId },
                })
              }
            >
              보고하러 가기
            </Button>
          ) : (
            <>
              <styles.Section>
                <styles.SectionTitle>첨부된 사진</styles.SectionTitle>
                <styles.ImagesDiv>
                  <ShapedImage
                    src={solve.photo || ''}
                    alt="첨부된 사진"
                    hasModal
                  />
                </styles.ImagesDiv>
              </styles.Section>

              <styles.Section>
                <styles.SectionTitle>허위 신고 제보</styles.SectionTitle>
                <Textarea
                  rows={solve.content ? 3 : 10}
                  disabled
                  value={solve.falseReport}
                ></Textarea>
              </styles.Section>
            </>
          )}
          {solve.content && (
            <styles.Section>
              <styles.SectionTitle>반려 사유</styles.SectionTitle>
              <Textarea rows={3} disabled value={solve.content}></Textarea>
            </styles.Section>
          )}
        </Container>
      )}
    </>
  );
}

export default withAuth(SolveDetail);
