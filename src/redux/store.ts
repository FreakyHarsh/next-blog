
import { createStore, AnyAction, Store, applyMiddleware, combineReducers } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export interface State {
  count: number;
}
export interface State1 {
  count1: number;
}
// create your reducer
const reducer1 = (state: State = { count: 0 }, action: AnyAction) => {
  console.log('Reducer1 ka action: ', action)
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
const reducer2 = (state: State1 = { count1: 0 }, action: AnyAction) => {
  console.log('Reducer2 ka action: ', action)
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'INCREMENT':
      return { ...state, count1: state.count1 + 10 };
    case 'DECREMENT':
      return { ...state, count1: state.count1 - 1 };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(combineReducers({
  reducer2,
  reducer1
}), composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore as any, { debug: true });