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
export const fetchStatusesRequest = () => ({
  type: ActionTypesStatuses.FETCH_STATUSES_REQUEST
});

export const fetchStatusesSuccess = (payload) => ({
  type: ActionTypesStatuses.FETCH_STATUSES_SUCCESS,
  payload
});

export const fetchStatusesFailure = (error) => ({
  type: ActionTypesStatuses.FETCH_STATUSES_FAILURE,
  error
});
