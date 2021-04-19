import { Dispatch } from "redux";

export const testAsync = () => async (dispatch: Dispatch, getState: any) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'INCREMENT' })
      return data;
    })
  console.log(res);
  return res
};
