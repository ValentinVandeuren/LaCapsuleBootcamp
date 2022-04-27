import React , {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';

function CounterButton(props) {
  return (
    <p style={{display: "flex", flexDirection: "column"}}>
      <button className="btn" style={{marginBottom: "5px"}} onClick={ props.onIncreaseClick }>Increase</button>
      <button className="btn" style={{marginBottom: "5px"}} onClick={ props.onResetClick }>Reset</button>
      <button className="btn" style={{marginBottom: "5px"}} onClick={ props.onDecreaseClick }>Decrease</button>
    </p>
  )

}


function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() { 
        dispatch( {type: 'increase'} ) 
    },
    onResetClick: function() { 
        dispatch( {type: 'reset'} ) 
    },
    onDecreaseClick: function() { 
        dispatch( {type: 'decrease'} ) 
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(CounterButton);