import axios from 'axios';

export function fetchHomes(){
  return function(dispatch) {
    axios.get("https://api.myjson.com/bins/juc9l")
    .then((response) => {
      dispatch({type: 'FETCH_HOMES_FULFILLED', payload: response.data})
    })
    .catch((err) => {
      dispatch({type: 'FETCH_HOMES_REJECTED', payload: err })
    })
  }
}

export function setCurrentHome(home){
  return {
    type: 'SET_CURRENT_HOME',
    payload: home
  }
}

export function assesHome(asses){
  return {
    type: 'ASSES_HOME',
    payload: asses
  }
}
