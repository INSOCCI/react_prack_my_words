import React from 'react';
import { useState } from 'react';
import { Button,Form } from 'react-bootstrap';

import WordForm from './components/WordForm';


const WordAddPage = () => {

  const [name, setName]=useState('')
  const [pronoun, setPronoun]=useState('')
  const [mean, setMean]=useState('')
  const [ex, setEx]=useState('')
  const [exmean, setExMean]=useState('')






  const addContact=(event)=>{
    console.log(name,pronoun,mean,ex,exmean) 
    event.preventDefault();
   
  };
  
  return (
    <Form id="wordform_box" onSubmit={addContact}>
    
      {/* 제목 */}
      <h4 style={{textAlign:"center", marginBottom:"20px"}}>단어 추가하기</h4>
      <WordForm setName={setName} setPronoun={setPronoun} setMean={setMean} setEx={setEx} setExMean={setExMean} />

      {/* 완료버튼 */}
      <Button variant="primary" type="submit" className='btn'>추가하기</Button>
      
    </Form>  
  )
}

export default WordAddPage;