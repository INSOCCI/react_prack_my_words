import React from 'react'
import { Form, Button } from 'react-bootstrap';


const WordForm = () => {
  return (
   
        <Form id="wordform_box">
            {/* 제목 */}
            <h4 style={{textAlign:"center", marginBottom:"20px"}}>단어 수정하기</h4>
                {/* 입력 form - 1 */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>단어</Form.Label>
                    <Form.Control className='text_input' type="text" />
                </Form.Group>
                {/* 입력 form - 2 */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>발음</Form.Label>
                    <Form.Control className='text_input' type="text"  />
                </Form.Group>
                {/* 입력 form - 3 */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>의미</Form.Label>
                    <Form.Control  className='text_input' type="text"  />
                </Form.Group>
                {/* 입력 form - 4 */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>예문</Form.Label>
                    <Form.Control  className='text_input' type="text"  />
                </Form.Group>
                {/* 입력 form - 5 */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>해석</Form.Label>
                    <Form.Control className='text_input' type="text"  />
                </Form.Group>
                
                
            {/* 완료버튼 */}
            <Button variant="primary" type="submit" className='change_btn'>수정하기</Button>

        </Form>

  )
}



export default WordForm