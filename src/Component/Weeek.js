import React from 'react'

function Weeek(props) {
    return (
        <>
            <div className="px-3 py-1 flex-shrink-0 justify-content-center d-flex flex-column mb-2" style={{ background: "rgba(235, 238, 247, 0.01)" }}>
                <div className="d-flex gap-3 justify-content-between">
                    <h6>{props.data.datetime}</h6>
                    
                </div>
                <h2 className='text-center'><img src={`icons/${props.data.icon}.png`} alt='' height={'50px'}/></h2>
                <h6>{((props.data.temp - 32) / 1.8).toString().slice(0, 2)}<sup>°c</sup></h6>
                <h6 className='fw-bold text-start'>{props.data.conditions}</h6>
                <h6>Precipition : {props.data.precip
}%</h6>
                <h6>Humidity: {props.data.humidity
}%</h6>
                <h6>Wind: {props.data.windspeed}km/h</h6>
            </div>
        </>
    )
}

export default Weeek