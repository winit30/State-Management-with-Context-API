import React  from 'react';

import { useLogin } from '../../hooks';

import Todos from '../Todos';
import Login from '../Login';

const App = () => {

	const { isLoggedIn } = useLogin();

	return (
		<div className='todo-app'>
			{isLoggedIn ?  <Todos /> : <Login />}
		</div>
	);
}

export default App;
