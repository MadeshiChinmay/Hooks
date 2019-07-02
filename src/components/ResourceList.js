import React from 'react'
//import React,{useState,useEffect} from 'react'
//import axios from 'axios' NO LONGER NEEDED
import useResources from './useResources'

//THIS FUNCTION IS JUST TO SHOW THE REUSABILITY OF CODE
//THROUGH HOOKS...
// const  useResources =(resource)=>{
//     const [resources ,setResources]=useState([]);
//     const fetchResource=(resource)=>{
//         axios.get(`https://jsonplaceholder.typicode.com/${resource}`).then(
//             (response)=>{
//              setResources(response.data)
//             }
//         )
//     }
    
//     useEffect(()=>{
//         fetchResource(resource)
//     },[resource])
//     return resources
// }
//The above function is redefined in the useResources component
//to show the reusability .. reusability basically helps to 
// suppose we want to display any posts and todos somewhere
//in the website therefore reusability is necessary

const ResourceList = (props)=>{
    
    //state={resources:[]};
    // const [resource ,setResources]=useState([]);
    // // componentDidMount(){
    // //    axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`).then(
    // //        (response)=>{
    // //         this.setState({resoures:response.data})
    // //        }
    // //    )
    // // } 
    // const fetchResource=(resource)=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/${resource}`).then(
    //         (response)=>{
    //          setResources(response.data)
    //         }
    //     )
    // }
    
    // useEffect(()=>{//useEffect must return a pure function (Async and Promise based ones are not allowed)
    //     fetchResource(props.resource)
    // },[props.resource])
    // DIFFERENT VALUES OF THIS ARRAY ARGUEMENT CAUSE RERENDER
    //THIS ARRAY KINDA STORES PREVIOUS PROPS.......
    /*
    componentDidUpdate is called with previous Props
     */
    // componentDidUpdate(prevProps){
    //     if(prevProps.resource!==this.props.resource){
    //         axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`).then(
    //         (response)=>{
    //          this.setState({resoures:response.data})
    //             }
    //         )
    //     }
        
    //  }
    const resource=useResources(props.resource)//CALLED THE REUSABLE FUNCTION
    return(
        <ul>{resource.map((record)=>(
            <li key={record.id}>{record.title}</li>
        ))}</ul>
    )
}

export default ResourceList