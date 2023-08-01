import { BiCopyAlt } from 'react-icons/bi';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import * as styles from '@/components/styles/report-solve/style';

export default function SolveDetail() {
  // TODO: props로 넘어온 값 사용
  const address = '서울특별시 동작구 노량진로 10';
  const image = '/example1.png';
  const content =
    '대방역 3번 출구 앞 버스 정류장 쪽 빗물받이에 담배꽁초가 많아요.';

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);
  };

  return (
    <>
      <Header title="해결 상세보기" />

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
      </Container>
    </>
  );
}
