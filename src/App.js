import './App.css';
import { useStateValue } from './StateProvider';

function App() {
  const [{ count }, dispatch] = useStateValue();

  return (
    <div className="App">
      <div style={{
        width: '100vw',
        height: '100vh',
        fontSize: '30px',
        gap: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <button style={{ padding: '2rem' }}
          onClick={() => dispatch({ type: 'REMOVE_value', item: 1 })}>-</button>
        <p>
          {count} times
        </p>
        <button style={{ padding: '2rem' }}
          onClick={() => dispatch({ type: 'ADD_value', item: 1 })}>+</button>
      </div>
    </div>
  );
}

export default App;
