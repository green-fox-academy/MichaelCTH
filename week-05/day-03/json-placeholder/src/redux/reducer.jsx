const initial = {
  dataList: [],
  message: '',
};

export const DATA_LOADING = 'DATA_LOADING';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_ERROR = 'DATA_LOADING_ERROR';

export default function reducer(state = initial, action) {
  switch (action.type) {
    case DATA_LOADING:
      return { ...state, message: 'Loading data now...' };
    case DATA_LOADING_SUCCESS:
      return { dataList: action.payload, message: 'Success' };
    case DATA_LOADING_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
