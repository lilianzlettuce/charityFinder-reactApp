import React, { useState } from 'react';
import './byCat.css';
import Card from './Card.js';

export default function SearchByCatPage(props) {
    const [cats] = useState(['Animals', 'Arts, Culture, Humanities', 'Community Development', 
    'Education', 'Environment', 'Health', 'Human and Civil Rights', 'Human Services', 
    'International', 'Research and Public Policy', 'Religion'])

    const [called, setCalled] = useState(false)

    let [orgs, setOrgs] = useState([])

    const catClicked = async(e) => {
        e.preventDefault()
        setCalled(true)

        const app_id = 'bc7e7002'
        const app_key = '5f7342d4b8b9886f6099fd0aeecc81b8'
        const catname = e.target.id

        let cat_id = ''
        switch(catname) {
            case 'Animals':
                cat_id = '1'
                break
            case 'Arts, Culture, Humanities':
                cat_id = '2'
                break
            case 'Community Development':
                cat_id = '10'
                break
            case 'Education':
                cat_id = '3'
                break
            case 'Environment':
                cat_id = '4'
                break
            case 'Health':
                cat_id = '5'
                break
            case 'Human and Civil Rights':
                cat_id = '8'
                break
            case 'Human Services':
                cat_id = '6'
                break
            case 'International':
                cat_id = '7'
                break
            case 'Research and Public Policy':
                cat_id = '11';
                break
            case 'Religion':
                cat_id = '9'
                break
            default:
                cat_id = 1;
        }

        console.log(cat_id)
        const numReturn = 1000;
        const url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${app_id}&app_key=${app_key}&categoryID=${cat_id}&pageSize=${numReturn}&minRating=4`;

        let allOrgs = []
        let tenOrgs = []

        try{
            const res = await fetch(url)
            const data = await res.json()
            allOrgs = data
            console.log(data)

            const numArr = genRandom(10, allOrgs.length)
            for (let i = 0; i < numArr.length; i++) {
                tenOrgs[i] = allOrgs[numArr[i]]
            }
            setOrgs(tenOrgs)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className='container'>
            <button className='switchBtn' onClick={props.switchPage}>◄ Search By Charity Name Instead</button>
            <h1 className='title'>Select a Category</h1>
            <div id='catBox'>
                {cats.map(cat => 
                    <button className='catBtn button1' id={cat} onClick={catClicked} key={cat}>{cat}</button>
                )}
            </div>
            {!called && <h1 className='emptySpace'>Empty Space. You have yet to select a category.</h1>}
            {(orgs.length > 0 && called) && <h1>Click again to generate a new group of organizations.</h1>}
            {(orgs.length > 0 && called) && <Card orgs={orgs}/>}
        </div>
    );
}

const genRandom = (amt, length) => {
    let arr = [];
    while (arr.length < amt) {
        let num = Math.floor(Math.random() * length);
        let repeats = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                repeats = true;
            }
        }
        if (!repeats) {
            arr.push(num);
        }
    }
    return arr;
}