const initState = {
  counter: 0,
  tags: [],
};

const SET = 'SET';
const RESET = 'RESET';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const ADD_TAG = 'ADD_TAG';
const REMOVE_TAG = 'REMOVE_TAG';
const REMOVE_TAGS = 'REMOVE_TAGS';


const reducer = (state = initState, action) => {
  let amount = 1;
  switch (action.type) {
    case SET:
      return { ...state, counter: action.amount };
    case RESET:
      return { ...state, counter: 0 };
    case INCREASE:
      if (action.amount) {
        amount = action.amount;
      }
      return { ...state, counter: state.counter + amount };
    case DECREASE:
      if (action.amount) {
        amount = action.amount;
      }
      return { ...state, counter: state.counter - amount };
    case ADD_TAG:
      if (!state.tags.find((i) => i === action.tag)) {
        return { ...state, tags: [...state.tags, action.tag] };
      }
      return state;
    case REMOVE_TAG:
      return { ...state, tags: state.tags.filter((i) => i !== action.tag) };
    case REMOVE_TAGS:
      return { ...state, tags: [] };
    default:
      return state;
  }
};

module.exports = reducer;
