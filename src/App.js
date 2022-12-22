import './App.css';
import React, {useState} from 'react';
import NowPlaying from'./Nowplaying.js';
import TopRated from './TopRated';
import HandlePopular from './Handlepopular';
import Upcoming from './Upcoming';
function App() {

  const [isShown, setIsShown] = useState(false);
  const [isShownTR, setIsShownTR] = useState(false);
  const [isShownHP, setIsShownHP] = useState(false);
  const [isShownUC,setIsShownUC]=useState(false);
  
  const handleClick = event => {
   
    setIsShown(current => !current);
    
      document.getElementById("hp").style.color="";
      document.getElementById("UC").style.color="";
      document.getElementById("NP").style.color="red";
      document.getElementById("TR").style.color="";
    
    setIsShownHP(false);
    setIsShownTR(false);
    setIsShownUC(false);

  };
  const handleTR=event=>{
    setIsShownTR(current=>!current);
    
      document.getElementById("hp").style.color="";
      document.getElementById("UC").style.color="";
      document.getElementById("NP").style.color="";
      document.getElementById("TR").style.color="red";
    
    setIsShown(false);
    setIsShownHP(false);
    setIsShownUC(false);

  };
  const handlePopular = event => {
   
    setIsShownHP(current => !current);
    
   
      document.getElementById("hp").style.color="red";
      document.getElementById("UC").style.color="";
      document.getElementById("NP").style.color="";
      document.getElementById("TR").style.color="";
    
setIsShownTR(false);
setIsShownUC(false);
setIsShown(false);
  
  };
  const handleUC=event=>{
    setIsShownUC(current => !current);
   
      document.getElementById("UC").style.color="red";
      document.getElementById("hp").style.color="";
      document.getElementById("NP").style.color="";
      document.getElementById("TR").style.color="";
    
    setIsShown(false);
    setIsShownTR(false);
    setIsShownHP(false);
  }
   
  return (
    <div className="App">
      <div className="images">
        <img className='image'src="https://koditips.com/wp-content/uploads/create-tmdb-api-key-1024x903.png" ></img>
      </div>
      <div className="App-main">
      <div className="sidebar-wrapper">
          <div className="sidebar">
            <ui className="sidebar-menu">
              
            <li className="sidebar-menu__item" onClick={handleClick}>
              <a href="#/Metflix/now_playing" id="NP" style={{"text-decoration" :"none"}}><svg width="16" height="19" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg"><title>Now Playing</title><path d="M10.576 3.368L15.122.74 14.79 0 9.066 1.897 7.953 4.473H0v1.983h1.148L2.708 18.6h7.875l1.56-12.144h1.147V4.473H10.1"></path></svg>
            Now Playing</a>
            </li>
            
              <li className="sidebar-menu__item" onClick={handlePopular}> 
                <a href="#/Metflix/popular" id="hp" style={{"text-decoration" :"none"}} aria-current="page" class="is-active"><svg width="13" height="18" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><title>Popular</title><path d="M12.464 10.663c-.19-2.486-1.348-4.043-2.37-5.418-.944-1.272-1.76-2.37-1.76-3.992 0-.13-.074-.25-.19-.31-.115-.06-.255-.05-.36.027C6.25 2.068 4.97 3.917 4.524 5.68c-.31 1.23-.35 2.61-.357 3.523C2.75 8.9 2.43 6.783 2.427 6.76c-.016-.11-.083-.206-.18-.26-.1-.05-.215-.054-.315-.004-.074.036-1.823.924-1.925 4.47-.007.12-.007.237-.007.356 0 3.445 2.804 6.25 6.25 6.25H6.268c3.438-.01 6.232-2.81 6.232-6.25 0-.174-.036-.66-.036-.66zM6.25 16.877c-1.15 0-2.083-.996-2.083-2.22 0-.04 0-.083.002-.135.013-.516.11-.868.22-1.102.2.432.56.83 1.145.83.192 0 .347-.155.347-.347 0-.495.01-1.065.134-1.58.11-.456.37-.94.703-1.33.146.504.434.913.714 1.312.402.57.818 1.162.89 2.168.005.06.01.12.01.185 0 1.223-.935 2.22-2.084 2.22z"></path></svg>
                Popular</a>
              </li>

              <li className="sidebar-menu__item" onClick={handleTR}>
                <a href="#/Metflix/top_rated" id="TR" style={{"text-decoration" :"none"}}><svg className='svgg' fill="green" width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><title>Top Rated</title><path d="M14.05 5.947l-2.897 2.825.684 3.99c.05.287-.07.578-.306.75-.132.097-.29.146-.45.146-.12 0-.243-.03-.356-.088L7.14 11.686 3.56 13.57c-.258.136-.57.113-.807-.057-.235-.172-.353-.462-.304-.75l.685-3.99L.233 5.947c-.21-.203-.284-.508-.195-.785.09-.278.33-.48.62-.522l4.005-.582L6.454.428C6.584.164 6.85 0 7.14 0c.293 0 .558.165.688.427l1.792 3.63 4.007.583c.288.042.528.244.617.52.09.28.015.583-.193.787z"></path></svg>
              Top rated</a>
              </li>

              <li className="sidebar-menu__item" onClick={handleUC}>
                <a href="#/Metflix/upcoming" id="UC" style={{"text-decoration" :"none"}} ><svg className='svgg' fill="black" width="15" height="17" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 491.858 491.858" xml="preserve"><g><g><g><path fill="white" d="M357.714,423.331c0,9.328-10.676,16.891-23.847,16.891H23.847C10.676,440.222,0,432.659,0,423.331V203.735 c0-9.33,10.676-16.892,23.847-16.892h310.02c13.171,0,23.847,7.564,23.847,16.892V423.331L357.714,423.331z"></path><circle cx="89.428" cy="118.706" r="59.619"></circle><circle cx="253.381" cy="103.801" r="74.524"></circle><path fill="white" d="M491.858,447.677c0,0-1.986,14.904-15.899,14.904c-13.912,0-103.34-83.42-103.34-94.397V258.882 c0-10.976,87.443-94.398,103.34-94.398c15.899,0,15.899,14.905,15.899,14.905V447.677z"></path></g></g></g></svg>
              Upcoming</a>
              </li>

            </ui>
          </div>
        </div>
        <div className="App-content-wrapper">
          <div className='row'>
            
          </div>
          {isShown && <NowPlaying/> }
          {isShownTR && <TopRated/>}
          {isShownHP && <HandlePopular/>}
          {isShownUC && <Upcoming/>}
        </div>
    </div>
    </div>
  );
}
export default App;
/*import { useState } from "react"  <MovieList movies={movies}/>
         ;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './MovieList'
function App() {
  const [movies,setMovies]=useState([
 
       {
          "Title":"Star Wars: Episode IV - A New Hope",
          "Year":"1977",
          "imdbID":"tt0076759",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode V - The Empire Strikes Back",
          "Year":"1980",
          "imdbID":"tt0080684",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode VI - Return of the Jedi",
          "Year":"1983",
          "imdbID":"tt0086190",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode VII - The Force Awakens",
          "Year":"2015",
          "imdbID":"tt2488496",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode I - The Phantom Menace",
          "Year":"1999",
          "imdbID":"tt0120915",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode III - Revenge of the Sith",
          "Year":"2005",
          "imdbID":"tt0121766",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode II - Attack of the Clones",
          "Year":"2002",
          "imdbID":"tt0121765",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
       },
       {
          "Title":"Rogue One: A Star Wars Story",
          "Year":"2016",
          "imdbID":"tt3748528",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode VIII - The Last Jedi",
          "Year":"2017",
          "imdbID":"tt2527336",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
       },
       {
          "Title":"Star Wars: Episode IX - The Rise of Skywalker",
          "Year":"2019",
          "imdbID":"tt2527338",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
       }
    
 ])
  return(
    <div className='container-fluid movie-app'>
      <div className='row'>
     <MovieList movies={movies}/>
     </div>
    </div>
    
    
    
   
  );
}

export default App;

*/
//import Renderbuttons from './Renderbuttons';
//import FilterableProductTable from './FilterableProductTable.js';

  /*
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ]; <FilterableProductTable products={PRODUCTS}/>
     
    
  
  
  return (
    <>
 <div className='btn light-gray'>
          AC
        </div>
        <div className='btn light-gray' >
          %
        </div>
        <div className='btn light-gray' >
          +/-
        </div>
        <div className='btn orange' >
          /
        </div>
        <div className='btn' >
          7
        </div>
        <div className='btn'>
          8
        </div>
        <div className='btn' >
          9
        </div>
        <div className='btn orange' >
          X
        </div>
        <div className='btn' >
          4
        </div>
        <div className='btn' >
          5
        </div>
        <div className='btn'>
          6
        </div>
        <div className='btn orange' >
          +
        </div>
        <div className='btn'>
          1
        </div>
        <div className='btn' >
          2
        </div>
        <div className='btn' >
          3
        </div>
        <div className='btn orange' >
          -
        </div>
        <div className='btn zero' >
          0
        </div>
        <div className='btn' >
          .
        </div>
        <div className='btn' >
          =
        </div>
      </>
   
  );
}

export default App;
 
            <button value='1' onChange={handler} onClick={()=>{setInput(inputt+1)}}>1 </button>
            <button value='2' onChange={handler} onClick={()=>{setInput(inputt+2)}}>2</button>
            <button value='3'  onChange={handler} onClick={()=>{setInput(inputt+3)}} >3</button>
            <button value='4'  onChange={handler} onClick={()=>{setInput(inputt+4)}}>4</button>
            <p>  </p>
            <button  onChange={handler} onClick={()=>{setInput(inputt+5)}}>5</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+6)}}>6</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+7)}}>7</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+8)}}>8</button>
            <p>   </p>
            <button  onChange={handler} onClick={()=>{setInput(inputt+9)}}>9</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+0)}}>0</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+'.')}}>.</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt.slice(0,-1))}}>CLR</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt.slice(inputt.length,inputt.length))}}>RESET</button>
            <p></p>
            <button  onChange={handler} onClick={()=>{setInput(inputt+'+')}}>+</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+'-')}}>-</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+'*')}}>*</button>
            <button  onChange={handler} onClick={()=>{setInput(inputt+'/')}}>/</button>
<button onChange={handler} onClick={()=>setInput(eval(inputt))}>=</button>


const App=(props)=>{
    const [inputt,setInput]=useState('');
    const nameAArr=['0','1','2','+'];
    //var inputt1='';
    /*const handler=(e)=>{
      setInput(e.target.value)
    }
    
   //const inputt='';
    for(var i=0;i<4;i++)
    {
      <Fields displayname={nameAArr[i]}/>
    }
    return(
        <div >
            
            <input type='text' placeholder='calculate' name='cal' value={inputt} ></input><br></br>
           
            <br></br>
            <br></br>
            <br></br>

          
            

        </div>



    );
}


export default App;


//import { useState } from "react";
import "./App.css";
function App() {

  
const [input, setInput] = useState("");
const [input2,setInput2]=useState("");
var input1='';
const numbers = [ "0", "7",8,9, "*", '4',5,6, "-",1,2,3,"+","/"];
const handler=(e)=>{
  e.preventDefault();
}
return(
<div className="app">

<div className="cal">

<input type="text" value={input} onChange={handler} id="yui"></input>

<div className="row">


<button onClick={() => {setInput('')}}>AC</button>

{numbers.map((number) => (

<button onClick={() =>setInput(input+number)} onChange={handler} 
style={{backgroundColor : (number==='+' || number==='-' || number==='*' ||number==='/')?"orange":"white"}}>
   {number}</button>

))}
{console.log(input)}

<button onClick={() =>setInput(eval(input))} onChange={handler} style={{backgroundColor: "gray"}}>=</button>

</div>

</div>

</div>

);



}


export default App;



*/


