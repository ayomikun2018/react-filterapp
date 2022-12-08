import React from 'react'
import img from './alabaster-co-0cZFx3yw0mg-unsplash.jpg'
export default function Data({title,body}) {
    return (

        <div className= 'data-container'>
             <div>
            <img src={img} alt = "christmas-img" className= 'img-container'/>
            </div>
            <h3> {title} </h3>
            <p>{body}</p>
           
           
        </div>
        
       
    )
}
