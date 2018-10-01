import React, { Component } from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import api from "../api"
import DeckListComponent from "../components/DeckListComponent"
import { getDecksSuccess } from "../redux/actions"

class DeckListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getDecks() {
    api.getDecks().then(response => {
      this.props.getDecksSuccess(response.data)
    })
  }

  render() {
    const { decks } = this.props

    return (
      <div>
        <h1>This is the DeckListPage!</h1>
        <button onClick={() => this.getDecks()}>Click me!</button>
        <DeckListComponent decks={decks} />
      </div>
    )
  }
}

DeckListPage.propTypes = {
  // A function that handles a successful API call to get decks
  getDecksSuccess: PropTypes.func.isRequired,

  // A list of decks retrieved from the API
  decks: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  const { decks } = state

  return {
    decks,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getDecksSuccess,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckListPage)
