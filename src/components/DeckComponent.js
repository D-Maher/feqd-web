class DeckComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default DeckComponent;
