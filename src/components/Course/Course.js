import React from 'react';

const Course = ({course}) => {
    console.log(course);
    return (
        <div>
            <h2>This is Course {course.length}</h2>
        </div>
    );
};

export default Course;