/*import React from "react";

const MovieList=(props)=>{
    return(
        <>
        {props.movies.map((movie,index)=>(<div>
        <div>
            <img src={movie.Poster} alt="movie"></img>
        </div>

        <div>{movie.Title}</div>
        </div>
        ))}
        <img src={[Movies][0].Movies.map((e)=>{if(e.Year=='2022'){return e.Poster}}).filter((e)=>e)[0]} ></img>
        
        </>

    );
};

*/

import React from "react";
import Movies from "./moviej.json";
const NowPlaying=()=>{
    
    let d=[]
    {d=[Movies][0].Movies.map((e)=>{if(Number(e.Year)==2022){return e.Poster}}).filter((e)=>e)}
      
    
    return(
        <>
        <h1>Now Playing</h1>
         <div>
           
      {d.map((e) => <img src={e}></img>)}

        <div>
        </div>
        </div>
        
        </>

    );
};

export default NowPlaying;

/*import React from 'react';
<img src={[Movies][0].Movies.map((e)=>{if(e.Year=='2022'){return e.Poster}}).filter((e)=>e)[0]} ></img>
        
const MovieList=(props)=>{
return(
<>
{props.movies.map((movie,index)=>
<div className="d-flex justify-content-start m-3">
    <img src={movie.Poster} alt='movie'></img>
</div>)}
</>
)
}
export default MovieList;
*/