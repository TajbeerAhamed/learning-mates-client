import React from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({courses}) => {
    return (
        <div className='grid grid-cols-1 mt-15'>
           {
            courses.map(course =><Link to={`/coursesDetails/${course.id}`} className='m-5' key={course.id}>
                <button  className="btn btn-outline btn-primary">{course?.heading}</button>
            </Link>)
           } 
        </div>
    );
};

export default RightSideNav;