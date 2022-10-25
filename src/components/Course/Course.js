import React from 'react';

const Course = ({course}) => {
    const {heading,img,description,name} = course
    return (
        <div>
           <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
	<img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 " />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{heading}</span>
		<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
	</div>
	<p className="text-gray-100">{description}</p>
</div>
        </div>
    );
};

export default Course;