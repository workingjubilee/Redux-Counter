export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ODDCREMENT = 'ODDCREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = dispatch => {
  return dispatch = {
    type: INCREMENT,
    payload: 1
  };
};

export const decrement = dispatch => {
  return dispatch = {
    type: DECREMENT,
    payload: 1
  }
};

export const oddcrement = dispatch => {
  return dispatch = {
    type: ODDCREMENT,
    payload: 1
  }
};
