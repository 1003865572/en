import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Table } from 'react-bootstrap'

class Disks extends Component {
  constructor(props) {
    super(props)
    this.state={
      aa: 123,
      firstName: '',
      lastName: ''
    }
    this.getDisks = this.getDisks.bind(this)
    this.saveDisk = this.saveDisk.bind(this)
    this.inputChange = this.inputChange.bind(this)
  }

  getDisks() {
    const { getDisks } = this.props
    getDisks()
  }

  saveDisk() {
    const { firstName, lastName } = this.state
    const { saveDisk } = this.props
    saveDisk({
      firstName, lastName
    })
  }

  inputChange(e, key) {
    let o = {}
    o[key] = e.target.value
    this.setState(o)
  }

  render() {
    const { disks } = this.props
    const { aa, firstName, lastName } = this.state
    return (
      <div>

        <Table striped bordered condensed hover  >
          <thead>
            <tr>
              <th>{aa}</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={ e => this.inputChange(e, 'firstName') }
                  placeholder="输入..."
                />
              </td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={ e => this.inputChange(e, 'lastName') }
                  placeholder="输入..."
                />
              </td>
              <td>
                <button type="button" onClick={() => this.saveDisk()} >添加</button>&emsp;
                <button type="button" onClick={() => this.getDisks()} > 查询 </button>
              </td>
            </tr>
            {
              disks.ids.map((item, i) => {
                return (
                  <tr key={i} >
                    <td>{i+1}</td>
                    <td>{disks.entities[item].firstName}</td>
                    <td>{disks.entities[item].lastName}</td>
                    <td>
                      <button type="button" >删除</button>&emsp;
                      <button type="button" >修改</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Disks
