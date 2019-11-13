const initState = {
  counter: 0,
  tags: [],
  message: '',
};

export const SET = 'SET';
export const RESET = 'RESET';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const REMOVE_TAGS = 'REMOVE_TAGS';
export const MESSAGE_DELAY_START = 'MESSAGE_DELAY_START';
export const MESSAGE_DELAY_END = 'MESSAGE_DELAY_END';

export default (state = initState, action) => {
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
    case MESSAGE_DELAY_START:
      return { ...state, message: 'delaying...' };
    case MESSAGE_DELAY_END:
      return { ...state, message: '' };
    default:
      return state;
  }
};
