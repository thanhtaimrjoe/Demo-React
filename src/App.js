import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
// import TestProps from './components/TestProps';
// import Message from './components/Message';
// import List from './components/List';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <StyleSheet primary={true} />
      <Inline />
      {/* <List/> */}
      {/* <Hello/> */}
      {/* <TestProps name="Usopp" role="Sogeking"/> */}
      {/* <Message/> */}
    </div>
  );
}

export default App;
