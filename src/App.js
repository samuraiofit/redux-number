import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Reset from './Reset'

function App() {

  const dispatch = useDispatch()

  const counter = useSelector(state => state)

  const plus = () => {
    dispatch({
      type: 'plus'
    })
  }

  const minus = () => {
    dispatch({
      type: 'minus'
    })
  }

  return (
    <div className="App">
      {counter}


      <>
      <button onClick={plus}>
        Plus
      </button>
      <button onClick={minus}>
        Minus
      </button>
      <Reset/>
      </>
    </div>
  );
}

export default App;
