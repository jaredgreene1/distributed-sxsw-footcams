import React from 'react';

const outerStyle = {
  textAlign: 'left',
  fontFamily: 'Montserrat,sans-serif',
  maxWidth: '800px',
}

const formStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  padding: '30px',
  align: 'left',
  background: '#4e98f3',
  borderRadius: '7px',
}

const fieldStyle = {
  padding: '5px',
  align: 'left',
  margin: '10px',
  textAlign: 'left',
  display: 'flex',
  flexFlow: 'column'
}

const inputStyle = {
  borderRadius: '5px',
  margin: '5px',
}


export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      orderNumb: '',
      address: '',
      notes: '',
    };
  }

  changeFirstName = event => this.setState({firstName: event.target.value});
  changeLastName = event => this.setState({lastName: event.target.value});
  changeAddress = event => this.setState({address: event.target.value});
  changeEmail = event => this.setState({email: event.target.value});
  changeOrderNumb = event => this.setState({orderNumb: event.target.value});
  changeNotes = event => this.setState({notes: event.target.value});

  handleSubmit = event => {
    this.props.signUpCustomer(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        orderNumb: this.state.orderNumb,
        address: this.state.address,
        notes: this.state.notes
      }
    );
    event.preventDefault();
  }

  render() {
    return (
      <div style={outerStyle}>
        <h3> New Customer </h3>
        <div style={formStyle}>
          <div style = {{display: 'flex', flexFlow: 'row wrap'}}>

            <label style={fieldStyle}>
              First name: 
              <input type="text" 
                value={this.state.firstName} 
                onChange={this.changeFirstName} 
                style={inputStyle}
              />
            </label>

            <label style={fieldStyle}>
              Last name: 
              <input type="text" 
                value={this.state.lastName} 
                onChange={this.changeLastName} 
                style={inputStyle}
              />
            </label>

            <label style={fieldStyle}>
              Email:  
              <input type='email'
                value={this.state.email} 
                onChange={this.changeEmail} 
                style={inputStyle}
              />
            </label>

            <label style={fieldStyle}>
              Order Number: 
              <input type="text" 
                value={this.state.orderNumb} 
                onChange={this.changeOrderNumb} 
                style={inputStyle}
              />
            </label>
          </div>

          <label style={fieldStyle}>
            Mailing Address:  
            <textarea 
              value={this.state.address} 
              onChange={this.changeAddress} 
              style={{borderRadius: '5px'}}
            />
          </label>

          <label style={fieldStyle}>
            Notes:  
            <textarea 
              value={this.state.notes} 
              onChange={this.changeNotes} 
              style={{borderRadius: '5px'}}
            />
          </label>
          

          <button 
            onClick={this.handleSubmit} 
            style={{borderRadius: '1px', width: '50%', alignSelf: 'center'}}
          > 
            Submit 
          </button>
        </div>
      </div>
    );
  }
}

