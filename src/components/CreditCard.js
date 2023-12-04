import React from 'react';
import '../styles/CreditCard.css';

const CreditCard = ({ cardNumber }) => {
  // Format the card number for display
  const formattedCardNumber = cardNumber
    .replace(/(\d{4})/g, '$1 ')
    .trim()
    .split(' ')
    .join(' ');

  return (
    <div className="credit-card" style={{margin: '15px'}}>
      <div className="card-type">Visa</div>
      <div className="card-number">{formattedCardNumber}</div>
      <div className="card-info">
        <div className="card-holder">
          <label>Card Holder</label>
          <div>John Doe</div>
        </div>
        <div className="expiration-date">
          <label>Expires</label>
          <div>12/25</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
