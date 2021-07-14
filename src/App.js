import React, { Component } from 'react'
import JumbotronComp from './components/JumbotronComp'
import Navbarcomponent from './components/Navbarcomponent'

export default class App extends Component {
  state = {
    title : "Oppa Medhok"
  }

  render() {
    return (
      <div>
        <Navbarcomponent/>
        <JumbotronComp title={this.state.title}/>
      </div>
    )
  }
}
