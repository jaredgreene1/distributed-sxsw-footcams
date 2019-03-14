import React from 'react';

import { createAlbum } from '../awsFuncs.js';

const customerInfoStyle = {
  display: 'flex',
  flexFlow: 'column',
}



export const ReviewScreen = (props) => {
  const { customerInfo, leftFootImages, rightFootImages, back, upload } = props; 

  return (
    <div>
      
      <div style={customerInfoStyle}>
        <h3> Customer Information </h3>
        <span> Name: { customerInfo.firstName + ' ' + customerInfo.lastName } </span>
        <span> Order Number: { customerInfo.orderNumber } </span>
        <span> Email: { customerInfo.email } </span>
        <span> Mailing Address: { customerInfo.address} </span>
        <span> Notes: { customerInfo.notes} </span>
      </div>

      <div>
        <h3> Left Foot Images </h3>
      </div>


      <div>
        <h3> Right Foot Images </h3>
      </div>

    
      <div>
        <button onClick={back}> Back </button>
        <button> Save Customer Measurement </button>
        <button onClick={upload}> Create Album </button>
      </div>


    </div>
  );
}
