import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigator from './main/Navigator';
import Text from './main/Text';
class App extends React.Component{
  render(){
    return(
      <div>
         <Navigator/>
         <Text/>
      </div>
    );
  }
}

export default App;
