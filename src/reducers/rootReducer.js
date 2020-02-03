const initState = {
  cart: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_COURSE") {
    return {
      ...state,
      cart: [...state.cart, action.course]
    };
  } else if (action.type === "REMOVE_COURSE") {
    return {
      ...state,
      cart: state.cart.filter(course => course !== action.course)
    };
  }
  return state;
};

export default rootReducer;
