import React from 'react'
import { useEffect, useState } from 'react'
import Data from './Data'
import Card from './Card.css'
export default function App() {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then (jsonResponse =>{   
          setPosts(jsonResponse)    
    })
  })
    
  return (
    <div className= 'main-container'>
      <div>
          <input  className = "searchInput "  placeholder='Search....' onChange={(e) => setSearch(e.target.value)}></input>
      </div>
      <div  className= "cardContainer">
        {posts.filter((value)=>{
          return search.toLowerCase() === '' ? value : value.title.toLowerCase().includes(search)
        }).map((item,i)=>
          <div key = {i} className= 'card' >
             <Data title = {item.title} body = {item.body}/>
          </div>

        )}
      </div>
    </div>
  )
}

