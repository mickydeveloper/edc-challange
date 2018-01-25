import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return{
    homes: store.homes.filter(x => x.asses === 'liked'),
  }
})
export default class Liked extends React.Component {
  renderHomes(){
    return this.props.homes.map(home => {
      return (
        <div key={home.url} className="col-12 col-md-4 mb-4">
          <img src={home.url} className="img-fluid"/>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4">
            <h1>Liked Homes</h1>
          </div>
          {this.renderHomes()}
        </div>
      </div>
     );
  }
}
