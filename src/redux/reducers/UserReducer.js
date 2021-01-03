import {
  ON_UPDATE_CART,
  ON_UPDATE_WISHLIST,
  ON_REMOVE_WISHLIST,
} from '../actions/types';

const initialState = {
  user: {},
  Cart: [],
  WishList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_UPDATE_CART: {
      const existingItem = state.Cart.filter(
        (item) => item.id === action.payload.id,
      );

      if (existingItem.length > 0) {
        let updatedCart = state.Cart.map((item) => {
          if (item.id === action.payload.id) {
            item.unit = action.payload.unit;
          }
          return item;
        });

        return {
          ...state,
          Cart: updatedCart.filter((item) => item.unit > 0),
        };
      } else {
        return {
          ...state,
          Cart: [...state.Cart, action.payload],
        };
      }
    }

    case ON_UPDATE_WISHLIST: {
      if (state.WishList.some((item) => item.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          WishList: [...state.WishList, action.payload],
        };
      }
    }

    case ON_REMOVE_WISHLIST: {
      return {
        ...state,
        WishList: state.WishList.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    }

    default:
      return state;
  }
};
