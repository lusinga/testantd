import React from 'react';
import {Button, Alert} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const onAlertClose = (e) => {
  console.log(e,'I was closed.');
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Hello</Button>
        <Alert 
        message="欢迎使用" 
        type="success"
        closable
        onClose={onAlertClose}
        />
      </header>
    </div>
  );
}

export default App;
