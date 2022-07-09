/* 
1. 전체 단어 페이지(메인)
  -레이아웃/디쟌-
    body : 전체 bg넣기
    nav : 상단 fix, 컴포넌트화
    +btn : 오른쪽 하단 fix, +아이콘 png?파일?, 마우스오버-> 90도 회전
    card : 정렬은 bootstrap 이용, 아이콘 btn들 png로 가져오기?(색깔 바껴야함..)
  -기능-
    card>btn : (1) 클릭-> card색깔 변함 (2) 단어 수정페이지로 이동 (3) 비밀번호 입력창? 삭제기능 찾아보기!
    +btn : 클릭 -> 단어 추가 페이지로 이동

2. 단어 수정 페이지
  레이아웃 - nav 컴포넌트 사용 , 단어 추가 페이지랑 제목과 버튼 빼고 컴포넌트화 시켜도 될듯
  기능 - 수정 btn 클릭 -> 메인으로 이동하면 수정 내용 반영

3. 단어 추가 페이지
  레이아웃 - nav 컴포넌트 사용, 단어 수정 페이지랑 같은 컴포넌트 쓰기.
  기능 - (1) text 미입력 칸 있을 시 -> 경고창 띄우기
         (2) text 입력 시 -> 메인으로 이동하면 입력했던 내용이 반영된 카드 생성
*/

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./pages/MainPage";
import WordChangePage from "./pages/WordChangePage";
import WordAddPage from "./pages/WordAddPage";
import Navs from "./components/Navs";

function App() {
  return (
    <div>
      <Navs/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/:id" element={<WordChangePage/>}/>
        <Route path="/word_add" element={<WordAddPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
