import React, { useState } from 'react';

function Input({updateResponse}) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  const handleInputChange = (e) => {
    setInput(e.target.value);

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
        setSuggestions(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
        updateResponse(data[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <div className='input-container'>
      <input
        type="text"
        placeholder="Enter label ID:"
        value={input}
        list='suggestions'
        onChange={handleInputChange}
      />
      <datalist id='suggestions'>
        {suggestions.map((suggestion, index) => (
          <option 
            key={index}
            value={suggestion.label_id}
            onClick={() => setInput(suggestion.label_id)}
          />
        ))}
      </datalist>
      <button onClick={handleSearchClick}>Submit</button>
    </div>
  );
}

export default Input;