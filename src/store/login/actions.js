import { LOGIN } from './types';

import { fakeLogin } from '../../common/utils';

function login() {
	return {
		type: LOGIN.INIT
	};
}

function success(userName, listName) {
	return {
		type: LOGIN.SUCCESS,
		payload: { userName, listName }
	};
}

function failed(error) {
	return {
		type: LOGIN.ERROR,
		payload: error
	};
}

export function handleLogin(userName, listName) {
	return async function (dispatch) {
		dispatch(login());
		try {
			await fakeLogin(userName, listName);
			dispatch(success(userName, listName));
		} catch (error) {
			dispatch(failed(error.response.data));
		}
	};
}

export function handleLogout() {
	return {
		type: LOGIN.TERMINATE
	};
}
