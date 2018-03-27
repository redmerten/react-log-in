/**
 */

//index.js allows app to import all reducers (data) at once

import {combineReducers} from 'redux'  //action creators immediately return action+payload
import loginReducer from './loginReducer'


//this is imported by main index.js
export default combineReducers({
  login:loginReducer
})