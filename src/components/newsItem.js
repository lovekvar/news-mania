import React from 'react'
import PropTypes from 'prop-types'

function NewsItem(props) {
  return (
    <div className="card col-md-3 mx-1 mt-4">
        <img src= {props.img_url} className="card-img-top mt-2" alt="./logo512.png" height = "200"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href= {props.url} className="btn btn-primary" target="_blank">Know More</a>
        </div>
    </div>
  )
};

NewsItem.propTypes = {
    title : PropTypes.string
};

export default NewsItem;

