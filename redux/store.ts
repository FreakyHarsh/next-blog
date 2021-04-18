
import { createStore, AnyAction, Store } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import diff from 'redux-deep-diff';

export interface State {
  count: number;
}

// create your reducer
const reducer = (state: State = { count: 0 }, action: AnyAction) => {
  console.log(action)
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith('X'); // or any other criteria
      // return {
      //   ...state,
      //   ...action.payload,
      //   page: wasBumpedOnClient ? state.page : action.payload.page, // keep existing state or use hydrated
      // };
      return { ...state, ...action.payload };
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });