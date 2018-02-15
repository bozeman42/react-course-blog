import {combineReducers} from 'redux';
import postReducer from './reducer_posts';
import howmuchReducer from './reducer_howmuch';
import {reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  posts: postReducer,
  form: formReducer,
  howmuch: howmuchReducer
});

export default rootReducer;