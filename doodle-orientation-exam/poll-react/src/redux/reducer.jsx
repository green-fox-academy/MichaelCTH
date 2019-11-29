const initState = {
  modal: false,
  showResult: false,
  result: null,
};

export const actionType = {
  SET_MODAL: 'SET_MODAL',
  SET_RESULT: 'SET_RESULT',
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_MODAL:
      return { ...state, modal: action.data.val };
    case actionType.SET_RESULT:
      return { ...state, result: action.data.val, showResult: true };
    default:
      return state;
  }
};
