import * as ActionTypes from '../actionTypes/diskTypes'

const initialState = {
  entities: {
    di_0: {
      'id': '11',
      'entity': '22'
    },
    di_1: {
      'id': '33',
      'entity': '44'
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
      console.info('开始请求')
      console.info(action)
      return {...state}
    case ActionTypes.disk.DISK_GET_SUCCEEDED:
      console.info('查询结果')
      console.info(action)
      let ids = action.result.result
      let entities = action.result.entities.disk

      ids.map((item, index) => {
        const id = `id_${item}`
        state.ids.push(id)
        state.entities[id] = entities[item]
      })

      return {...state}
    default:
      return state
  }
}

export default diskReduer
