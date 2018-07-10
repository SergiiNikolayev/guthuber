import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import * as actionTypes from './store/actions/actionTypes'

class App extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.getTextInput = React.createRef();
  }

  searchHandler = () => {
    //this.props.onItemAdd(this.getTextInput.value);
    //this.getTextInput.value = '';
    this.props.onSearch(this.getTextInput.value);
    console.log(this.getTextInput.value);
  }

  render() {
    return (
      <div className="myApp">
        <input

          ref={(input) => {
            this.getTextInput = input
          }}
          onChange={this.searchHandler}
        />
      <button
        onClick={e => this.props.onGetInfoFromGit()}
      >Get GitHub projects with 50k+ stars</button>
        <ul>
            {
              this.props.message === [] || this.props.message === {}  ? console.log('null') : this.props.message.map( items =>
              <li key={items.id} >
                <img width={20} height={20} src={items.owner.avatar_url}/>
                <span>&nbsp;</span>
                <a href={items.html_url}>{ items.name }</a>
                <span>by: </span><span>{items.owner.login}</span>
                <p>stars: {items.stargazers_count}</p>
                <hr />
              </li>
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
    onPlusTen: () => dispatch({ type: actionTypes.RANDOM_EVENT, var: 10}),
    onSearch: (whatWeSearch) => dispatch({type: actionTypes.SEARCH, whatWeSearch}),
    onGetInfoFromGit: () => dispatch({ type: actionTypes.GET_INFO})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
