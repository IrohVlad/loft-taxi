const initialState = {
    isLoggedIn: false
}

export function AuthReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOG_IN':
        return { isLoggedIn: true }
      case 'LOG_OUT':
        return { isLoggedIn: false }
      default:
        return state
    }
}