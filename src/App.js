import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import * as actionTypes from './store/actions/actionTypes'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <button
        onClick={e => this.props.onSomethingGet()}
      >Button</button>
        <ul>
          <li>
            {
              this.props.myState
            }
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myState: state.reducer.items
  }
};
const mapDispatchToProps = dispatch =>{
  return{
    onSomethingGet: () => dispatch({ type: actionTypes.RANDOM_EVENT, var: 1})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
