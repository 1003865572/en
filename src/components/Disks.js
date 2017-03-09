import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Table } from 'react-bootstrap'

class Disks extends Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }
  click() {
    const { getDisks } = this.props
    getDisks()
  }

  render() {
    const { disks } = this.props
    return (
      <div>

        <Table striped bordered condensed hover  >
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><input type="text" placeholder="输入..." /></td>
              <td><input type="text" placeholder="输入..." /></td>
              <td>
                <button type="button" >添加</button>
                <button type="button" onClick={() => this.click()} > 查询 </button>
              </td>
            </tr>
            {
              disks.ids.map((item, i) => {
                return (
                  <tr key={i} >
                    <td>{i+1}</td>
                    <td>{disks.entities[item].id}</td>
                    <td>{disks.entities[item].entity}</td>
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
