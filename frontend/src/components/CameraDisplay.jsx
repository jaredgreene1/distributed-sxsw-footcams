import React from 'react';

const displayDiv = {
  margin: '0px 15px',
}

const imageStyle = {
  width: '400px',
  borderRadius: '15px',
}


export function CameraDisplay(props) {
  const { cameraLabel, camera } = props; 

  const takePhoto = () => {
    fetch(camera.uri + '/picture')
    console.log('take picture and update photo')
    setTimeout(() =>  camera.updateImage(), 1000)
  }

  return (
    <div id={'Camera '+ cameraLabel} style={displayDiv}>
      <h3> { cameraLabel } </h3>
      <img
        src={camera.image}
        alt="Image not found"
        style={ imageStyle }
      /> 
      <div>
        <button onClick={takePhoto}> Capture image </button>
      </div>
    </div>
  );
}
