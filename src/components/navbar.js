import React from 'react'
import PropTypes from 'prop-types'
import Countries from './country';

function Navbar(props) {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    const standardWord = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        categories.map((category)=> {
                            return <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={`/${category}`}>{standardWord(category)}</a>
                            </li>
                        })
                    }
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">All</a></li>
                        {
                            Countries.map((element)=> {
                                return <li><a className="dropdown-item" href="/">{element.country}</a></li>
                            })
                        }
                    </ul>
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

