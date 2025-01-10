

  // Reducer to handle increment and decrement actions

import { INCREMENT, DECREMENT } from "../Actions/SecondAction";

// Initial state of the count
const newCount = {
  count: 0
};

// Reducer to update the state based on actions
export const handleReducers = (state = newCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state; // Returning the existing state if no action matches
  }
};
