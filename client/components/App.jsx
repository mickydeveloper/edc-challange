import React from 'react';
import { connect } from 'react-redux';
import { likeHome } from '../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  likeHome() {
    this.props.likeHome('liked');
  }

  render() {
    return (
     <div className="App container">
        <img src="http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg" alt="base home" className="img-fluid"></img>
        <div className="btn-container">
          <button type="button" className="btn btn-danger" onClick={() => this.likeHome() }>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div id="disliked">0</div>
        </div>
        <div className="btn-container">
        <button type="button" className="btn btn-success" onClick={() => this.likeHome() }>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </button>
        <div id="liked">{this.props.likedHomes.length}</div>
        </div>
      </div>);
  }
}

function mapStateToProps(state){
  return {
    likedHomes: state
  }
}

export default connect(mapStateToProps, {likeHome})(App);
