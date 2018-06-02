import React, { Component } from "react"
import PropTypes from "prop-types"

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

DeckComponent.propTypes = {
  // A single deck to choose
  deck: PropTypes.object.isRequired,
}

export default DeckComponent
