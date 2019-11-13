import {
  HIS_CHAT_MESSAGE_LOAD_STARTED,
  HIS_CHAT_MESSAGE_LOAD_SUCCESS,
  HIS_CHAT_MESSAGE_LOAD_FAILED,
  UPDATE_INPUT_MESSAGE,
  INPUT_MESSAGE_UPLOAD_STARTED,
  INPUT_MESSAGE_UPLOAD_SUCCESS,
  INPUT_MESSAGE_UPLOAD_FAILED,
} from './actionCreater';

const initial = {
  user: 'Michael',
  message: [],
  inputMessage: '',
  state: '',
  error: '',
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case HIS_CHAT_MESSAGE_LOAD_STARTED:
      return { ...state, state: 'loading...' };
    case HIS_CHAT_MESSAGE_LOAD_SUCCESS:
      return { ...state, message: action.payload, state: 'loaded' };
    case HIS_CHAT_MESSAGE_LOAD_FAILED:
      return { ...state, error: action.payload, state: 'loaded' };
    case UPDATE_INPUT_MESSAGE:
      return { ...state, inputMessage: action.payload };

    case INPUT_MESSAGE_UPLOAD_STARTED:
      return { ...state, state: action.payload };
    case INPUT_MESSAGE_UPLOAD_SUCCESS:
      return { ...state, state: action.payload, inputMessage: '' };
    case INPUT_MESSAGE_UPLOAD_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
