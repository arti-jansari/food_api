import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.css'
const Detail =()=>{
    const[detail,setDetail]=useState([]); 
    const paramas = useParams();
    const Fetchdetail = ()=>{
       
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${paramas.idMeal}`)
        .then((Response)=>Response.json())
        .then((data)=>{setDetail(data.meals)
        console.log(detail)})
    }
    useEffect(()=>{
        Fetchdetail();
    })
    return (
        <div className='detailpage'>
            {detail && detail.length >0 && detail.map((value)=>(
<div className='detailcard'>
    <div className='detailimage'>
        <img src ={value.strMealThumb}/>
    </div>
    <div className='detaildescrption'>
        <h2>{value.strMeal}</h2>
        <h4>Ingridients</h4>
        <hr/>
        <div>
            <table>
                <tbody>
                    
                    <tr>
                        <td> {value.strMeasure1 +"-" + value.strIngredient1 }</td>
                        <td> {value.strMeasure2 +"-" + value.strIngredient2 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure3 +"-" + value.strIngredient3 }</td>
                        <td> {value.strMeasure4 +"-" + value.strIngredient4 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure5 +"-" + value.strIngredient5 }</td>
                        <td> {value.strMeasure6 +"-" + value.strIngredient6 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure7 +"-" + value.strIngredient7 }</td>
                        <td> {value.strMeasure8 +"-" + value.strIngredient8 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure9 +"-" + value.strIngredient9}</td>
                        <td> {value.strMeasure10 +"-" + value.strIngredient10 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure11+ "-" + value.strIngredient11}</td>
                        <td> {value.strMeasure12  +"-" + value.strIngredient12 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure13 +"-" + value.strIngredient13}</td>
                        <td> {value.strMeasure14 +"-" + value.strIngredient14 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure15 +"-" + value.strIngredient15}</td>
                        <td> {value.strMeasure16 +"-" + value.strIngredient16 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure17 +"-" + value.strIngredient17}</td>
                        <td> {value.strMeasure18 +"-" + value.strIngredient18 }</td>                      
                    </tr>
                    <tr>
                        <td> {value.strMeasure19 +"-" + value.strIngredient19}</td>
                        <td> {value.strMeasure20 +"-" + value.strIngredient20 }</td>                      
                    </tr>
                </tbody>
            </table>
            
        </div>
        <h4>Instructions</h4>
        <hr />
        <div>
            {(value.strInstructions).split('.').map((receipe)=>(
<ul>
    <li>{receipe}</li>
</ul>
                ))}
            
        </div>
            </div>
</div>

            ))}
        </div>



    )
}
export default Detail;
