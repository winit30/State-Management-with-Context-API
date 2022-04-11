import React from 'react';

import { useItems } from '../../hooks';

import TodoItem from './Todo';

const TodoList = () => {
	const { items } = useItems();

	return (
		<div className='todo-visible-list'>
			{items.map((item) => <TodoItem key={item.id} {...item} />)}
		</div>
	);
}

export default TodoList;
