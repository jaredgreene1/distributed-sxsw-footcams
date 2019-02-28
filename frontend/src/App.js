import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={process.env.PUBLIC_URL + 'image.jpg'} alt='no image' />
      </div>
    );
  }
}

export default App;
