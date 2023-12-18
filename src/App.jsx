import { useState } from 'react';
import './App.css'; // Your CSS file for styling

function App() {
  const [queue, setQueue] = useState([]);

  const enqueueItem = () => {
    const newItem = prompt('Enter item to enqueue:');
    if (newItem !== null) {
      setQueue([...queue, newItem]);
    }
  };

  const dequeueItem = () => {
    if (queue.length === 0) {
      alert('Queue is empty!');
      return;
    }
    const dequeuedItem = queue.slice(1);
    setQueue(dequeuedItem);
  };

  return (
    <div className="App">
      <h1>Queue Data Structure</h1>
      <div className="buttons">
        <button onClick={enqueueItem}>Enqueue Item</button>
        <button onClick={dequeueItem}>Dequeue Item</button>
      </div>
      <div className="queue">
        <h3>Queue:</h3>
        <ul>
          {queue.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
