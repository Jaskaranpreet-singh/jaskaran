import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import {getPosts} from "./features/counter/postSlice";
import { useState } from 'react';
import Search from './Search';
import Link from 'next/link'
import {incrementByAmount,decrement} from "./features/counter/counterSlice";
import { Provider } from 'react-redux'

function Card() {
   const count = useSelector((state) => state.counters.value)
   const {posts,loading} = useSelector((state) => state.post)
   const [items, setItems] = useState([]);
   const dispatch=useDispatch();
      useEffect(()=> { 
          dispatch(getPosts())  
   },[]);
 useEffect(() => {
  if (localStorage.hasOwnProperty('items')===false &&posts.items!=undefined) {
    localStorage.setItem('items', JSON.stringify(posts));
  } 
}, [posts]); 
useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, [posts]);

 if (items.items===undefined) {
  return <h1>Loading....</h1>
 }
 return ( <>
 <Search/>
  <div className='full' >
    <div className='mainContainer' >
    
    {items.items.map((value)=>{
 return (
  <Link href={`/card/${value.id}`}>
   <div className='main' onClick={()=>{  return(dispatch(incrementByAmount(value)) 
    )  }} >
     <img 
       src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
       alt="Picture of the author"
     />  
     <div className='child2'>
     <h4 style={{color:'#0099ff'}}>{value.original_title}</h4>
     <p>{value.overview}</p>
     </div>
     </div>
      </Link>
 )
    })}
      </div>
      </div>
      </>
    )
 }
  export default Card;