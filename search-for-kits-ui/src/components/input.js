import React, { useState } from 'react';

function Input() {
  const [input, setInput] = useState('');
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleSearchClick = () => {
    fetch('http://localhost:4000/get-kit-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ label_id: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter label ID:"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Submit</button>
    </div>
  );
}

export default Input;