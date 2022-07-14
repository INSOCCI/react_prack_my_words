
import React from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {loadcardFB } from './redux/modules/cards';

import styled from 'styled-components';


import WordCard from "./components/WordCard";

const MainPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("제발 좀  떠줘")
     dispatch(loadcardFB());
  }, []);
  

  const goToAddPage=()=>{
    navigate('/word_add');
  }

  return (
  <>
    <CardsBox>

      <WordCard />
    </CardsBox> 
    <AddBtn className='add_btn' onClick={goToAddPage}>
      <img src="https://cdn-icons-png.flaticon.com/128/983/983952.png" style={{width:"3rem", height:"3rem"}}/> 
    </AddBtn>  
  </>  
  )
}

const CardsBox = styled.div`
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


