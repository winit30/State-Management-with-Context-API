import { ITEMS } from './types';

export function addItem(text) {
	return {
		type: ITEMS.ADD,
		payload: text
	};
}

export function resetItems() {
	return {
		type: ITEMS.RESET
	};
}

export function completeItem(id) {
	return {
		type: ITEMS.COMPLETE,
		payload: id
	};
}
