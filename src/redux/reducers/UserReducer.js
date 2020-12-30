import {ON_UPDATE_CART} from '../actions/types';

const initialState = {
  user: {},
  Cart: [],
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

    default:
      return state;
  }
};

// const existingFoods = state.Cart.filter(
//   (item) => item._id === action.payload._id,
// );

// if (existingFoods.length > 0) {
//   let upadtedCart = state.Cart.map((food) => {
//     if (food._id === action.payload._id) {
//       food.unit = action.payload.unit;
//     }
//     return food;
//   });

//   return {
//     ...state,
//     Cart: upadtedCart.filter((item) => item.unit > 0),
//   };
// } else {
//   return {
//     ...state,
//     Cart: [...state.Cart, action.payload],
//   };
// }
