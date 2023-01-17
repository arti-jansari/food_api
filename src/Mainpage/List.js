import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const List =()=>{
const param = useParams()
    const [list,setList]= useState([])
    const Fetchlist = ()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.strCategory}`)
        .then((Response)=> Response.json())
        .then((data)=>{setList(data.meals)})
    }
    useEffect(()=>{
        Fetchlist();
    })
    
    return (
        <div className='listpage'>
            {list && list.length>0 && list.map((value,index)=>(
               <div className="listcard">
               <div className="listimagediv">
                 <img src={value.strMealThumb} />
               </div>
               <Link to={value.idMeal}>
                
                <div className="name"><h5  style={{color:'orange'}}
    >SERVES 5 | PREP TIME 20MINS</h5><br/>
                <h5 style={{color:'darkblue'}}>{value.strMeal}</h5></div></Link>
              </div>
            
            ))}
        </div>
    )
}
export default List;
