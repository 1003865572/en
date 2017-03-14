import { connect } from 'react-redux'
import Disks from '../components/Disks'
import * as Actions from '../actions/diskAction'

const mapStateToProps = state => ({
  disks: state.server.disk
})

const mapDispatchProps = dispatch => ({
  getDisks: () => {
    dispatch(Actions.getDisks())
  },
  saveDisk: (data) => {
    dispatch(Actions.saveDisk(data))
    // new Promise((resolve, reject) => {
    //   return dispatch(Actions.saveDisk(data, resolve, reject))
    // })
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Disks)
