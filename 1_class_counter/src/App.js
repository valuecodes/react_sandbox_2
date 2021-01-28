import './App.css';
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count:0,
    };
  }

  handleChange = (action) =>{

    let newValue = 0

    if(action!=='reset'){
      newValue = this.state.count+action
    }
    
    this.setState({
      count:newValue
    })
  }

  render() {


    return (
      <div>
        <h1>Counter</h1>
        <h2>Likes {this.state.count}</h2>
        <div>
          <button onClick={()=>this.handleChange(1)}>Add</button>
          <button onClick={()=>this.handleChange(-1)}>Dislike</button>
          <button onClick={()=>this.handleChange('reset')}>Reset</button>
        </div>
      </div>
    )
  }
}


