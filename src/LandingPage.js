import React from 'react';
import './landing.css';

export default function LandingPage(props){
    return(
        <div className='containerFull'>
            <h1 id='title'>Hello, welcome to <span className='highlight'>Veracity</span>.</h1>
            <h4>Find charities you can trust.</h4>
            <div className='flexBox' id='flexBoxFrontPage'>
                <div>
                    <button className='button1 button2' id='catBtn' onClick={props.showSearch}>Search by Category</button>
                </div>
                <h4><i>or</i></h4>
                <div>
                    <button className='button1 button2' id='nameBtn' onClick={props.showSearch}>Search by Name</button>
                </div>
            </div>
        </div>
    )
}