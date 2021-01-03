import {ON_UPDATE_CART, ON_UPDATE_WISHLIST, ON_REMOVE_WISHLIST} from './types';

export function onUpdateCart(item) {
  return async (dispatch) => {
    dispatch({
      type: ON_UPDATE_CART,
      payload: item,
    });
  };
}
export function onUpdateWishList(item) {
  return async (dispatch) => {
    dispatch({
      type: ON_UPDATE_WISHLIST,
      payload: item,
    });
  };
}
export function onRemoveWishList(item) {
  return async (dispatch) => {
    dispatch({
      type: ON_REMOVE_WISHLIST,
      payload: item,
    });
  };
}
