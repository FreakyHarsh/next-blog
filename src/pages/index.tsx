import { useDispatch, useSelector } from "react-redux";
import { Store, AnyAction } from "redux";
import { testAsync } from "../redux/actions";
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

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  const store = context.store;
  await store.dispatch(testAsync() as any);
});
