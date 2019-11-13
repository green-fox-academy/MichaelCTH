import { DATA_LOADING, DATA_LOADING_SUCCESS, DATA_LOADING_ERROR } from './reducer';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const dataLoading = () => ({
  type: DATA_LOADING,
});
export const dataLoadingSuccess = (data) => ({
  type: DATA_LOADING_SUCCESS,
  payload: data,
});
export const dataLoadingError = (errorMessage) => ({
  type: DATA_LOADING_ERROR,
  payload: errorMessage,
});

export const loadDataFromAPI = () => (dispatch) => {
  dispatch(dataLoading);
  fetch(API_URL)
    .then((response) => response.json())
    .then((response) => dispatch(dataLoadingSuccess(response)))
    .catch((error) => dispatch(dataLoadingError(error.message)));
};
