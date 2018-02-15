import {FETCH_TOO_MUCH} from '../actions';

export default function (state = {},action){
  console.log(action);
  switch(action.type) {
    case FETCH_TOO_MUCH:
      return action.payload.data;
    default:
      return state;
  }
}