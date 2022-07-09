import React from 'react';
import styled from 'styled-components';

const WordCard = () => {
  return (
    <>
      <CardBody>
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
      </CardBody>
    </>

  )

}



const CardBody = styled.div`
  width: 28rem;
  max-width: 100%;
  height: 11rem;
  padding: 20px;
  margin: 10px;
  box-shadow: 4px 3px 4px;
  border-radius: 1rem;
  background-color: #fff;
`;
const CardNavBar = styled.div`
  width: 100%;
  height: 2rem;
  margin: auto;
`;
const IconBox = styled.div`
  float: right;
`;


export default WordCard

