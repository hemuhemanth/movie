import React from "react";
import Movies from "./moviej.json";
const Upcoming=()=>{
   
    let d=[]
  
   {d=[Movies][0].Movies.map((e)=>{return [e.Poster,e.Title]}).filter((e)=>e)}
    return(
        <>
        <h1>Upcoming</h1>
        <div className='row'>
        
        {d.map((e) =><div className="column"><img src={e} ></img> 
                                            <figcaption>{e[1]}</figcaption> 
                    </div>)}
        
        </div>
        </>

    );
};

export default Upcoming;

//if((Number(e.Year)>2022)){return [e.Poster,e.Title]}