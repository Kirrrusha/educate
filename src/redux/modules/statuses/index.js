import axios from 'axios';
import {API_HTTP} from '../../../configs/environment';

export const ActionTypesStatuses = {
  FETCH_STATUSES_REQUEST: 'statuses/FETCH_STATUSES_REQUEST',
  FETCH_STATUSES_SUCCESS: 'statuses/FETCH_STATUSES_SUCCESS',
  FETCH_STATUSES_FAILURE: 'statuses/FETCH_STATUSES_FAILURE'
};

export const initialStatusesState = {
  list: []
};

export default function reducer(
  state = initialStatusesState,
  action
) {

  switch (action.type) {

    case ActionTypesStatuses.FETCH_STATUSES_SUCCESS:
      return {
        ...state,
        list: action.payload
      };

    case ActionTypesStatuses.FETCH_STATUSES_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

// Action Creators
export const fetchStatuses = () => {
  return dispatch => {
    dispatch({
      type: ActionTypesStatuses.FETCH_STATUSES_REQUEST
    });

    axios.get(`${API_HTTP}/statuses`)
      .then(res => {
        dispatch({
          type: ActionTypesStatuses.FETCH_STATUSES_SUCCESS,
          payload: res.data
        });
      })
      .catch(res => {
        dispatch({
          type: ActionTypesStatuses.FETCH_STATUSES_FAILURE,
          error: {
            errorMsg: res.data.message || 'Сервер временно недоступен'
          }
        });
      });
  };
};
