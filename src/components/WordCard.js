import React from 'react';
import styled from 'styled-components';

const WordCard = () => {
  return (
    <>
      <CardBox>
        <CardNavBar>
          <h4 style={{float:"left"}}> 단어 
            <span style={{fontSize:"0.8rem",color:"#727272", marginLeft:"5px"}}>[발음]</span>
          </h4>
          <IconBox>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828700.png" style={{width: "1.2em", height: "1.2em"}}/>
            <img src="https://cdn-icons-png.flaticon.com/128/7955/7955425.png" style={{width: "0.9em", height: "0.9em", margin: "0px 15px"}}/>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828744.png" style={{width: "0.9em", height: "0.9em"}}/>
        </IconBox>
        </CardNavBar>
        <CardBody>
          <p>의미의미의미의미의미</p>
          <span style={{color: "blue"}}><p>예문</p>
          <p>해석</p></span>
        </CardBody>
      </CardBox>
    </>

  )

}



const CardBox = styled.div`
  width: 28rem;
  max-width: 100%;
  height: 11rem;
  padding: 20px;
  margin: 10px;
  box-shadow: 2px 3px 0.8px #333;
 // border: 2px #F4E035 solid;
  border-radius: 1rem;
  background-color: #fff;
`;
//const OnCardBox = styled.div`
//   width: 28rem;
//   max-width: 100%;
//   height: 11rem;
//   padding: 20px;
//   margin: 10px;
//   box-shadow: 2px 3px 0.8px #333;
//  // border: 2px #F4E035 solid;
//   border-radius: 1rem;
//   background-color: #f5df19cf;
// `;

const CardNavBar = styled.div`
  width: 100%;
  height: 2rem;
  margin: auto;
`;
// const OnCardNavBar = styled.div``;

const IconBox = styled.div`
  float: right;
`;
const CardBody = styled.div`
  float: left;
  width: 100%;
  line-height: 0.8em;
  margin-top: 0.8rem;
  
`;


export default WordCard

