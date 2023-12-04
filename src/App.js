import './App.css';
import CreditCard from './components/CreditCard';
import { useState } from 'react';

function App() {
  const [cardNumber, setCardNumber] = useState("1234567890123456");

  const handleChangeCardNumber = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCardNumber(value)
  }

  const validateCredCard = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/validate/${cardNumber}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if(result.isValid) alert('The credit card number is valid!');
        else alert('The credit card number is NOT valid!')
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <CreditCard
          cardNumber={cardNumber}
        />
        <label className='App-label'>Enter Credit Card Number:</label>
        <input
          type='text'
          maxLength={16}
          value={cardNumber}
          onChange={handleChangeCardNumber}
          style={{marginBottom: '10px'}}
        />
        <button onClick={validateCredCard}>Validate</button>
      </header>
    </div>
  );
}

export default App;
