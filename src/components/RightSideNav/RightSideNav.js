import React from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({courses}) => {
    return (
        <div className='grid grid-cols-1 mt-15'>
           {
            courses.map(course =><Link className='m-5' key={course.id}>
                <button>{course?.name}</button>
            </Link>)
           } 
        </div>
    );
};

export default RightSideNav;