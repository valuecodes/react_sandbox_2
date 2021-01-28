import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Counter extends Component {

    constructor(props) {
      super(props);
      this.state = {
        counter:0,
      };
    }
  
    handleChange = (action) =>{
  
      let newValue = 0
  
      if(action!=='reset'){
        newValue = this.state.counter+action
      }
      
      this.setState({
        counter:newValue
      })
    }
  
    render() {
      return (
        <div>
          <h1>Counter</h1>
          <h2>Likes {this.props.ctr}</h2>
          <div>
            <button onClick={this.props.onIncCounter}>Add</button>
            <button onClick={this.props.onDecCounter}>Dislike</button>
            <button onClick={()=>this.handleChange('reset')}>Reset</button>
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: 'INCREMENT'})
    }
}

export default connect(mapStateToProps)(Counter)