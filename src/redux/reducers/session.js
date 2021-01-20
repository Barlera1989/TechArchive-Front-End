import { LOGIN, LOGOUT } from '../actions'

const defaultState = {
  token: localStorage.getItem('authToken') || ""
}

const session = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token };

    case LOGOUT:
      return defaultState;

    default:
      return state;
  }
}

export default session