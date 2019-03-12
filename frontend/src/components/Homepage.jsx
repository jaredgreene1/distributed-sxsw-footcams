import React from 'react';
import { CamerasController } from './CamerasController.jsx';
import { Breadcrumbs } from './Breadcrumbs.jsx';
import CustomerForm from './CustomerForm.jsx';
import { ReviewScreen } from './ReviewScreen.jsx';


const homepageStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0px',
  height: '100vh',
  width: '100%',
}

const cameraPanelStyle = {
  display: 'flex',
  flexDirection: 'row',
  background: '#d2d2e8',
  borderRadius: '10px',
  padding: '10px',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  color: '#3e3c3c',
  
}

const cameras = { 
  'Left': 'http://4946130849b4be9be47893b9456ffcb5.balena-devices.com:8080',
  'Right': 'http://58c1f48af4b9555f433c17a5be6b954f.balena-devices.com:8080',
  'Top': 'http://192.168.0.36:8080'

}

const Header = props => {
  const {title} = props;

  const headerStyle = {
    margin: '5px',
    display: 'inline',
    fontFamily: 'Montserrat, sans-serif',
  }

  return(
    <div style={headerStyle}>
      <h3> {title} </h3>
      <hr />
    </div>
  ) 
    
}



export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerSignedUp: false,
      stepNumber: 0,
      customerInfo: {},
    }
  }

  signUpCustomer = customerInfo => {
    this.setState({
      customerInfo: customerInfo,
      stepNumber: 1,
      customerSignedUp: true
    })
  }

  nextStep = () => {
    this.setState({
      stepNumber: this.state.stepNumber + 1
    })
  }

  prevStep = () => {
    this.setState({
      stepNumber: this.state.stepNumber - 1
    })
  }

  LeftFootController = () => 
    <CamerasController 
      cameras={{
        'Top': {
          'uri': cameras.Top, 
          'image': this.state.leftTopImage,
          'updateImage': (image) => this.setState({'leftTopImage': image})
        },
        'Outside': { 
          'uri': cameras.Left, 
          'image': this.state.leftOutsideImage,
          'updateImage': (image) => this.setState({'leftOutsideImage': image})
        },
        'Inside' : {
          'uri': cameras.Right, 
          'image': this.state.leftInsideImage,
          'updateImage': (image) => this.setState({'leftInsideImage': image})
        }
      }}
      next={this.nextStep}
      back={this.prevStep}
      foot='Left'
    /> 

  RightFootController = () => 
    <CamerasController 
      cameras={{
        'Top': {
          'uri': cameras.Top, 
          'image': this.state.rightTopImage,
          'updateImage': (image) => this.setState({'rightTopImage': image})
        },
        'Outside': { 
          'uri': cameras.Right, 
          'image': this.state.rightOutsideImage,
          'updateImage': (image) => this.setState({'rightOutsideImage': image})
        },
        'Inside' : {
          'uri': cameras.Left, 
          'image': this.state.rightInsideImage,
          'updateImage': (image) => this.setState({'rightInsideImage': image})
        }
      }}
      next={this.nextStep}
      back={this.prevStep}
      foot='Right'
    /> 


  ScreenForStep = stepNumber => {
    if(stepNumber == 0)
      return(<CustomerForm signUpCustomer= {this.signUpCustomer}/>)
    else if(stepNumber == 1)
      return(this.LeftFootController())
    else if(stepNumber == 2)
      return(this.RightFootController())
    else
     return(<ReviewScreen />)
}

  render() {
    return (
      <div style={homepageStyle}>
        <Header title="Teysha Shoe Measurement System" />
        <Breadcrumbs stepNumber={this.state.stepNumber}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>

        {this.ScreenForStep(this.state.stepNumber)}

        </div>
      </div>
    );
  }
}
