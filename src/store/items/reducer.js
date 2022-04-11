import { ITEMS } from './types';

export const initialState = [];

export default function items(state = initialState, action) {
	switch (action.type) {
		case ITEMS.RESET: {
			return [];
		}
		case ITEMS.ADD: {
			return [
				...state,
				{
					id: Date.now(),
					text: action.payload,
					completed: false,
				},
			];
		}
		case ITEMS.COMPLETE: {
			return state.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			});
		}
		default: {
			return state;
		}
	}
}
