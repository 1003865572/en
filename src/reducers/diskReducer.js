import * as ActionTypes from '../actionTypes/diskTypes'

const initialState = {
  entities: {
    di_0: {
      'firstName': '11',
      'lastName': '22'
    },
    di_1: {
      'firstName': '33',
      'lastName': '44'
    }
  },
  ids: [
    'di_0',
    'di_1',
  ],
  startRequest: 'end',
  errorMessage: ''
}

const diskReduer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.disk.DISK_GET_REQUESTED:
      return {...state}
    case ActionTypes.disk.DISK_GET_REQUEST:
      state.startRequest = 'loading'
      return {...state}
    case ActionTypes.disk.DISK_GET_SUCCEEDED:
      const { result, entities } = action.result
      state.ids = result
      state.entities = entities.disk
      return {...state}
    default:
      return state
  }
}

export default diskReduer
