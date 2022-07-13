

// 액션함수정의
const ADD_WORD = 'cards/ADD_WORD';

// 액션 생성 함수
export const addword = (name, pronoun, mean, ex, exmean) => {
  return {
    type: ADD_WORD,
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
        pronoun: '캐앳',
        mean: '고양이',
        ex: 'The cat is so cute.',
        exmean: '고양이 정말 귀엽다.'
      },
    
  ]
}
//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'cards/ADD_WORD':
        const NewCards = [...state.cards,action.card]
           
      return {cards:NewCards};
      // case DELETE_WORD:return state.filter(post => post.id !== action.id)
    default:
      return state;
  }
};



