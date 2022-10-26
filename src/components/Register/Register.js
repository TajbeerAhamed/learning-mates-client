import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

	const {createUser} = useContext(AuthContext)

	const [error,setError] = useState(null)

	const handleSubmit = event =>{
		event.preventDefault()
		const form = event.target
		const name = form.name.value 
		const photoURL = form.photoURL.value 
		const email = form.email.value 
		const password = form.email.value 
		const confirmedPassword = form.confirmedPassword.value
		console.log(name,photoURL,email,password);

		if(password !==confirmedPassword ){
			return setError("Password doesnot Matced")
		}

		createUser(email,password)
		.then (result =>{
			const user = result.user 
			console.log(user);
			form.reset()
			setError("")
		})
		.catch (error => console.error(error))

	} 


    return (
		
<div>
           <div  className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm text-gray-400">Sign in to access your account</p>
	</div>
	<form onSubmit={handleSubmit}  action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-sm">Your Full Name</label>
				<input type="text" name="name" id="email" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				<label for="email" className="block mb-2 text-sm">PhotoURL</label>
				<input type="text" name="photoURL" id="email" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
			</div>
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="abc@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required/>
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<Link rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</Link>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required/>
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Register</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
				<Link rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">Sign up</Link>.
			</p>
		</div>
	</form>
</div>
        </div>
		
        
    );
};

export default Register;