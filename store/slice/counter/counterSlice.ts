// counterReducer.js
const initialState = {
  value: 0
};

export default function counterReducer(state = initialState, action: { type: unknown }) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
