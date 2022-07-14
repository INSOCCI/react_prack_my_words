
import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';


const WordForm = ({setName,setPronoun,setMean,setEx,setExMean}) => {
    
    
    const form_name = React.useRef(null)
    const form_pronoun = React.useRef(null)
    const form_mean = React.useRef(null)
    const form_ex = React.useRef(null)
    const form_exmean = React.useRef(null)

    // setName(form_name)
    

  return (
        <>
        
            {/* 입력 form - 1 */}
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>단어</Form.Label>
                    <Form.Control ref={form_name} className='text_input' placeholder='단어를 입력해주세요' type="text" onChange={(event)=> setName(event.target.value)}/>
                </Form.Group>

            {/* 입력 form - 2 */}
                <Form.Group className="mb-3" controlId="formPronoun">
                    <Form.Label>발음</Form.Label>
                    <Form.Control ref={form_pronoun} className='text_input' placeholder='발음을 입력해주세요' type="text" onChange={(event)=> setPronoun(event.target.value)}/>
                </Form.Group>

            {/* 입력 form - 3 */}
                <Form.Group className="mb-3" controlId="formMean">
                    <Form.Label>뜻</Form.Label>
                    <Form.Control ref={form_mean} className='text_input' placeholder='뜻을 입력해주세요' type="text" onChange={(event)=> setMean(event.target.value)}/>
                </Form.Group>

            {/* 입력 form - 4 */}
                <Form.Group className="mb-3" controlId="formEx">
                    <Form.Label>예문</Form.Label>
                    <Form.Control ref={form_ex}  className='text_input' placeholder='예문을 입력해주세요' type="text" onChange={(event)=> setEx(event.target.value)}/>
                </Form.Group>

            {/* 입력 form - 5 */}
                <Form.Group className="mb-3" controlId="formExMean">
                    <Form.Label>해석</Form.Label>
                    <Form.Control ref={form_exmean} className='text_input' placeholder='예문 해석을 입력해주세요' type="text" onChange={(event)=> setExMean(event.target.value)}/>
                </Form.Group>
       </ >
  )
}



export default WordForm