import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

@connect((store) => {
  return{
    homes: store.homes.filter(x => x.asses === 'disliked'),
  }
})
export default class Disliked extends React.Component {
  renderHomes(){
    return this.props.homes.map(home => {
      return (
        <div key={home.url} className="col-12 col-md-4 mb-4">
          { home.url ? <div className="list-image" style={{
            'backgroundImage': 'url(' + home.url + ')',
            'backgroundPosition': 'center',
            'backgroundSize': 'cover',
          }} ></div>  : <div>Loading</div> }
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 my-4">
             <h1><Link to="/"><i className="fa fa-angle-left mr-2" aria-hidden="true"></i></Link>Disliked Homes</h1>
          </div>
          {this.renderHomes()}
        </div>
      </div>
     );
  }
}
