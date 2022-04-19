import { useState } from "react";
import "./App.css";

function App() {
  let [balle, setBalle] = useState(null);

  let balle1 = [];
  let balle2 = [];
  let balle3 = [];
  let balle4 = [];
  let balle5 = [];
  let balle6 = [];
  let balle7 = [];
  let balle8 = [];
  
  let loseMessage = [];
  let handelItemClick = (caseNumber) => {
    
    if(balle1.length >= 1 || balle2.length >= 1 || balle7.length >= 1 || balle8.length >= 1){
    }else {
      if(caseNumber === 1 || caseNumber === 2){
        setBalle(balle = Math.floor(Math.random() * (8 - 5 +1)) + 5);
      }else if(caseNumber === 7 || caseNumber === 8){
        setBalle(balle = Math.floor(Math.random() * 4) + 1);
      }else if(caseNumber === 3 && balle3.length >= 1){
        setBalle(balle = Math.floor(Math.random() * (8 - 5 +1)) + 5);
      }else if(caseNumber === 4 && balle4.length >= 1){
        setBalle(balle = Math.floor(Math.random() * (8 - 5 +1)) + 5);
      }else if(caseNumber === 5 && balle5.length >= 1){
        setBalle(balle = Math.floor(Math.random() * 4) + 1);
      }else if(caseNumber === 6 && balle6.length >= 1){
        setBalle(balle = Math.floor(Math.random() * 4) + 1);
      }
    }
  }
  

  switch (balle) {
    case 1:
      balle1.push(<div className="balle"></div>);
      break;
    case 2:
      balle2.push(<div className="balle"></div>);
      break;
    case 3:
      balle3.push(<div className="balle"></div>);
      break;
    case 4:
      balle4.push(<div className="balle"></div>);
      break;
    case 5:
      balle5.push(<div className="balle"></div>);
      break;
    case 6:
      balle6.push(<div className="balle"></div>);
      break;
    case 7:
      balle7.push(<div className="balle"></div>);
      break;
    case 8:
      balle8.push(<div className="balle"></div>);
      break;
    default:
  };

  let handleRestartClick = () => {
    window.location.reload(false);
  }

  if(balle1.length >= 1 || balle2.length >= 1 || balle7.length >= 1 || balle8.length >= 1){
    loseMessage.push( <div className="loseMessage">Perdu!!!<button onClick={ () => handleRestartClick() }>Restart</button></div> )
  }

  return (
    <div className="App">
      {loseMessage}
      <div class="grid-container">
        <div class="grid-item-withe" onClick={ () => handelItemClick(1) }>1 {balle1}</div>
        <div class="grid-item-green" onClick={ () => handelItemClick(3) }>3 {balle3}</div>
        <div class="grid-item-green" onClick={ () => handelItemClick(5) }>5 {balle5}</div>
        <div class="grid-item-withe" onClick={ () => handelItemClick(7) }>7 {balle7}</div>
        <div class="grid-item-withe" onClick={ () => handelItemClick(2) }>2 {balle2}</div>
        <div class="grid-item-green" onClick={ () => handelItemClick(4) }>4 {balle4}</div>
        <div class="grid-item-green" onClick={ () => handelItemClick(6) }>6 {balle6}</div>
        <div class="grid-item-withe" onClick={ () => handelItemClick(8) }>8 {balle8}</div>
      </div>
    </div>
  );
}

export default App;