import {db} from "../../firebase";
import {
  collection,
  // doc,
  // getDoc,
  getDocs,
  addDoc,
  // updateDoc,
  // deleteDoc,
} from "firebase/firestore";

// 액션함수정의
const LOAD = "cards/LOAD";
const ADD_WORD = 'cards/ADD_WORD';

// 액션 생성 함수
export function loadCard(my_words){
  return {type: LOAD, my_words};
}

export const addword = (name, pronoun, mean, ex, exmean) => {
  return {
    type: 'cards/ADD_WORD',
    card: {
      name: name,
      pronoun: pronoun,
      mean: mean,
      ex: ex,
      exmean: exmean
    }
  };
}

const initialState = {
  cards: [
    {
      name: 'cat',
      pronoun: '캐앳',
      mean: '고양이',
      ex: 'The cat is so cute.',
      exmean: '고양이 정말 귀엽다.'
    },
    {
        name: 'dog',
        pronoun: '도ㄱㅡ',
        mean: '강아지',
        ex: 'The dob is so cute.',
        exmean: '강아지 정말 귀엽다.'
      },
      
    
  ]
}

// middlewares
export const loadcardFB = () => {
  return async function (dispatch) {
    const words_data = await getDocs(collection(db, "words"));
    console.log(words_data)

    let my_words = [];

    words_data.forEach((doc) => {
      console.log(doc.data());
      my_words.push({id:doc.id, ...doc.data()});
    });

    console.log(my_words);
    
    dispatch({
      type: "cards/LOAD",
      card: my_words
    });
  };
};

export const addWordFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "words"), card);
    //console.log((await getDoc(docRef)).data());
    // const word_data = {id: docRef.id, ...card};

    // dispatch(addword(word_data));

  };
};



//Reducer
export default function reducer(state = initialState, action={}) {
  switch (action.type) {
    case "cards/LOAD":{
      console.log(action, state)
      return { cards : action.card };
    }
    case "cards/ADD_WORD":
        const NewCards = [...state.cards,action.card]
           
      return {cards:NewCards};
      // case DELETE_WORD:return state.filter(post => post.id !== action.id)
    default:
      return state;
  }
};



