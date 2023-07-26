import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import HeaderBack from '@/pages/components/header';
import Button from '@/pages/components/button';

export default function ReportNew() {
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
                <PhotoDiv>
                  <FontAwesomeIcon icon={faPlus} />
                </PhotoDiv>
                <PhotoDiv>
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

const PhotoDiv = styled.div`
  width: 7.5rem;
  height: 7.5rem;
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
