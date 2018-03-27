/**
 * Created by AndreaMerten on 3/14/18.
 */
import {STORE_LOGIN} from '../Actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case STORE_LOGIN:
      return action.payload
    default:
      return state
  }
}