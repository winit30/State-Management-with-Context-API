import React, { useRef } from 'react';

import { useLogin } from '../../hooks';

const Login = () => {

	const userNameInput = useRef(null);
	const listNameInput = useRef(null);

	const { isLoading, error, handleLogin } = useLogin();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (userNameInput.current && listNameInput.current) {
			handleLogin(userNameInput.current.value, listNameInput.current.value);
		}
	}

	return (
		<div>
			<h1>Simple Todo</h1>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='text'
					ref={userNameInput}
					placeholder='Your Name'
					className='form-field' />
				<input
					type='text'
					ref={listNameInput}
					placeholder='List Name (e.g. Daily)'
					className='form-field' />
        <button type="submit">Let's Go</button>
				{error && <div className='form-error'>{error}</div>}
			</form>
		</div>
	);
}

export default Login;
