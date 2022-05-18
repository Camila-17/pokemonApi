import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import { useState } from 'react';

function App() {
  const[count, setCount] = useState(null)
  
  return (
    <div className="App">
      <header className="App-header">
        <Name/>
      </header>
    </div>
  );
}

export default App;
