// App.js
import React from 'react';
import Toolbar from './Toolbar';

function App() {
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },    
    { message: 'Serching!', children: 'Serch Document' },


    // Add more button objects as needed
  ];

  return (
    <div className="App">
      <Toolbar buttons={buttons} />
    </div>
  );
}

export default App;
