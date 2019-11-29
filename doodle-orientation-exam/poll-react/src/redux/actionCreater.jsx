import { actionType } from './reducer';

export const setModal = (val) => {
  return {
    type: actionType.SET_MODAL,
    data: { val },
  };
};

export const setResult = (val) => {
  return {
    type: actionType.SET_RESULT,
    data: { val },
  };
};
