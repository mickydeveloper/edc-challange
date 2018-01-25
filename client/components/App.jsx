import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes, setCurrentHome, assesHome } from '../actions/homes';

@connect((store) => {
  return{
    homes: store.homes,
    currentHome: store.currentHome
  }
})
export default class App extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchHomes())
  }

  findNextHome(){
    let currentHomeIndex = this.props.homes.findIndex(x => x.url === this.props.currentHome.url)
    if(currentHomeIndex === 9) {
      currentHomeIndex = 8;
    }
    return this.props.homes[currentHomeIndex+1]
  }

  likeHome(){
    this.props.dispatch(assesHome('liked'))
    this.props.dispatch(setCurrentHome(this.findNextHome()))
  }

  dislikeHome(){
    this.props.dispatch(assesHome('disliked'))
    this.props.dispatch(setCurrentHome(this.findNextHome()))
  }

  render() {
    console.log(this.props.currentHome);
    return (
     <div className="App container">
        <img src={this.props.currentHome.url} alt="base home" className="img-fluid"></img>
        <div className="btn-container">
          <button type="button" className="btn btn-danger" onClick={() => this.dislikeHome()}>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div id="disliked">0</div>
        </div>
        <div className="btn-container">
        <button type="button" className="btn btn-success" onClick={() => this.likeHome()}>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </button>
        <div id="liked">0</div>
        </div>
      </div>);
  }
}
