import itemsReducer from './items';
import loginReducer from './login';

import { logger } from './middlewares';

export const initialState = {
	items: itemsReducer.initialState,
	login: loginReducer.initialState
}

export default function mainReducer(state, action) {
	// Receiving previous state here
	const { items, login } = state;

	// Receiving current state here
	const currentState = {
		items: itemsReducer.reducer(items, action),
		login: loginReducer.reducer(login, action)
	};

	// Middlewares
	logger(action, state, currentState);

	return currentState;
}
