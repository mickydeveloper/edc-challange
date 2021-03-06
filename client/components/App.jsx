import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes, setCurrentHome, assesHome } from '../actions/homes';
import { Link } from 'react-router-dom';

@connect((store) => {
  return{
    homes: store.homes,
    currentHome: store.currentHome
  }
})
export default class App extends React.Component {
  componentWillMount(){
    if(this.props.homes.length === 0){
      this.props.dispatch(fetchHomes())
    }
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
        { this.props.currentHome.url ? <div className="banner mb-4" style={{
          'backgroundImage': 'url(' + this.props.currentHome.url + ')',
          'backgroundPosition': 'center',
          'backgroundSize': 'cover',
        }} ></div>  : <div>Loading</div> }
        <div className="btn-container">
          <button type="button" className="btn btn-danger" onClick={() => this.dislikeHome()}>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div id="disliked">{this.getDislikedNumber() !== 0 ? <Link to="/disliked">{this.getDislikedNumber()}</Link> : this.getDislikedNumber()}</div>
        </div>
        <div className="btn-container">
        <button type="button" className="btn btn-success" onClick={() => this.likeHome()}>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </button>
        <div id="liked">{this.getLikedNumber() !== 0 ? <Link to="/liked">{this.getLikedNumber()}</Link> : this.getLikedNumber()}</div>
        </div>
      </div>);
  }
}
