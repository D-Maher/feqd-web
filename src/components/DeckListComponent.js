import React, { Component } from "react"

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
              <DeckComponent deck={deck} />
            )
          })
        }
      </div>
    )
  }
}

export default DeskListComponent
