
// Actions for incrementing and decrementing the count

export const INCREMENT = "increment";
export const DECREMENT = "decrement";

// Action creators for incrementing and decrementing
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
