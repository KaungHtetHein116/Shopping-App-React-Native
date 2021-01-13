import {GET_DATA, GET_DATA_SUCCESS} from './types';

export const ApiCall = () => {
  return (dispatch) => {
    dispatch({type: GET_DATA});
    fetch('/api/shoppingdata')
      // fetch(`/api/shoppingdata/category/Electronic`)
      .then((res) => res.json())
      .then((json) => {
        console.log('getting shoppingdata ::', json);
        dispatch({type: GET_DATA_SUCCESS, payload: json});
      });

    //   else {
    //     fetch(`/api/shoppingdata/category/${type}`)
    //       .then((res) => res.json())
    //       .then((json) => {
    //         console.log('getting shoppingdata ::', json);
    //         // dispatch({type: GET_DATA_SUCCESS, payload: json});
    //       });
    //   }
    // };
  };
};
