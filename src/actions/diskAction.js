import * as ActionTypes from '../actionTypes/diskTypes'

export const getDisks = () => ({
  type: ActionTypes.disk.DISK_GET_REQUESTED
})

export const saveDisk = (data, resolve, reject) => ({
  type: ActionTypes.disk.DISK_SAVE_REQUESTED,
  data,
  resolve,
  reject
})
