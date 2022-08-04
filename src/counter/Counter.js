import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  increment2,
  decrement2
} from './counterSlice';
import './Counter.css';

export function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="container">
        <div className="box">
          <h3>App Counter</h3>
          <h4>Total: {counter.count + counter.count2}</h4>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h3>My Counter</h3>
          <h4>Total: {counter.count}</h4>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())} disabled={counter.count === 0}>-</button>
        </div>

        <div className="box">
          <h3>My Counter</h3>
          <h4>Total: {counter.count2}</h4>
          <button onClick={() => dispatch(increment2())}>+</button>
          <button onClick={() => dispatch(decrement2())} disabled={counter.count2 === 0}>-</button>
        </div>
      </div>
    </div>
  );
}
