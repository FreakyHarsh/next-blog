import { Dispatch } from "redux";

export const testAsync = () => async (dispatch: Dispatch, getState: any) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'INCREMENT' })
      return data;
    })
  await new Promise(async (resolve, reject) => {
    console.log('THIS IS SET TIME OUT BROOO');
    await setTimeout((data) => {
      console.log(data)
      resolve(dispatch({ type: 'INCREMENT' }));
    }, 5000);
  });
  console.log(res);
  return res
};
