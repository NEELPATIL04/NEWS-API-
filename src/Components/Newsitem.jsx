import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,iurl,newsUrl}= this.props;
    return (
      <div>
        <div className="card  my-3 " style={{width: "18rem"}}>
  <img className="card-img-top" src={!iurl?"https://cdn.ndtv.com/common/images/ogndtv.png":iurl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{ title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl}  target="_blank"className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
