import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class Form extends Component {

  // ✅ ASSIGNMENT 2 INTERNAL STATE
  // state = {
  //   name: '',
  //   count: 0
  // };

  // updateName = e => {
  //   e.preventDefault();
  //   this.setState({ name: e.target.value });
  // }
  // updateCount = e => {
  //   e.preventDefault();
  //   this.setState({ count: this.state.count + 1 });
  // } ✅
  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.updateName(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: '' })
    this.props.updateCount()
  }


  render() {
    const styles = {
      formStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    };
    return (
      <div>
        {/* <div>Name: {this.state.name} </div> */}
        {/* <div># of Updates: {this.state.count}</div> */}
        <form onSubmit={this.handleSubmit} style={styles.formStyle}>
          <TextField
            label="Name"
            type="text"
            name="name"
            // autoComplete="email"
            margin="normal"
            variant="outlined"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          {/* <input type="text" name='name' value={this.state.name} placeholder="Name" onChange={this.handleChange} /> */}
          <Button variant="contained" color="primary" type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Form