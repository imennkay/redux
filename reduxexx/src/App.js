import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions/CounterAction";


function App() {
  const counter = useSelector(state => state.CounterReducer)
  const login = useSelector(state => state.LoggedReducer)

  const changeLogin = !login;

  const dispatch = useDispatch();
  return (
    <div className="App">

  <div>{counter}</div>
  <button onClick={()=>dispatch(increment(100))}>add</button>
  <button onClick={()=>dispatch(decrement(20))}>remove</button>
  <div>{login}</div>
      
    </div>
  );
}

export default App;
