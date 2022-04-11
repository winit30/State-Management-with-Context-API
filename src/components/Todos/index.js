import React  from 'react';

import { useItems, useLogin } from '../../hooks';

//import { Button } from 'atoms';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => {

	const { resetItems } = useItems();
	const { userName, handleLogout } = useLogin();

	const handleBack = () => {
		handleLogout();
		resetItems();
	};

	return (
		<div className='todo-list'>
			<div>
				<button onClick={handleBack}>Back</button>
			</div>
			<h1>Hi, {userName}</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
}

export default Todos;
