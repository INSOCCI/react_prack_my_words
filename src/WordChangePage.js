import React from 'react';

import { Button,Form } from 'react-bootstrap';

import WordForm from './components/WordForm';

const WordChangePage = () => {
  return (
    <Form id="wordform_box">
    
      {/* 제목 */}
      <h4 style={{textAlign:"center", marginBottom:"20px"}}>단어 수정하기</h4>
      <WordForm/>   

      {/* 완료버튼 */}
      <Button variant="primary" type="submit" className='btn'>수정하기</Button>
    
  </Form>  
  )
}

export default WordChangePage