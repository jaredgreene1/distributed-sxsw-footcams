// source: https://stackoverflow.com/questions/22186979/download-file-from-url-and-upload-it-to-aws-s3-without-saving-node-js
import React from 'react';
import { CameraDisplay } from './CameraDisplay.jsx';


  const panelStyle = {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap'
  }

export class CamerasController extends React.Component {
  constructor(props) {
    super();
    this.state = {
      imageRound: 0
    }
  }
 


  render () {
    return (
      <div>
        <h3> {'Capturing Images for ' + this.props.foot + ' foot'}</h3>
        <div style={panelStyle}>
          { Object.keys(this.props.cameras).map(key =>  
              <CameraDisplay
                cameraLabel={key}
                camera={this.props.cameras[key]}
              />
          )}        
        </div>
      <div name='control_buttons'>
        <button onClick={this.props.back}> Back </button>
        <button onClick={this.props.next}> Next</button>
      </div>
      </div>
    )
  }
}
