import React, { Component } from 'react';
import Message from './Message';
import Form from './Form';
import 'typeface-roboto';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      prevName: '',
      count: 0,
      text: 'Hello World'
    }
  }
  updateName = name => {
    // e.preventDefault();
    this.setState({ name });
  }
  updateCount = e => {
    this.setState({
      count: this.state.count + 1,
      prevName: this.state.name,
      name: ''
    });
  }
  render() {
    return (
      <div className='main'>
        <Message details={this.state} />
        <Form updateName={this.updateName} updateCount={this.updateCount} />
      </div>
    )
  }
}

export default App
