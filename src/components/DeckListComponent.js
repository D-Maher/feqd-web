import React, { Component } from "react"
import PropTypes from "prop-types"

import DeckComponent from "./DeckComponent"

class DeskListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { decks } = this.props

    return (
      <div>
        {
          decks.map(deck => {
            return (
              <DeckComponent key={deck.id} deck={deck} />
            )
          })
        }
      </div>
    )
  }
}

DeskListComponent.propTypes = {
  // A list of decks to display
  decks: PropTypes.array.isRequired,
}

export default DeskListComponent
