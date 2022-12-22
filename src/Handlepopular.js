import React from "react";
import Movies from "./moviej.json";
const HandlePopular=()=>{
    
    let d=[]
    {d=[Movies][0].Movies.map((e)=>{if((Number(e.Rating)>7.0) && (Number(e.Year)>2012)){return [e.Poster,e.Title]}}).filter((e)=>e);}
     console.log([Movies][0].Movies.map((e)=>{if((Number(e.Rating)>7.0) && (Number(e.Year)>2012)){return [e.Poster,e.Title]}}).filter((e)=>e))
    
     

     return(
        <>
        <h1>Popular</h1>
        
        {d.map((e) => 
        <img src={e}  ></img>)
        
        }
        <div></div>
        
        {d.map((e)=>((<figcaption  className='row'>{e[1]} <hr></hr> </figcaption>
        )
         ))}
          {console.log(d)}<div>
        
        
        </div>
        
        </>

    );
};

export default HandlePopular;