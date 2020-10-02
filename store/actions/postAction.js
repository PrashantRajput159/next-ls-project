import * as types from '../types';


export const fetchposts = () => async dispatch => {
	//const res = await axios.get('api/posts');

	dispatch({
		type:types.GET_POSTS,
		//payload:res.data,
		payload: ["1st post", "2nd post", "post 3rd"]
	})
}

export const fetchpostdetail = () => async dispatch => {
	//const res = await axios.get('api/posts');

	dispatch({
		type:types.GET_POSTS,
		//payload:res.data,
		payload: ["1st post", "2nd post", "post 3rd"]
	})
}