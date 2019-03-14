import React from 'react';

export const Breadcrumbs = (props) => {
  const { stepNumber } = props; 

  const breadcrumbs = {
    display: 'flex',
    flexFlow: 'row',
    width: '100%'
  }

  const arrowStyle = {
    margin: '0 7px',
    fontWeight: 'bold',
  }

  function bcStyle(numb) {
    return(
      {
        color: numb > stepNumber ? 'black' : 'blue', 
        cursor: 'pointer'

      })
  }

  return (
    <div id={breadcrumbs} style={breadcrumbs}>
      <text style={bcStyle(0)}> Customer Info  </text>
      <text style={arrowStyle}>  →  </text>
      <text style={bcStyle(1)}> Left Foot </text>
      <text style={arrowStyle}>  →  </text>
      <text style={bcStyle(2)}> Right Foot </text>
      <text style={arrowStyle}>  →  </text>
      <text style={bcStyle(3)}> Review & Submit </text>
    </div>
  );
}
