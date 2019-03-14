import React from 'react';


function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return window.btoa(binary);
}


const displayDiv = {
  margin: '0px 15px',
}

const imageStyle = {
  width: '400px',
  borderRadius: '15px',
}


export function CameraDisplay(props) {
  const { cameraLabel, camera } = props; 

  /*const takePhoto = () => {
    fetch(camera.uri + '/picture')
    console.log('take picture and update photo')
    setTimeout(() =>  camera.updateImage(camera.uri + '/get_picture?' + Date.now()), 1000)
  }
*/
  const takePhoto = () => {
    fetch(camera.uri + '/picture').then( response => {
      console.log("request received")
      console.log(response)
      response.arrayBuffer().then( buffer => {
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = arrayBufferToBase64(buffer);
        camera.updateImage(base64Flag + imageStr)
      })
    })
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
