import React from 'react'

function Hour(props) {
    const view = props.view
    return (
        <>
            <div className="px-3 py-1 flex-shrink-0 justify-content-center align-items-center d-flex flex-column text-dark " style={{ background: "rgba(235, 238, 247, 0.1)" }}>
                <h6>{props.hours.datetime.slice(0,2)}</h6>
                <img src={`icons/${props.hours.icon}.png`} alt='' height={'20px'} />
                {view==='temp' ? <h6>{((props.hours.temp - 32) / 1.8).toString().slice(0, 2)}℃</h6>: view==='windspeed' ?<h6>{props.hours.windspeed}</h6>: view==='precip'?<h6>{props.hours.precip}</h6>: view==='humidity' ?<h6>{props.hours.humidity}</h6>:null}
            </div>
        </>
    )
}

export default Hour