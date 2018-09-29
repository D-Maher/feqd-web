import React, { Component } from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"
import store from "./redux/store"
import DeckListPage from "./pages/DeckListPage"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={DeckListPage} />
            {/* <Route path="/decks" component={DeckListPage} /> */}
            {/* <Route path="/game" component={GamePage} /> */}
            {/* <Route path="/complete" component={GameCompletionPage} /> */}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
