import {
  ON_UPDATE_CART,
  ON_UPDATE_WISHLIST,
  ON_REMOVE_WISHLIST,
  ON_ADD_ADDRESS,
  ON_REMOVE_ADDRESS,
  ON_EDIT_ADDRESS,
  ON_CLEAR_CART,
  ON_PLACE_ORDER,
} from './types';

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
export function onAddAddress(values) {
  return async (dispatch) => {
    dispatch({
      type: ON_ADD_ADDRESS,
      payload: values,
    });
  };
}
export function onRemoveAddress(values) {
  return async (dispatch) => {
    dispatch({
      type: ON_REMOVE_ADDRESS,
      payload: values,
    });
  };
}
export function onEditAddress(values) {
  return async (dispatch) => {
    dispatch({
      type: ON_EDIT_ADDRESS,
      payload: values,
    });
  };
}
export function onClearCart() {
  return async (dispatch) => {
    dispatch({
      type: ON_CLEAR_CART,
    });
  };
}
export function onPlaceOrder(values) {
  console.log(values);
  return async (dispatch) => {
    dispatch({
      type: ON_PLACE_ORDER,
      payload: values,
    });
  };
}
