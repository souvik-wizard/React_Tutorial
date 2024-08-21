import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase Btn
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease Btn
      </button>
    </div>
  );
}

export default App;
