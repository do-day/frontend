import { useState } from 'react';
import { useRouter } from 'next/router';
import { BiCopyAlt } from 'react-icons/bi';
import Container from '@/components/Container';
import HeaderBack from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import * as styles from '@/components/styles/report-solve/style';
import { ROUTES } from '@/constants';

export default function ReportDetail() {
  // TODO: props로 넘어온 값 사용
  const router = useRouter();
  const reportId = router.query.reportId;
  const address = '서울특별시 동작구 노량진로 10';
  const images = ['/example1.png', '/example2.png'];
  const content =
    '대방역 3번 출구 앞 버스 정류장 쪽 빗물받이에 담배꽁초가 많아요.';

  // TODO: 이미 해결중인 신고인지 확인 후 초기값 설정
  const [buttonText, setButtonText] = useState('해결하기');

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);
  };

  const handleClickSolve = () => {
    if (buttonText === '해결하기') {
      setButtonText('보고하러 가기');
    } else {
      router.push({ pathname: ROUTES.SOLVES.NEW, query: { reportId } });
    }
  };

  return (
    <>
      <HeaderBack title="신고 상세보기" />

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
            {images.map((image, index) => (
              <ShapedImage
                key={index}
                size="12.5rem"
                src={image}
                alt="첨부된 사진"
              />
            ))}
          </styles.ImagesDiv>
        </styles.Section>

        <styles.Section>
          <styles.SectionTitle>위치 설명</styles.SectionTitle>
          <Textarea rows={8} disabled value={content}></Textarea>
        </styles.Section>

        <Button type="button" onClick={handleClickSolve}>
          {buttonText}
        </Button>
      </Container>
    </>
  );
}
