import React from 'react';

export default function Card({orgs}) {
    return(
        <div>
            {orgs.map(org => 
                <div className='card' key={org.charityName}>
                    <div className='flexContainer'>
                        <div className='flexItem' id='firstI'>
                            <h3 className='cardTitle'>{org.charityName} <span className='score'>{org.currentRating.score}</span></h3>
                            <p className='tagline'><i>{org.tagLine}</i></p>
                        </div>
                        <div className='smallBox' id='secondI'>
                            <p><small><span className='extraSmall'>CATEGORY :</span> {org.category.categoryName}</small></p>
                            <p><small><span className='extraSmall'>CAUSE :</span> {org.cause.causeName}</small></p>
                        </div>
                    </div>
                    
                    <p id='mission' style={{marginTop: ".53m", marginBottom: "1.5em"}}>{org.mission}</p>
                    <a className='button1' href={org.websiteURL} target='_blank' rel='noopener noreferrer'>Visit Website</a>
                </div>
            )}
        </div>
    );
}

const genRandom90 = () => {
    return (Math.random() * 10 + 90).toFixed(2);
}