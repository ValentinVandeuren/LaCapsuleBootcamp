import './App.css';
import React, { useEffect } from 'react';

function App() {
  // let contactsName = [];

  
  useEffect(() => {
    async function contacts() {
      var rawResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      var response = await rawResponse.json();
      // for(let i=0; i<response.length; i++){
      //   contactsName.push(<div>{response[i].name}</div>)
      // }
      console.log(response[0].name);
      // console.log(contactsName);
    }
    contacts();
  })

  return (
    <div className="App">
      {/* {contactsName} */}
    </div>
  );
}

export default App;
