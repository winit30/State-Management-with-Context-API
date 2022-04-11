import React, { useRef } from 'react';

import { useItems } from '../../hooks';

const AddTodo = () => {

	const todoInput = useRef(null);

	const { addItem } = useItems();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (todoInput.current) {
			addItem(todoInput.current.value);
			todoInput.current.value = '';
		}
	}

	return (
		<div className='todo-add'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					ref={todoInput}
					className='form-field'
					placeholder='e.g. Buy Tickets' />
			</form>
		</div>
	);
}

export default AddTodo;
