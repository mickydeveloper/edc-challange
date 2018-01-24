import { LIKE_HOME } from '../constants/index';

const likedHome = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const likedHomes =  (state = [], action) => {
  let likedHomes = null;
  switch(action.type){
    case LIKE_HOME:
      likedHomes = [...state,likedHome(action)];
      console.log(likedHomes);
      return likedHomes;
    default:
      return state;
  }
}

export default likedHomes;
