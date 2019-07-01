import React,{useState,useEffect} from 'react'
import axios from 'axios'



const ResourceList = (props)=>{
    
    //state={resoures:[]};
    const [resource ,setResources]=useState([]);
    // componentDidMount(){
    //    axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`).then(
    //        (response)=>{
    //         this.setState({resoures:response.data})
    //        }
    //    )
    // } 
    const fetchResource=(resource)=>{
        axios.get(`https://jsonplaceholder.typicode.com/${resource}`).then(
            (response)=>{
             setResources(response.data)
            }
        )
    }
    
    useEffect(()=>{
        fetchResource(props.resource)
    },[props.resource])
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
    return(
        <div>{resource.length}</div>
    )
}

export default ResourceList