import React, { Component } from 'react'

class DeckComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  
  render() {
    const { deck } = this.props

    return (
      <div>
        <h1>{deck.title}</h1>
        <p>{deck.description}</p>
      </div>
    )
  }
}

export default DeckComponent
