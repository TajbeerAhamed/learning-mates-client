import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import RightSideNav from '../RightSideNav/RightSideNav';
import './Courses.css'


const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='courses'>
           <div  className='grid sm:grid-cols-3 gap-2 ml-10 mt-8'>
{
    courses.map(course => 
       
    <Course
    key={course.id}
    course={course}
    >

    </Course>)
}
           </div>
           <div >
            <RightSideNav courses={courses}></RightSideNav>
           </div>
        </div>
    );
};

export default Courses;