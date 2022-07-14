import {React, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';

import {Button, Form} from 'react-bootstrap';

import { addWordFB } from './redux/modules/cards';
import WordForm from './components/WordForm';



const WordAddPage = () => {

  const [name,setName] = useState('')
  const [pronoun,setPronoun] = useState('')
  const [mean,setMean] = useState('')
  const [ex,setEx] = useState('')
  const [exmean,setExMean] = useState('')

  const dispatch = useDispatch();



  const navigate = useNavigate();

  const addContact = (event) => {
    event.preventDefault();

    // const newWord = {
    //   name: name,
    //   pronoun: pronoun,
    //   mean: mean,
    //   ex: ex,
    //   exmean: exmean
    // }
    // // addword를 오브젝트화 시켜서 놓음.
    // dispatch({
    //   type: 'cards/ADD_WORD',
    //   card: newWord
    // });
    dispatch(addWordFB({
      name: name,
      pronoun: pronoun,
      mean: mean,
      ex: ex,
      exmean: exmean
    }));
    navigate('/');

  };
  return (
    <Form id="wordform_box" onSubmit={addContact}>

      {/* 제목 */}
      <h4 style={{
        textAlign: "center",
        marginBottom: "20px"
      }}>단어 추가하기</h4>
      <WordForm
        setName={setName}
        setPronoun={setPronoun}
        setMean={setMean}
        setEx={setEx}
        setExMean={setExMean}/> {/* 완료버튼 */}
      <Button variant="primary" type="submit" className='btn'>추가하기</Button>

    </Form>
  )
}

export default WordAddPage;