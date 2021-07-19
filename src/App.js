import { Tab } from 'bootstrap'
import React, { Component } from 'react'
import JumbotronComp from './components/JumbotronComp'
import Navbarcomponent from './components/Navbarcomponent'
import TableCompnt from './components/TableCompnt'

export default class App extends Component {
  state = {
    title : "Oppa Medhok",
    users: [
      {
        id: 1,
        nama: "oppa",
        alamat: "Ambon",
        umur: 24,
        nohp:"089898989898",
      },
      {
        id: 2,
        nama: "comel",
        alamat: "penang",
        umur: 22,
        nohp:"089898989898",
      },
    ]
  }

  render() {
    return (
      <div>
        <Navbarcomponent/>
        <JumbotronComp title={this.state.title}/>
        <TableCompnt  users={this.state.users}/>
      </div>
    )
  }
}
