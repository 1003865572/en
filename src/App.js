import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style/App.scss';

// Action Creator
const increaseAction = { type: 'increase' }

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.bakClick = this.bakClick.bind(this)
    this.btnClick = this.btnClick.bind(this)
    this.conMenu = this.conMenu.bind(this)
  }
  bakClick(e) {
    console.info('背景')
    e.preventDefault()
    e.stopPropagation()
    return false;
  }
  btnClick(e) {
    console.info('按钮')
    e.preventDefault()
    e.stopPropagation()
    return false
  }
  conMenu(e) {
    console.info('右键')
    e.preventDefault()
    e.stopPropagation()
    return false
  }
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>test to React</h2>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
        </div>
        <div className="test"
          onClick={(e) => this.bakClick(e)}
          onContextMenu={(e) => this.conMenu(e)}
        >
          <button onClick={(e) => this.btnClick(e)}>点击</button>
          <button >a</button>
          <button >b</button>
          <button >c</button>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
