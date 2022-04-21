import React, { useState } from 'react';


function App() {

  const [valueRight, setValueRight] = useState('')
  const [valueLeft, setValueLeft] = useState('')
  const [operator, setOperator] = useState(null)
  const [compute, setCompute] = useState(0)

  var handleClick = (value, type) => {
    if(type == "number") {
      if(operator == null) {
        setValueLeft(valueLeft+value)
      } else {
        setValueRight(valueRight+value)
      }
    } else if(type == 'operator') {
        setOperator(value)
    } else if(type == 'compute') {

      if(operator == "+") {
        if(compute !== 0){
          if(!valueLeft){
            setCompute(parseFloat(compute) + parseFloat(valueRight))
          }else{
            setCompute(parseFloat(valueLeft) + parseFloat(valueRight))
          }
        }else {
          if(!valueLeft){
            setCompute(parseFloat(compute) + parseFloat(valueRight))
          }else {
            setCompute(parseFloat(valueLeft) + parseFloat(valueRight))
          }
        }
      }

      if(operator == "-") {
        if(compute !== 0){
          setCompute(compute -valueRight)
        }else {
          setCompute(valueLeft - valueRight)
        }
      }

      if(operator == "*") {
        if(compute !== 0){
          setCompute(compute * valueRight)
        }else {
          setCompute(valueLeft * valueRight)
        }
      }

      if(operator == "/") {
        if(compute !== 0){
          setCompute(compute / valueRight)
        }else {
          setCompute(valueLeft / valueRight)
        }
      }


      setValueLeft('')
      setValueRight('')
      setOperator(null)


    }
  }
  let resetClick = () => {
    setCompute(0)
    setValueLeft('')
    setValueRight('')
    setOperator(null)
  }


  return (
    <div className="App">

      <Display compute={compute} valueRight={valueRight} valueLeft={valueLeft} operator={operator}/>

      <div style={{display: 'flex'}}>
        <Button value="" type="number" color="grey"/>
        <Button value="" type="number" color="grey"/>
        <Button value="" type="number" color="grey"/>
        <Button handleClick={resetClick} value="AC" type="operator" color="ac"/>
      </div>
      <div style={{display: 'flex'}}>
        <Button handleClick={handleClick} value="7" type="number" color="grey"/>
        <Button handleClick={handleClick} value="8" type="number" color="grey"/>
        <Button handleClick={handleClick} value="9" type="number" color="grey"/>
        <Button handleClick={handleClick} value="+" type="operator" color="orange"/>
      </div>
      <div style={{display: 'flex'}}>
        <Button handleClick={handleClick} value="4" type="number" color="grey"/>
        <Button handleClick={handleClick} value="5" type="number" color="grey"/>
        <Button handleClick={handleClick} value="6" type="number" color="grey"/>
        <Button handleClick={handleClick} value="-" type="operator" color="orange"/>
      </div>
      <div style={{display: 'flex'}}>
        <Button handleClick={handleClick} value="1" type="number" color="grey"/>
        <Button handleClick={handleClick} value="2" type="number" color="grey"/>
        <Button handleClick={handleClick} value="3" type="number" color="grey"/>
        <Button handleClick={handleClick} value="*" type="operator" color="orange"/>
      </div>
      <div style={{display: 'flex'}}>
        <Button handleClick={handleClick} value="0" type="number" color="grey"/>
        <Button handleClick={handleClick} value="." type="number" color="grey"/>
        <Button handleClick={handleClick} value="=" type="compute" color="orange"/>
        <Button handleClick={handleClick} value="/" type="operator" color="orange"/>
      </div>

    </div>
  );
}


function Display(props){
    return (
      <div style={{display: 'flex', padding: '20px', backgroundColor: '#858694', color: '#FFFFFF', fontSize: '45px'}}>
        <div style={{flex: '2', textAlign: 'center'}}>{props.valueLeft} {props.operator} {props.valueRight}</div>
        <div style={{flex: '1', textAlign: 'right'}}>{props.compute}</div>
      </div>
    );
}

function Button(props) {
  
  var handleClick = () => {
    props.handleClick(props.value, props.type);
  }

  var font;
  var background;
  if(props.color == 'grey') {
    background = '#e0e0e0';
    font = "#000000";
  } else if(props.color == 'ac'){
    background = '#35363A';
    font = "#FFF"
  } else {
    background = '#F39148';
    font = "#FFFFFF";
  }

  return (
    <div onClick={() => handleClick()} style={{flex: '1', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center', backgroundColor: background, color: font,
    fontSize: '20px', borderStyle: 'solid', borderColor: '#858693', borderWidth: '1px', cursor: 'pointer'}}>
      {props.value}
    </div>
  );

}




export default App;
