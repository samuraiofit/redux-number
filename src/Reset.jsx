import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch()

  const reset = () => {
    dispatch({
        type: 'reset',
        amount: 5
    })
  }

  return (
    <button onClick={reset}>
        Reset
    </button>
  );
}

export default App;
