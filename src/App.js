import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import * as actionTypes from './store/actions/actionTypes'

class App extends Component {
  render() {
    return (
      <div className="myApp">
      <button
        onClick={e => this.props.onSomethingGet()}
      >Get GitHub projects with 50k+ stars</button>
        <ul>
{/*          <li>
            {
              this.props.myState
            }
          </li>*/}
            {
              this.props.message.map( items =>
              <li key={items.id} >
                <a href={items.html_url}>{ items.name }</a></li>
              )
            }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myState: state.reducer.items,
    message: state.reducer.message
  }
};
const mapDispatchToProps = dispatch =>{
  return{
    onSomethingGet: () => dispatch({ type: actionTypes.RANDOM_EVENT, var: 10})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
