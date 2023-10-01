import React from 'react'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import './Flashsales.css'

const Flashsales = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className='square'></div>
            <div className="header-text">Hôm nay</div>
        </div>
        <div className="body">
            <div className="flashsales-countdown">
                <div className="flashsales-text">Flashsales</div>
                <div className="countdowntimer">
                    <CountdownTimer />
                </div>
                <div className="buttons-flashsales">
                    <button className="left-button"></button>
                    <button className="right-button"></button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Flashsales