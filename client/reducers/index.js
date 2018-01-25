const initialState = {
  fetching: false,
  fetched: false,
  homes: [],
  currentHome: {
    url: '',
    asses: ''
  },
  error: null
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_HOMES_PENDING':
      return { ...state, fetching: true}
      break;
    case 'FETCH_HOMES_REJECTED':
      return { ...state, fetching: false, error: action.payload}
      break;
    case 'FETCH_HOMES_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        homes: action.payload,
        currentHome: action.payload[0]
      }
      break;
    case 'SET_CURRENT_HOME':
      return {
        ...state,
        currentHome: action.payload
      }
      break;
    case 'ASSES_HOME':
      let currentIndex = state.homes.findIndex(x => x.url === state.currentHome.url)
      state.homes[currentIndex].asses = action.payload
      return {
        ...state,
        homes: state.homes
      }
      break;
  }
  return state;
}
