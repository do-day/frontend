import { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import HeaderBack from '@/pages/components/header';
import Button from '@/pages/components/button';
import ModalBottom from '@/pages/components/modalBottom';

export default function ReportNew() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  return (
    <>
      <HeaderBack title="신고하기" />
      <main>
        <StyledForm>
          <div>
            <StyledDiv>
              <h2>발생 지역</h2>
              <div>지도</div>
              <StyledP>서울특별시 동작구 노량진로 10</StyledP>
            </StyledDiv>
            <StyledDiv>
              <h2>사진 첨부</h2>
              <ImageDiv>
                <PhotoDiv
                  size={'7.5rem'}
                  onClick={() => setShowPhotoModal(true)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </PhotoDiv>
                <PhotoDiv size={'7.5rem'}>
                  <FontAwesomeIcon icon={faPlus} />
                </PhotoDiv>
              </ImageDiv>
            </StyledDiv>
            <StyledDiv>
              <h2>위치 설명</h2>
              <textarea
                rows={5}
                placeholder="위치를 쉽게 찾을 수 있도록 빗물받이 주변 건물 등을 알려주세요."
              ></textarea>
            </StyledDiv>
          </div>
          <Button type="submit">신고하기</Button>
        </StyledForm>
      </main>

      {showPhotoModal && (
        <ModalBottom onClose={() => setShowPhotoModal(false)}>
          <Modal>
            <h2>이런 사진을 올려주세요</h2>
            <ImageDiv>
              <div>
                <h3>빗물받이</h3>
                <PhotoDiv size="15vh">
                  <Image
                    src="/example1.png"
                    alt="빗물받이"
                    layout="fill"
                    objectFit="contain"
                  />
                </PhotoDiv>
              </div>
              <div>
                <h3>주변 건물</h3>
                <PhotoDiv size="15vh">
                  <Image
                    src="/example2.png"
                    alt="주변 건물"
                    layout="fill"
                    objectFit="contain"
                  />
                </PhotoDiv>
              </div>
            </ImageDiv>
            <ButtonWrapper>
              <Button rounded>사진 보관함</Button>
            </ButtonWrapper>
          </Modal>
        </ModalBottom>
      )}
    </>
  );
}

const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  margin-bottom: 1rem;

  & > h2 {
    margin-bottom: 0.5rem;
    color: var(--color-main);
    font-weight: var(--font-semibold);
  }

  & > div,
  textarea {
    width: 100%;
    min-height: 7.5rem;
    border-radius: var(--border-radius);
    border: none;
  }

  & > textarea {
    padding: 0.75rem;
    resize: none;
    background-color: var(--color-light-gray);
  }
`;

const StyledP = styled.p`
  color: var(--color-gray);
  font-size: var(--font-small);
  text-align: center;
  margin-top: 0.5rem;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const PhotoDiv = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
	max-width; 8rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: var(--color-light-gray);
  cursor: pointer;

  & > svg {
    font-size: 2rem;
    color: var(--color-gray);
  }
`;

const Modal = styled.div`
  text-align: center;
  padding: 1rem;

  & h2 {
    font-size: 1.25rem;
    font-weight: var(--font-semibold);
    margin-bottom: 1rem;
  }

  & h3 {
    color: var(--color-main);
    margin-bottom: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;
