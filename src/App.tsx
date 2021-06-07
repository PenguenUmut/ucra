import React from 'react';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
      <Button label="Click Me!" />
    </div>
  );
}

export default App;
