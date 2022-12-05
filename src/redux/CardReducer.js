const initialState = {
    cardData: false
}

export function CardReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_CARD':
        return { cardData: action.payload }
      case 'CHANGE_CARD':
        return { cardData: action.payload }
      default:
        return state
    }
}