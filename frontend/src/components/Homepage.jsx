import React from 'react';
import { CamerasController } from './CamerasController.jsx';
import { Breadcrumbs } from './Breadcrumbs.jsx';
import CustomerForm from './CustomerForm.jsx';
import { ReviewScreen } from './ReviewScreen.jsx';
import { createAlbum, addPhoto, addCSV } from '../awsFuncs.js';


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
  'Top': 'http://4946130849b4be9be47893b9456ffcb5.balena-devices.com:8080',
  'Left': 'http://58c1f48af4b9555f433c17a5be6b954f.balena-devices.com:8080',
  'Right': 'http://f0a852e9a3316a4e14e38808440a0344.balena-devices.com:8080'

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
      images:{}
    }
  }

  uploadCustomerData = () => {
    const dirName = this.state.customerInfo.firstName + 
      this.state.customerInfo.lastName + 
      this.state.customerInfo.orderNumber
     Object.keys(this.state.images).map( key =>
       addPhoto(this.state.images[key], key, dirName)
     )

    
    var customerData = '' 
    Object.keys(this.state.customerInfo).map( key =>
      customerData += (key + ', '))

    customerData += '\n'
    Object.values(this.state.customerInfo).map( value =>
      customerData += (value + ', '))
    
    addCSV(customerData, dirName)

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

  setImage = (imageName, image) => {
    this.state.images[imageName] = image
    this.setState({images: this.state.images})
  }

  LeftFootController = () => 
    <CamerasController 
      cameras={{
        'Top': {
          'uri': cameras.Top, 
          'image': this.state.images.leftTopImage,
          'updateImage': (image) => this.setImage('leftTopImage', image)
        },
        'Outside': { 
          'uri': cameras.Left, 
          'image': this.state.images.leftOutsideImage,
          'updateImage': (image) => this.setImage('leftOutsideImage', image)
        },
        'Inside' : {
          'uri': cameras.Right, 
          'image': this.state.images.leftInsideImage,
          'updateImage': (image) => this.setImage('leftInsideImage', image)
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
          'image': this.state.images.rightTopImage,
          'updateImage': (image) => this.setImage('rightTopImage', image)
        },
        'Outside': { 
          'uri': cameras.Right, 
          'image': this.state.images.rightOutsideImage,
          'updateImage': (image) => this.setImage('rightOutsideImage', image)
        },
        'Inside' : {
          'uri': cameras.Left, 
          'image': this.state.images.rightInsideImage,
          'updateImage': (image) => this.setImage('rightInsideImage', image)
        }
      }}
      next={this.nextStep}
      back={this.prevStep}
      foot='Right'
    /> 


  ScreenForStep = stepNumber => {
    if(stepNumber == 0)
      return(
        <CustomerForm 
          signUpCustomer= {this.signUpCustomer}
          customerInfo = {this.state.customerInfo}
        />)
    else if(stepNumber == 1)
      return(this.LeftFootController())
    else if(stepNumber == 2)
      return(this.RightFootController())
    else
     return(
       <ReviewScreen 
          customerInfo={this.state.customerInfo} 
          leftFootImages={ [] }
          rightFootImages={ [] }
          back={ this.prevStep }
          upload={ this.uploadCustomerData }
       />)
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
