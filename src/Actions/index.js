/**
 * Created by AndreaMerten on 10/2/17.
 */

import {SUBMIT_FORM} from './types'
import {STORE_LOGIN} from './types'


//import axios from 'axios'


export const  submitForm = (form) => {
  return { type: SUBMIT_FORM, form}
}


export const storeLogin = (email, password) => dispatch => {
  const condition = () => {if (!email) return}
  dispatch({ type: STORE_LOGIN, payload: {email, password}})
}


// export const  fetchData = () => async dispatch => {
//   const res = await axios.get('/data')
//   dispatch({ type: FETCH_DATA, payload: res.data})
// }
//
