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

  getLikedNumber(){
    return this.props.homes.filter(x => x.asses === 'liked').length
  }

  getDislikedNumber(){
    return this.props.homes.filter(x => x.asses === 'disliked').length
  }

  render() {
    return (
     <div className="App container">
        <img src={this.props.currentHome.url} alt="base home" className="img-fluid"></img>
        <div className="btn-container">
          <button type="button" className="btn btn-danger" onClick={() => this.dislikeHome()}>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div id="disliked">{this.getDislikedNumber()}</div>
        </div>
        <div className="btn-container">
        <button type="button" className="btn btn-success" onClick={() => this.likeHome()}>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </button>
        <div id="liked">{this.getLikedNumber()}</div>
        </div>
      </div>);
  }
}
