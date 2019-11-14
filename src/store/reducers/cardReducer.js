const initState = {
  cards: []
};

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
    case 'UPDATE_CARD':
    case 'DELETE_CARD':
      return state;
    case 'CREATE_CARD_ERROR':
    case 'UPDATE_CARD_ERROR':
      return state;
    default: 
      return state;
  }
}

export default cardReducer;