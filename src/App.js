import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { connect } from 'react-redux';
import fetchPostsWithRedux from './actions'



class App extends Component {
  componentDidMount() {
    this.props.fetchPostsWithRedux();
  }

  constructor(props) {
    super(props)
  }
  render() {
    const title = "Result Board"
    return (

      <div className="App">
        <header className="App-header">
          {title}
        </header>
        <List value={this.props.posts}/>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = dispatch => ({
  fetchPostsWithRedux: () => dispatch(fetchPostsWithRedux())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


