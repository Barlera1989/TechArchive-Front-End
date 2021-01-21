import { combineReducers } from "redux";
import authenticate from './authentication'
import session from './session'

export default combineReducers({ authenticate, session });
