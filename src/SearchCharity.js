import React, {useState} from "react";
import './searchCharity.css';
import Card from './Card.js';

export default function SearchPage(props){
    return(
    <div className="container">
        <button className='switchBtn' onClick={props.switchPage}>◄ Search By Category Instead</button>
        <h1 className="title">Search Charities</h1>
        <Search />
    </div>
    );
}

function Search(){

    //states- input query, movies
    const [query, setQuery] = useState('')
    const [matches, setMatches] = useState([])
    const [called, setCalled] = useState(false)

    const searchCharities = async (e) => {
        e.preventDefault()
        setCalled(true)
        
        const app_id = '8287c455'
        const app_key = '725ca9a640d71349bba6341aa207ce6c'
        const search = query
        const numReturn = 50
        const url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${app_id}&app_key=${app_key}&pageSize=${numReturn}&search=${search}&minRating=1`
        console.log(search)
    
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMatches(data)
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div>
            <form className='form' onSubmit={searchCharities}>
                <label className='label' htmlFor='query'>Charity Name</label>
                <input className='input' type='text' name='query' 
                placeholder='e.g. Cancer Support Community'
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            {!called && <h1 className='emptySpace'>Empty Space. You have yet to search for a charity.</h1>}
            {(matches.length > 0 && called) && <Card orgs={matches}/>}
            {(!(matches.length > 0) && called) && <h1 className='emptySpace'>No matches found.</h1>}
        </div>
    );
}