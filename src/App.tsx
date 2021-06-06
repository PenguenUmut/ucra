import React from 'react';
import Button from './components/button/Button';
import Label from './components/Label/Label';

import './App.css';

function App() {
  return (
    <div className="App">
      <Button text="Click Me!" />
      <br />
      <Label text="Tag1" />
    </div>
  );
}

export default App;
