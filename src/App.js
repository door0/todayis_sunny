import React from 'react';
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

  return (
    <div className="App">
      <button onClick={getServerData}>btn</button>
    </div>
  );
}

export default App;
