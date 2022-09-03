import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Countries} from './country';

function Navbar(props) {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    const standardWord = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        categories.map((category, index)=> {
                            return <li className="nav-item" key={index+1}>
                            <a className="nav-link active" aria-current="page" href={`/${category}`}>{standardWord(category)}</a>
                            </li>
                        })
                    }
                    <li className="nav-item" key="0">
                        <select className="form-select" onChange={props.func} defaultValue="all">
                            <option value="all" key="0">All Countries</option>
                            {
                                Countries.map((element, index)=> {
                                    return <option value={element.code} key={index+1}>{element.country}</option>
                                })
                            }
                        </select>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
};

Navbar.propTypes = {
    title : PropTypes.string
};
Navbar.defaultProps = {
    title: 'newsMania'
};


export default Navbar;

