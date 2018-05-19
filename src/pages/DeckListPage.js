import React, { Component } from 'react';

import DeckListComponent from '../components/DeckListComponent'

class DeckListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  
  render() {
    return (
      <div>
        <DeckListComponent />
      </div>
    );
  }
}

export default DeckListPage;
