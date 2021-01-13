import {
  ON_UPDATE_CART,
  ON_UPDATE_WISHLIST,
  ON_REMOVE_WISHLIST,
  ON_ADD_ADDRESS,
  ON_REMOVE_ADDRESS,
  ON_EDIT_ADDRESS,
  ON_CLEAR_CART,
  ON_PLACE_ORDER,
  ON_LOGIN,
  ON_SIGNOUT,
} from '../actions/types';
import faker from 'faker';
import moment from 'moment';

const initialState = {
  signedIn: false,
  User: {
    userId: '2837409823',
    name: 'Kaung Htet Hein',
    email: 'kaungkaung116.kk@gmail.com',
    phoneNumber: '09888190300',
  },
  Order: [
    {
      orderNo: Math.floor(Math.random() * 10000000),
      status: 'Processing',
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      itemCount: 3,
    },
    {
      orderNo: Math.floor(Math.random() * 10000000),
      status: 'Processing',
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      itemCount: 3,
    },
  ],
  Cart: [],
  WishList: [],
  Address: [
    {
      id: 1,
      addressType: 'Home',
      streetAddress: faker.address.streetAddress(),
      streetAddress2: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  ],
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
    case ON_ADD_ADDRESS: {
      return {
        state,
        Address: [...state.Address, action.payload],
      };
    }
    case ON_REMOVE_ADDRESS: {
      return {
        state,
        Address: state.Address.filter((item) => item.id !== action.payload.id),
      };
    }

    case ON_EDIT_ADDRESS: {
      const index = state.Address.findIndex(
        (item) => item.id === action.payload.id,
      );
      console.log(index);
      const newArray = [...state.Address];
      newArray[index].addressType = action.payload.addressType;
      newArray[index].streetAddress = action.payload.streetAddress;
      newArray[index].streetAddress2 = action.payload.streetAddress2;
      newArray[index].city = action.payload.city;
      newArray[index].state = action.payload.state;
      newArray[index].postalCode = action.payload.postalCode;
      newArray[index].country = action.payload.country;
      return {
        ...state,
        Address: newArray,
      };
    }

    case ON_CLEAR_CART: {
      return {
        ...state,
        Cart: [],
      };
    }

    case ON_PLACE_ORDER: {
      return {
        ...state,
        Order: [...state.Order, action.payload],
      };
    }
    case ON_LOGIN: {
      return {
        ...state,
        signedIn: true,
      };
    }
    case ON_SIGNOUT: {
      return {
        ...state,
        signedIn: false,
      };
    }

    default:
      return state;
  }
};
