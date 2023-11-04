import React, { useState } from 'react';
import './App.css';
import TallyCounter from './components/TallyCounter';

function App() {
  const [counters, setCounters] = useState([{ id: 1, name: 'Tally Counter', count: 0 }]);

  const addCounter = () => {
    const newCounterId = Math.max(...counters.map((counter) => counter.id), 0) + 1;
    setCounters([...counters, { id: newCounterId, name: `Tally Counter ${newCounterId}`, count: 0 }]);
  };

  return (
    <div className="App">
      <button onClick={addCounter}>Add Counter</button>
      {counters.map((counter) => (
        <TallyCounter key={counter.id} counter={counter} counters={counters} setCounters={setCounters} />
      ))}
    </div>
  );
}

export default App;
