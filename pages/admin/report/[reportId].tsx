import { BiCopyAlt } from 'react-icons/bi';
import Container from '@/components/Container';
import HeaderBack from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import ShapedImage from '@/components/ShapedImage';
import * as styled from '@/components/styles/report.styles';
import Modal from '@/components/Modal';
import { useState } from 'react';

export default function AdminReportDetail() {
  // TODO: props로 넘어온 값 사용
  const address = '서울특별시 동작구 노량진로 10';
  const images = ['/example1.png', '/example2.png'];
  const content =
    '대방역 3번 출구 앞 버스 정류장 쪽 빗물받이에 담배꽁초가 많아요.';

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<string>('');
  const handleClickAcceptBtn = () => {
    setIsOpen(!isOpen);
    setType('승인');
  };
  const handleClickRejectBtn = () => {
    setIsOpen(!isOpen);
    setType('반려');
  };

  return (
    <>
      <HeaderBack title="신고 내용 확인" />

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
            {images.map((image, index) => (
              <ShapedImage
                key={index}
                size="10.5rem"
                src={image}
                alt="첨부된 사진"
              />
            ))}
          </styled.ImagesDiv>
        </styled.Section>

        <styled.Section>
          <styled.SectionTitle>위치 설명</styled.SectionTitle>
          <Textarea rows={8} disabled value={content}></Textarea>
        </styled.Section>

        <styled.ButtonDiv>
          <Button onClick={handleClickAcceptBtn} type="button">
            승인하기
          </Button>
          <Button onClick={handleClickRejectBtn} type="button" secondary>
            반려하기
          </Button>
        </styled.ButtonDiv>
      </Container>
      {isOpen ? (
        type === '승인' ? (
          <Modal text={'승인하였습니다.'} isOpen={true} setIsOpen={setIsOpen} />
        ) : (
          <Modal text={'반려하였습니다.'} isOpen={true} setIsOpen={setIsOpen} />
        )
      ) : (
        ''
      )}
    </>
  );
}