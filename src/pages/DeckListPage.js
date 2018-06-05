import React, { Component } from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import api from "../api"
import DeckListComponent from "../components/DeckListComponent"
import { fetchDecksSuccess } from "../redux/ducks/deck"

class DeckListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  fetchDecks() {
    api.getDecks().then(response => {
      this.props.fetchDecksSuccess(response.data)
    })
  }

  render() {
    // same as saying const deck = this.props.deck
    const { decks } = this.props

    return (
      <div>
        <h1>This is the DeckListPage!</h1>
        <button onClick={() => this.fetchDecks()}>Click me!</button>
        <DeckListComponent decks={decks} />
      </div>
    )
  }
}

DeckListPage.propTypes = {
  // A function that handles a successful API call to fetch decks
  fetchDecksSuccess: PropTypes.func.isRequired,

  // A list of decks retrieved from the API
  decks: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  const { decks } = state.deck

  return {
    decks,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchDecksSuccess,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckListPage)
