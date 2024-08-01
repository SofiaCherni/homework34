import { useState } from 'react'
import './App.css'
import UserName from './components/UserName';

function App() {
  const [name, setName] = useState('');

  const onButtonClick = () => {
      const userName = document.getElementById('name').value;
      setName(userName); 
  };

  return (
      <div>
          <input 
              type="text" 
              id = "name"
              placeholder="Введіть ваше ім'я" 
          />
          <button onClick={onButtonClick}>Зберегти</button>
          <UserName name={name} /> 
      </div>
  );
}

export default App;