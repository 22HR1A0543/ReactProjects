import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {v4 as uuid}  from "uuid";
import {useRef} from 'react';
 function WishList(){
  const [wish ,setWish]=useState('');
  const [wishList,setWishList]=useState([]);
   const onWishListChange=(e)=>
    {
      setWish(e.target.value)
    }     
  const onAddClick=()=>{
    setWishList([...wishList,{id:uuid(),wish:wish,isCompleted:false}]);
    setWish('');
  }
  const onDeleteClick=(id)=>{
    const updatedWishList=wishList.filter(wish=> wish.id !== id);
    setWishList(updatedWishList);
  }
  const onWishCheckChange=(id)=>{
     const updatedWishList=wishList.map(wish=>wish.id===id?{...wish,isCompleted:!wish.isCompleted}:wish)
     setWishList(updatedWishList);
  }
return (
  <div className='App'>
    <h1>My wishlist </h1>
    <div>  
        <input value={wish} onChange={onWishListChange}placeholder='add your wishlist here...'/>
        <button onClick={onAddClick}>Add</button>
    </div>
   <div>
    {
      wishList &&wishList.length>0 &&wishList.map(wish=>
      (
        <div key={wish.id}>
          <label>
            <input onChange={()=>onWishCheckChange(wish.id)}type="checkbox"/>
            <span className={wish.isCompleted?'strike-through':''}>{wish.wish}</span>
          </label>
          <button onClick={()=>onDeleteClick(wish.id)}>delete</button>
        </div>
      ))
    }
    
</div>
</div>
);
 }
 export default WishList;