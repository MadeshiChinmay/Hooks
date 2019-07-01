import React from 'react'
import {useState} from 'react'
import ResourceList from './ResourceList'
const App =()=>{

    const [resource ,setResource]=useState('Posts')
    //const [secondPieceOfState , setSecondPieceOfState]=useState('Initial_Value')
    //Array Destructuring 
    /*
    First Element Acts as State with Current piece State Of Component
    Second Element Acts as setState for the given State
    SEE IMAGES
     */



    return(
        <div className="ui container">                  
            <div>
                <button className="ui button" onClick={()=>setResource('Posts')}>
                    Posts                    
                </button>
                <button className="ui button" onClick={()=>setResource('Todos')}>
                    Todos
                </button>
            </div>
            <ResourceList resource={resource} />
        </div>
    )
    
}

export default App
/*
Hooks:
useState:component level state
useEffect:lifecycle components
and Many More ......
 */