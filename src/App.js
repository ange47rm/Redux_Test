import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {
  // Get the "count" value within the initialState of the "counter" reducer (in store.js)
  const count = useSelector((state) => state.counter.count);
  // const { count } = useSelector((state) => state.counter) // Same, using destructuring
  
  // Required to access reducer's actions
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(47))}>Increment by 47</button>
    </div>
  );
}

export default App;
