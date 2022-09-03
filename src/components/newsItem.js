import React from 'react'
import PropTypes from 'prop-types'
import defImage from './logo512.png'

function NewsItem(props) {
    let desc = props.description;
    if(desc !== null){
        desc = desc.slice(0,130).trim() + '...';
    }

  return (
    <div className="card col-md-3 mx-1 mt-4">
        <img src= {!props.img_url ? defImage : props.img_url} className="card-img-top mt-2" alt="Sorry, No Image available for preview" height = "200"/>
        <div className="card-body">
            <h5 className="card-title" style ={{ textAlign : "justify"}}>{props.title}</h5>
            <p className="card-text" style ={{ textAlign : "justify"}}>{desc}</p>
            <figcaption className="blockquote-footer">by <cite>{!props.author ? '' : props.author}, {props.source} on {new Date(props.time).toGMTString()}</cite></figcaption>
            <a href= {props.url} className="btn btn-primary" target="_blank">Know More</a>
        </div>
    </div>
  )
};

NewsItem.propTypes = {
    title : PropTypes.string
};

export default NewsItem;

