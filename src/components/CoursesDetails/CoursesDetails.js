import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const coursesDetails = useLoaderData()
    const {img,description,heading} = coursesDetails
    console.log(coursesDetails);
    return (
        <div>
            <h1 className='text-5xl mb-10 text-center font-bold'>All Details of This Course is Here</h1>
        <div className="max-w-xs mx-auto rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{heading}</h2>
			<p className="text-gray-100">{description}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Get Premium Access</button>
	</div>
</div>
        </div>
    );
};

export default CoursesDetails;