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
        alamat: "Riau",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 3,
        nama: "santo",
        alamat: "Bangka",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 4,
        nama: "toso",
        alamat: "Solo",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 5,
        nama: "daniel",
        alamat: "Kudus",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 6,
        nama: "oppa",
        alamat: "Ambon",
        umur: 24,
        nohp:"089898989898",
      },
      {
        id: 7,
        nama: "comel",
        alamat: "Riau",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 8,
        nama: "santo",
        alamat: "Bangka",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 9,
        nama: "toso",
        alamat: "Solo",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 10,
        nama: "daniel",
        alamat: "Kudus",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 11,
        nama: "oppa",
        alamat: "Ambon",
        umur: 24,
        nohp:"089898989898",
      },
      {
        id: 12,
        nama: "comel",
        alamat: "Riau",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 13,
        nama: "santo",
        alamat: "Bangka",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 14,
        nama: "toso",
        alamat: "Solo",
        umur: 22,
        nohp:"089898989898",
      },
      {
        id: 15,
        nama: "daniel",
        alamat: "Kudus",
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
