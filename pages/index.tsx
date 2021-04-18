import { useDispatch, useSelector } from "react-redux";
import { State, wrapper } from "../redux/store";

export default function Home() {
  const { count } = useSelector<State, State>((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div>hello world {count}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}
