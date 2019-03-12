import React from 'react';

export const ReviewScreen = (props) => {
  const { customerInfo, leftFootImages, rightFootImages } = props; 

  return (
    <div>
      
      <div>
      <h3> Customer Information </h3>
        Name: { customerInfo.firstName + ' ' + customerInfo.lastName }
        Order Number: { customerInfo.orderNumber }
        Email: { customerInfo.email }
        Mailing Address: { customerInfo.address}
        Notes: { customerInfo.notes}
      </div>

      <div>
        <h3> Left Foot Images </h3>
      </div>


      <div>
        <h3> Right Foot Images </h3>
      </div>

    
      <div>
        <button> Save Customer Measurement </button>
      </div>


    </div>
  );
}
