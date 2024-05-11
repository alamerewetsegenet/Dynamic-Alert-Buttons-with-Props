// Toolbar.js
import React from 'react';
import AlertButton from './AlertButton';

function Toolbar({ buttons }) {
  return (
    <div className="toolbar">
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;
