import React, { Component } from 'react';
import { Image } from './components/Image.jsx'
import { Header } from './components/Header.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Image imageTitle='imageA.jpg' />
        <Image imageTitle='imageB.jpg' />
        <Image imageTitle='imageD.jpg' />
      </div>
    );
  }
}

export default App;
