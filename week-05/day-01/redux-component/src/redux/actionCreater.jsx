import {
 SET, RESET, INCREASE, DECREASE, ADD_TAG, REMOVE_TAG, REMOVE_TAGS 
} from './reducer';

export function setCounter(val) {
  return {
    type: SET,
    amount: val,
  };
}

export function resetCounter() {
  return {
    type: RESET,
  };
}

export function increaseCounter() {
  return {
    type: INCREASE,
  };
}

export function increaseCounterByN(val) {
  return {
    type: INCREASE,
    amount: val,
  };
}

export function decreaseCounter() {
  return {
    type: DECREASE,
  };
}

export function decreaseCounterByN(val) {
  return {
    type: DECREASE,
    amount: val,
  };
}

export function addTag(tag) {
  return {
    type: ADD_TAG,
    tag,
  };
}

export function removeTag(tag) {
  return {
    type: REMOVE_TAG,
    tag,
  };
}

export function removeTags() {
  return {
    type: REMOVE_TAGS,
  };
}
