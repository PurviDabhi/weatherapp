import React from 'react'

function Nav(props) {
    return (
        <>
            <div className="d-flex flex-md-row flex-column justify-content-between mt-2 pb-3">
                
                    <a className="ms-3 text-dark mt-3 text-decoration-none fs-5 fw-bold" href='/' style={{color:'linear-gradient(0deg, rgba(7,243,129,1) 44%, rgba(10,44,255,1) 98%)'}}>
                    
                        Weather
                        </a>
                    
                    <div className="d-flex mt-md-3 mt-4 gap-2 me-2 ms-md-0 ms-2" role="search" style={{maxWidth:'90vw'}}>
                        <input className="form-control me-2 rounded-pill  " type="search" placeholder="Search" aria-label="Search" onChange={props.handleChange} />
                            <button className="btn btn-outline-dark btn-sm" type="submit" onClick={props.getWeather}>Search</button>
                        
                    </div>
                        
                
            </div>
        </>
    )
}

export default Nav