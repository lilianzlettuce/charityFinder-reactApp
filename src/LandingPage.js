import React from 'react';
import './landing.css';

export default function LandingPage(props){
    return(
        <div className='containerFull'>
            <h1 id='title'>Hello. Welcome to <span className='highlight'>Charity Finder</span>.</h1>
            <div className='flexBox' id='flexBoxFrontPage'>
                <div>
                    <button className='button1 button2' id='catBtn' onClick={props.showSearchCat}>Search by Category</button>
                </div>
                <h4>or</h4>
                <div>
                    <button className='button1 button2' id='nameBtn' onClick={props.showSearchCat}>Search by Name</button>
                </div>
            </div>
        </div>
    );
}