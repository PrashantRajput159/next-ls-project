import * as types from '../types';

const initialState = {
	posts:[],
	post:{},
	loading:false,
	error:null
};

export const postReducer = (state = initialState, action) => {

	switch(action.type){
		case types.GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading:false,
				error:null
			}

		default :
			return state
	}
}

const detailsState = {
	details:[],
	post:{},
	loading:false,
	error:null
};

export const postDetailReducer = (state = detailsState, action) => {

	switch(action.type){
		case types.POST_DETAILS:
			return {
				...state,
				details: action.payload,
				loading:false,
				error:null
			}

		default :
			return state
	}
}