import { BiCopyAlt } from 'react-icons/bi';
import Container from '@/components/Container';
import HeaderBack from '@/components/Header';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import * as styled from '@/components/styles/report.styles';

export default function ReportDetail() {
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
      <HeaderBack title="해결 상세보기" />

      <Container>
        <styled.Section>
          <styled.SectionTitle>발생 지역</styled.SectionTitle>
          <styled.SectionDiv>지도</styled.SectionDiv>
          <styled.CopyButton type="button" onClick={handleClickCopy}>
            <styled.Address>{address}</styled.Address>
            <BiCopyAlt />
          </styled.CopyButton>
        </styled.Section>

        <styled.Section>
          <styled.SectionTitle>첨부된 사진</styled.SectionTitle>
          <styled.ImagesDiv>
            <ShapedImage size="15rem" src={image} alt="첨부된 사진" />
          </styled.ImagesDiv>
        </styled.Section>

        <styled.Section>
          <styled.SectionTitle>허위 신고 제보</styled.SectionTitle>
          <Textarea rows={5} disabled value={content}></Textarea>
        </styled.Section>
      </Container>
    </>
  );
}
