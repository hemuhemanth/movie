import React from "react";
import Movies from "./moviej.json";
const TopRated=()=>{
    let d=[]
    {d=[Movies][0].Movies.map((e)=>{if((Number(e.Rating)>8.0)){return e.Poster}}).filter((e)=>e)}
     
    return(
        <>
        <h1>Top Rated</h1>
        <div>
            
        {d.map((e) => <img src={e}></img>)} </div>     
        

        
        </>

    );
};

export default TopRated;