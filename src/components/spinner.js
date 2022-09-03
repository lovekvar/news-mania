import React from 'react'
import loading from './loading-gif.gif'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" height="50px" width="50px"/>
            </div>
        )
}

export default Spinner;