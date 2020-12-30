import {ON_UPDATE_CART} from './types';

export function onUpdateCart(item) {
  return async (dispatch) => {
    dispatch({
      type: ON_UPDATE_CART,
      payload: item,
    });
  };
}
