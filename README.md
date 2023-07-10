## 배포 사이트
[![Netlify Status](https://api.netlify.com/api/v1/badges/9ec7909a-ce0e-4741-9311-5f056733c261/deploy-status)](https://app.netlify.com/sites/dapper-blancmange-23af79/deploys)

#  프로젝트 소개

## 1. 프로젝트 개요
REST API를 활용하여 Vanilla JavaScript로 제작한 안경 쇼핑몰입니다.

### 1.1 프로젝트 멤버
| <center>박희수<조장></center> | <center>김선미</center>|<center>송지윤</center>  | <center>장현준</center> | <center>박현준</center> |
|:--:|:--:|:--:|:--:|:--:|
| <img src="https://avatars.githubusercontent.com/u/110139098?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/100131415?v=4" width=200> | <img src="https://avatars.githubusercontent.com/u/71622691?v=4" width=200> | <img src="https://avatars.githubusercontent.com/u/83224463?v=4" width=200> | <img src="https://avatars.githubusercontent.com/u/69203535?v=4" width=200> |
| [박희수](https://github.com/Nevacat) | [김선미](https://github.com/seon-mikim)  |   [송지윤](https://github.com/jiyoon29)                     | [장현준](https://github.com/hyeon17)   | [박현준](https://github.com/johnphjkr)  |
| </br>라우터 연결 <br/> 로그인 및 회원가입 페이지 <br/> 검색 및 태그에 따른 상품페이지  |  장바구니 페이지  </br> 위시리스트</br> 마이페이지 </br> 계좌관리 페이지  | 메인페이지 <br/> 관리자 페이지 <br/> 전반적인 디자인 관리  |  제품 상세페이지 <br/> 결제 페이지 <br/> 결제 완료 페이지</br>  관리자 유저 목록 페이지 </br> 관리자 대시보드 페이지 </br> 404(NotFound)페이지 </br> 카카오톡 공유하기 </br> | 정보 변경 페이지 <br> 구매목록 페이지 |

### 1.2 프로젝트 실행 방법
```
1. $ git clone https://github.com/TwoCircle-Team5/TwoCircle.git
2. $ cd TwoCircle-Team5
3. $ npm i
4. root경로에 .env 파일 생성 후, api관련 정보(API_KEY, ADMIN) 입력
5. $ npm run dev
```
관리자 .env
```
ADMIN = admin@naver.com
```
#### 테스트 계정
##### 사용자
ID : test@naver.com<br/>
PW : abcd1234
##### 관리자
ID : admin@naver.com<br/>
PW : abcd1234
### 1.3 프로젝트 문서
[wiki](https://github.com/TwoCircle-Team5/TwoCircle/wiki4)

### 1.4 프로젝트 링크
**[TwoCircle](https://dapper-blancmange-23af79.netlify.app/)**

### 1.5 작업 기간
2023.01.30 ~ 2023.03.10
## 2. 프로젝트 스택
- Basic: `HTML` `SCSS` `JAVASCRIPT`
- Library: `Swiper` `Navigo` `chart.js`
- Deploy: `Netlify`
- Bundler: `Parcel 1`

## 3. 프로젝트 구조
### 3.1 폴더 구조
```
TwoCircle
├─ image
├─ index.html
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ admin
│  ├─ admin_wrap.js
│  ├─ header.js
│  ├─ notfound
│  └─ user
├─ README.md
├─ scss
├─ source
│  ├─ api
│  │  ├─ account
│  │  ├─ certified
│  │  ├─ products
│  │  │  ├─ admin
│  │  │  ├─ common
│  │  │  └─ user
│  │  └─ requests.js
│  └─ js
│     ├─ 404page.js
│     ├─ account.js
│     ├─ admin
│     │  ├─ admin.js
│     │  ├─ admin_dashboard.js
│     │  ├─ admin_products_data.js
│     │  ├─ product.js
│     │  ├─ product_add.js
│     │  ├─ product_list.js
│     │  ├─ product_update.js
│     │  └─ user_list.js
│     ├─ bankImage.js
│     ├─ cart.js
│     ├─ event_badge.js
│     ├─ header.js
│     ├─ loading.js
│     ├─ login.js
│     ├─ main.js
│     ├─ order_completed.js
│     ├─ pagination.js
│     ├─ payment.js
│     ├─ product_details.js
│     ├─ product_list.js
│     ├─ purchase_history.js
│     ├─ pw_check.js
│     ├─ signup.js
│     ├─ user_info.js
│     └─ wish_list.js
└─ static
```
### 3.2 아키텍쳐
![아키텍쳐](/image/readme/twocircle%20아키텍쳐.png)
### 3.3 Figma
[Figma](https://www.figma.com/file/yeJG4aTWGf0OV3Vnw0O0dF/%ED%88%AC%EC%8D%A8%ED%81%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=0-1&mode=design&t=7Bs4ToKtTtBnOw7y-0)
## 4. 프로젝트 기능
- 로그인, 회원가입, 비밀번호 확인
- 메인페이지에서 상품을 확인
- 라이트모드, 다크모드 지원
- 원하는 상품 장바구니에 담기 및 구매하기
- 장바구니 페이지에서 담은 물건 구매 및 삭제
- 결제페이지에서 가상의 화폐를 이용하여 결제 및 주문 정보 확인
- 마이페이지에서 쇼핑정보, 회원정보 수정, 계좌등록 및 삭제, 찜 목록 확인
- 상품에 대해 카카오톡 공유하기
- 상품 찜하기
- 검색 및 필터를 통해 검색
- 관리자 페이지 지원
  - 상품리스트 추가 및 삭제 
  - 상품 정보 수정
  - 회원 목록 확인
  - 대시보드로 상품 수량 현황 차트로 확인, 상품 판매 현황(구매 및 환불) 확인, 요약 정보(판매 갯수 상품, 총 판매 매출, 회원 수) 확인

## 5. 프로젝트 결과
### 5.1 프로젝트 작업 과정
### 페이지 다이어그램
![페이지 구성](/image/%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8.png)

### 작업 리스트
[TwoCircle Issues](https://github.com/TwoCircle-Team5/TwoCircle/issues)
![TwoCircle Issues](/image/TwoCircle%20Issues.png)

### 5.2 프로젝트 결과
#### 로그인 및 회원가입
![로그인](/image/readme/로그인.png)
![회원가입](/image/readme/회원가입.png)
#### 메인 페이지
![메인라이트](/image/readme/메인페이지.png)
#### 제품 상세 페이지
![제품상세](/image/readme/제품상세.png)
#### 장바구니
![장바구니](/image/readme/장바구니.png)
#### 위시 리스트
![위시리스트](/image/readme/위시리스트.png)
#### 결제 페이지
![결제](/image/readme/결제.png)
#### 마이 페이지
![마이](/image/readme/마이.png)
#### 관리자 페이지
![관리자](/image/readme/관리자.png)