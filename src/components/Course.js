import React from 'react';
import StarRating from './StarRating';

const Course = (props) => {
  return (
    <div className="card">
      <div>
        <img src={process.env.PUBLIC_URL+ props.url} alt={props.name} />
        {console.log( "Valoare : " + process.env.PUBLIC_URL)};
      </div>
      <h2>{ props.name }</h2>
      <p>{ props.desc }</p>
      <h3>Course Rating</h3>
      <StarRating /> 
    </div>
  );
}

export default Course;