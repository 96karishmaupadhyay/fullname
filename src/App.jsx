import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fName.trim() === '' || lName.trim() === '') {
      setErrMsg('First and last both name are required');
    } else {
      setErrMsg('');
      alert(`Name:${fName +lName}`);
  
    }
  };

  return (
    <div className='main'>
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        placeholder="First Name"
        value={fName}
        onChange={(e) => setfName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={lName}
        onChange={(e) => setlName(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
    </form>
    </div>
  );
};

export default App;
