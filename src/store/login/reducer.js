import { LOGIN } from './types';

export const initialState = {
	userName: '',
	listName: '',
	isLoading: false,
	isLoggedIn: false,
	error: ''
}

export default function login(state = initialState, action) {
	switch (action.type) {
		case LOGIN.INIT:
			return {
				...state,
				error: '',
				isLoading: true
			};
		case LOGIN.SUCCESS:
			return {
				...state,
				userName: action.payload.userName,
				listName: action.payload.listName,
				isLoading: false,
				isLoggedIn: true
			};
		case LOGIN.ERROR:
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: action.payload
			};
		case LOGIN.TERMINATE:
			return {
				...state,
				userName: '',
				listName: '',
				isLoggedIn: false
			};
		default: {
			return state;
		}
	}
}
