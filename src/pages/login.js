import React, { useState } from 'react';
import '../css/login.css';
import { useDispatch, useSelector } from 'react-redux';
// import { Validate } from '../Functions/login';


const Login = ({history}) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
   const {user} = useSelector((state)=> ({...state}))

	const users = [{
		name: 'santy',
		password: 'santy123'
	}]
   const Validate = async (user) => {
      if (user.name === 'admin' && user.password === 'admin123') {
         alert('login succesfully');
         history.push('/admin')
      } 
      else if (user.name === 'staff' && user.password === 'staff123') {
         alert('login succesfully');
         history.push('/staff')
      } 
      else if (user.name === 'doctor' && user.password === 'doctor123') {
         alert('login succesfully');
         history.push('/doctor')
      } 
      else {

         alert('login failed');

      }
   };

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: 'LOGGED_IN_USER',
			payload: {
				name: name,
				password: password,
			},
		});
		setName('');
		setPassword('');
      Validate(user)
	};
	return (
		<>
			<div className='container'>
				<form className='box'>
					<h1>login</h1>
					<input
						type='text'
						name=''
						placeholder='Enter Username'
						id='username'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type='password'
						name=''
						placeholder='Enter Password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className='btn'
						type='submit'
						name=''
						value='Login'
						onClick={handleSubmit}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
