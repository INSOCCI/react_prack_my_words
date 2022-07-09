import React from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import WordCard from "./components/WordCard";

const MainPage = () => {
  return (
  <>
    <CardBox>
      <WordCard />
      <WordCard />
      <WordCard />
    </CardBox> 
    <AddBtn>
      <img src="https://cdn-icons-png.flaticon.com/128/983/983952.png" style={{width:"3rem", height:"3rem"}}/>
    </AddBtn>  
  </>  
  )
}

const CardBox = styled.div`
width: 100rem;
max-width: 100%;
overflow: hidden;
margin: 100px auto;
display: flex;
justify-content: center;
`;

const AddBtn = styled.div`
width:3rem;
position: fixed;
bottom: 2%;
right: 2%;
`;

export default MainPage


