
import { createStore, AnyAction, Store, applyMiddleware } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import diff from 'redux-deep-diff';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export interface State {
  count: number;
}
// create your reducer
const reducer = (state: State = { count: 0 }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
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
const makeStore = (context: Context) => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });