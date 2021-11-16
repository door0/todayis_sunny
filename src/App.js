import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


const getServerData = () => {
  fetch('http://localhost:4000/api', {
    method:'GET',
    headers:{'Content-Type' : 'application/json'}
  })
  .then(res => {
    console.log(res);
    console.log(typeof(res));
    return res.json();
  })
  .then(res => console.log(res))
}


function App() {

  useEffect(() => {
    axios.get('/api/user')
    .then(res => console.log(res))
    .catch()
  })

  return (
    <div className="App">
      <button onClick={getServerData}>btn</button>
    </div>
  );
}

export default App;
