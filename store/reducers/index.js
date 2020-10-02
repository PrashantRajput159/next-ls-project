import { combineReducers } from 'redux';
import { postReducer, postDetailReducer } from './postReducer';
export default combineReducers({
	post: postReducer,
	details: postDetailReducer
});