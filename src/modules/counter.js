import { getListApi } from '../Apiutils';

export const GET_LIST_REQUEST = 'counter/get_list_request'
export const GET_LIST_RESULT = 'counter/get_list_result'
export const GET_LIST_ERROR = 'counter/get_list_error'

export const getList = () => {
  return dispatch => {
    dispatch ({
      type: GET_LIST_REQUEST
    })
    return getListApi()
    .then(resp => dispatch(getListSuccess(resp)))
    .catch(error => dispatch(getListFail(error)))
  }
}

export const getListSuccess = (resp) => {
  return dispatch => {
    dispatch ({
      type: GET_LIST_RESULT,
      payload: resp.data
    })
  }
}

export const getListFail = (error) => {
  return dispatch => {
    dispatch ({
      type: GET_LIST_RESULT,

    })
  }
}

const Actions = {
  getList
}

const ACTION_HANDLERS = {
  [GET_LIST_REQUEST] : (state,action) => {
    return {
      ...state,
      carList: {}
    }
  },
  [GET_LIST_RESULT] : (state,action) => {
    return {
      ...state,
      carList: action.payload
    }
  },
  [GET_LIST_ERROR] : (state,action) => {
    return {
      ...state,
      error: action.payload
    }
  },
}

const initialState = {
  carList: []
};


export default function counter(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
