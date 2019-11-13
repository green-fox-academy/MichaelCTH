const MESSAGE_URL = 'https://stream-vanadium.glitch.me/messages';
const INPUT_URL = 'https://stream-vanadium.glitch.me/messages';

export const HIS_CHAT_MESSAGE_LOAD_STARTED = 'HIS_CHAT_MESSAGE_LOAD_STARTED';
export const HIS_CHAT_MESSAGE_LOAD_SUCCESS = 'HIS_CHAT_MESSAGE_LOAD_SUCCESS';
export const HIS_CHAT_MESSAGE_LOAD_FAILED = 'HIS_CHAT_MESSAGE_LOAD_FAILED';

export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';

export const INPUT_MESSAGE_UPLOAD_STARTED = 'INPUT_MESSAGE_UPLOAD_STARTED';
export const INPUT_MESSAGE_UPLOAD_SUCCESS = 'INPUT_MESSAGE_UPLOAD_SUCCESS';
export const INPUT_MESSAGE_UPLOAD_FAILED = 'INPUT_MESSAGE_UPLOAD_FAILED';

export const hisChatMessageLoadStarted = () => {
  return {
    type: HIS_CHAT_MESSAGE_LOAD_STARTED,
  };
};

export const hisChatMessageLoadSuccess = (data) => {
  return {
    type: HIS_CHAT_MESSAGE_LOAD_SUCCESS,
    payload: data,
  };
};

export const hisChatMessageLoadFailed = (errMessage) => {
  return {
    type: HIS_CHAT_MESSAGE_LOAD_FAILED,
    payload: errMessage,
  };
};

export const loadHisChatMessage = () => {
  return (dispatch) => {
    dispatch(hisChatMessageLoadStarted());
    fetch(MESSAGE_URL)
      .then((response) => response.json())
      .then((response) => dispatch(hisChatMessageLoadSuccess(response.messages)))
      .catch((error) => dispatch(hisChatMessageLoadFailed(error.message)));
  };
};

export const updateInputMessage = (message) => {
  return {
    type: UPDATE_INPUT_MESSAGE,
    payload: message,
  };
};

export const uploadInputMessageStart = () => {
  return {
    type: INPUT_MESSAGE_UPLOAD_STARTED,
    payload: 'upload started',
  };
};

export const uploadInputMessageSuccess = () => {
  return {
    type: INPUT_MESSAGE_UPLOAD_SUCCESS,
    payload: 'success',
  };
};

export const uploadInputMessageFailed = (errMessage) => {
  return {
    type: INPUT_MESSAGE_UPLOAD_FAILED,
    payload: errMessage,
  };
};

export const sendMessage = (user, text) => {
  return (dispatch) => {
    dispatch(uploadInputMessageStart());
    fetch(INPUT_URL, {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, text }),
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(uploadInputMessageSuccess());
          return response.json();
        } else {
          new Error(response.statusText);
        }
      })
      .then(() => dispatch(loadHisChatMessage()))
      .catch((error) => dispatch(uploadInputMessageFailed(error.message)));
  };
};
