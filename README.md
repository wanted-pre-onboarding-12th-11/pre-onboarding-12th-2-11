# 원티드 프리온보딩 프론트엔드 12차 2주차 과제 - 11팀

## 과제 소개
- [특정 깃헙 레파지토리(React)의 이슈 목록](https://github.com/facebook/react/issues)과 상세 내용을 확인하는 웹 사이트 구축 + Best Practice 도출
> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다. 
과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요.

1. 이슈 목록 화면
    - 이슈 목록 가져오기 [Github REST API](https://docs.github.com/en/rest) 활용
    - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
    - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
    - 다섯번째 셀마다 광고 이미지 출력
    - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
    - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

2. 이슈 상세 화면
    - 이슈의 상세 내용 표시
    - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
    
3. 공통 헤더
    - 두 페이지는 공통 헤더를 공유합니다.
    - 헤더에는 Organization Name / Repository Name이 표시됩니다.

4. 에러 화면 구현

## 팀원 소개

> 이름을 클릭하면 개인 github 프로필로 이동합니다.

|  [팀장] [장택진](https://github.com/TaekJinJang)     |  [김영채](https://github.com/0chae01)    |   [박상준](https://github.com/owen970517)            |  [오아름](https://github.com/Aroma-oh)             |[이새미](https://github.com/saemileee)| [홍혜수](https://github.com/hyesuhong)|
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/TaekJinJang" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/0chae01" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/owen970517" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/Aroma-oh" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/saemileee" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/hyesuhong" width="130" height="130"> |

## 목표 설정

#### 💡 Best Practice 도출을 위한 토론 및 소통 경험
- API 
  - 단순하고 명확한 호출
- 인피니티 스크롤
  - 데이터 무결성
- UX 고려
  - 스켈레톤, 로딩 스피너
- 에러처리
  - api 호출 에러와 라우터 에러 분리
- 클린코드 (유지보수 고려)
  - 관심사 분리로 유지보수성 향상

## 개발 기간
2023.08.29-2023.08.31

## 팀 노션
[팀 노션 링크](https://motley-bird-51b.notion.site/2-68c1a5c093194ae1a5ea81df4b0140b6?pvs=4)

## 시작 가이드
* 배포 주소
🔗 http://wanted-pre-onboarding-12th-2-11.s3-website.ap-northeast-2.amazonaws.com/issues

* 프로젝트 실행 방법
  ```
  $ npm install
  $ npm start
  ```

## 화면 구성

|            /signin     |       /signup      |
| :-------------------------: | :-----------------------------------------------: |
| <img width="400" alt="issueList_gif" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/4b3e2e9f-51a7-4e84-9ed6-eee60723b67a" /> | <img width="400" alt="issueDetail_gif" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/4696107f-d5ed-4bce-8fcd-6c452deeb740" />|


|                   Error             |     Error(open 상태가 아닌 이슈)   |
| :----------------------------: | :-----------------------------------: |
| <img width="400" alt="404" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/ffa83a92-6ca6-4535-a36b-de036de37951"> | <img width="400" alt="notopen" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/14d37aff-5be1-426e-9c61-16d9a92c2f3a"> |

## ✨ Best Practice 도출

### 1. Best Practice를 위해 고민한 내용들 (토론한 내용 결과, 근거)
- [노션 링크](https://motley-bird-51b.notion.site/Best-Practice-91e158df7e814602b142c18693eac97a?pvs=4) 참고

### 2. 프론트엔드 아키텍쳐



### 3. 주요 기능

  #### `Auth`
  
 > - 회원가입과 로그인 기능을 제공합니다.
 > - 이메일과 비밀번호를 입력 받으며, 입력사항은 유효성 검사를 통과해야 합니다.
 > - 회원가입에 성공하면 로그인 페이지로 이동합니다.
 > - 로그인에 성공하면 사용자는 토큰을 부여받고 Todo 페이지로 이동합니다.
  
  #### `Todo`
  
 > - Todo CRUD 기능을 제공합니다.
 > - 동시에 여러 Todo의 수정은 불가능합니다.
 > - 체크박스를 통해 Todo 완료 여부를 확인, 수정할 수 있습니다.
 > - 유효하지 않은 토큰을 가진 사용자가 접속시에는 토큰 삭제 및 로그인 페이지로 이동합니다.

### 4. 트러블 슈팅
- [노션 링크](https://motley-bird-51b.notion.site/f598f800796241b593eff5e2fa60d9e3?pvs=4) 참고

### 5. 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂IssueDetail
 ┃ ┗ 📂IssueList
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂hooks
 ┃ ┣ 📂controllers
 ┣ 📂pages
 ┣ 📂stores
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ```

### 6. 컨벤션

  #### `커밋 컨벤션`
  | 커밋 유형 | 의미 |
  | --- | --- |
  | init | 프로젝트 시작 |
  | feat | 기능 추가 |
  | style | 코드 포맷팅 |
  | refactor | 코드 리팩토링 |
  | chore | 패키지 매니저 및 그 외 기타 수정 ex) .gitignore |
  | rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
  | remove | 파일을 삭제하는 작업만 수행한 경우 |
  | setting | 기본 세팅 변경의 경우 |
  | docs | README.md 수정 등 |
  | design | UI 디자인 |
  | merge | 머지, 충돌해결 등  |

  #### `브랜치 컨벤션`
  - master 브랜치를 직접 작업하지 않습니다.
  - 브랜치는 feature/이름약자-[작업내용] 형태로 생성합니다.

    `feature/TJ-ProfilePage`
    
  #### `코드 컨벤션`,`formatting, lint 컨벤션`
  - [Notion 링크](https://motley-bird-51b.notion.site/d921faeed6f8452b89bc5e04f0b21c2c?pvs=4) 참고
   

## 기술스택 

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">


### Library
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/Axios-DA291C?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white">

<img src="https://img.shields.io/badge/React%20markdown%20preview-000000?style=for-the-badge&logo=Markdown&logoColor=white"> <img src="https://img.shields.io/badge/React Router Dom-3178C6?style=for-the-badge&logo=&logoColor=white">



### Convention

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Environment

<img src="https://img.shields.io/badge/visual Studio cord-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

 
