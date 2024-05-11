// AlertButton.js
import React from 'react';
import './AlertButton.css';

function AlertButton({ children, message }) {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button className="alertButton" onClick={handleClick}>
      {children}
    </button>
  );
}



export default AlertButton;
