import React from 'react';

function Lists(props) {
  return( 
  <div className="border">
      <h5>Events: {props.title}</h5>
      <h5>Date: {props.date}</h5>
      <h5>Note: {props.notes}</h5>
  </div>
  )
}

export default Lists;
