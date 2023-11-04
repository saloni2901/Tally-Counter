import React, { useState } from 'react';
import { FaTimes, FaUndo} from 'react-icons/fa';


function TallyCounter({ counter, counters, setCounters }) {
  const increment = () => {
    const updatedCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, count: c.count + 1 };
      }
      return c;
    });
    setCounters(updatedCounters);
  };

  const decrement = () => {
    const updatedCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, count: c.count - 1 };
      }
      return c;
    });
    setCounters(updatedCounters);
  };

  const reset = () => {
    const updatedCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, count: 0 };
      }
      return c;
    });
    setCounters(updatedCounters);
  };

  const setStartValue = () => {
    const startValue = parseInt(prompt('Enter the start value:'), 10);
    if (!isNaN(startValue)) {
      const updatedCounters = counters.map((c) => {
        if (c.id === counter.id) {
          return { ...c, count: startValue };
        }
        return c;
      });
      setCounters(updatedCounters);
    }
  };

  const changeName = () => {
    const newName = prompt('Enter a new name:');
    if (newName) {
      const updatedCounters = counters.map((c) => {
        if (c.id === counter.id) {
          return { ...c, name: newName };
        }
        return c;
      });
      setCounters(updatedCounters);
    }
  };

  const closeCounter = () => {
    const updatedCounters = counters.filter((c) => c.id !== counter.id);
    setCounters(updatedCounters);
  };

  const [textareaValue, setTextareaValue] = useState('');
  
  return (
    
    <div className="tally-counter">
       <div className="counter-header">
        <h2>{counter.name}</h2>
        <button onClick={closeCounter} className="close-button">
          <FaTimes />
        </button>
      </div>
      <div>
      <textarea
        cols="15"
        value={`${counter.count}\n${textareaValue}`} 
        onChange={(e) => setTextareaValue(e.target.value)} 
      ></textarea>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div className="reset-button-container">
        <button onClick={reset} className="reset-button">
          RESET COUNTER
          <FaUndo /> 
        </button>
      </div>
      <div>
      <button onClick={setStartValue} className="set-start-value-button">
        START VALUE
      </button>
      </div>
      <div>
      <button onClick={changeName}>COUNTER NAME</button>
      </div>
    </div>
  );
}

export default TallyCounter;
