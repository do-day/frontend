<h2 align="center">
  <br>
  <img src="https://github.com/do-day/frontend/assets/72433681/27eaad5f-04d0-4775-aa99-a8d96d3d256a" alt="두데이" width="200">
</h2>

<h4 align="center">
리워드 기반 시민 참여형 빗물받이 신고 및 해결 서비스
</h4>

<p align="center">🏆 2023 서울 우먼테크 해커톤 최우수상(2등)</p>

<h4 align="center">
  <a href="https://doday-nu.vercel.app/" target="_blank">
    배포
  </a>
	|
  <a href="https://youtu.be/qPtUxfTgUfg" target="_blank">시연</a>
</h4>

<p align="center">
  <a href="#소개">소개</a> •
  <a href="#주요-기능">주요 기능</a> •
  <a href="#기술-스택">기술 스택</a> •
  <a href="#프로젝트-구조">프로젝트 구조</a>
</p>

<p align="center">
<img width="300" alt="image" src="https://github.com/do-day/frontend/assets/72433681/b2d927d6-0c48-4894-8b83-766e70e74662">
<img width="300" alt="image" src="https://github.com/do-day/frontend/assets/72433681/3479e47b-f86a-47e6-a57f-55af34247df6">
<img width="300" alt="image" src="https://github.com/do-day/frontend/assets/72433681/9f148e77-b517-4e30-89a0-a1c5fee75e12">
</p>

## 소개

2023 서울 우먼테크 해커톤 안전한 도시 1팀 화이트의 프론트엔드 레포지토리

- 개발 기간: 2023.07 ~ 2023.08 (3주)

| [<img src="https://github.com/SujinKim1127.png" width="100px;"/><br /><sub><b>김수진</b></sub>](https://github.com/SujinKim1127)<br /> | [<img src="https://github.com/hhkim0729.png" width="100px;"/><br /><sub><b>김희현</b></sub>](https://github.com/hhkim0729) |
| :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |

## 주요 기능

### 신고

- 신고하기: 현재 위치를 지도에서 선택, 빗물받이와 주변 건물 이미지 첨부, 위치 설명 작성
- 신고 목록: 해결이 필요한 신고 목록
- 신고 상세보기

### 해결

- 해결하기: 직접 해결하고 싶은 신고 상세보기에서 해결하기 신청
- 보고하기: 해결을 완료하고 사진을 첨부하거나 허위 신고 보고

### 회원

- 회원가입
- 로그인
- 마이페이지
  - 나의 신고 목록
  - 나의 해결 목록
  - 리워드 내역
  - 리워드 전환하기

### 관리자

- 신고 목록
- 신고 상세보기
  - 신고 승인 및 반려
- 해결 목록
- 해결 상세보기
  - 해결 승인 및 반려

## 기술 스택

### 개발

![typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next js](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tanstack Query](https://img.shields.io/badge/-Tanstack%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-ba6abe?style=for-the-badge)
![React Icons](https://img.shields.io/badge/React%20Icons-c82361?style=for-the-badge)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### 협업

![GitHub](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-FFFFFF.svg?style=for-the-badge&logo=notion&logoColor=black)
![discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## 프로젝트 구조

![image](https://github.com/do-day/frontend/assets/72433681/b0b886cd-d354-41a5-be58-45b8c9858793)

```shell
/
├── api         # API 요청 함수
├── components  # 컴포넌트 및 스타일
├── constants   # 상수
├── contexts    # Context API
├── hoc         # HOC
├── hooks       # Custom Hooks
├── pages       # Next.js 페이지
├── public      # 정적 파일
├── styles      # 글로벌 스타일
├── types       # 타입 정의
└── utils       # 유틸 함수
```
