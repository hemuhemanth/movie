import App from "./App.js";
import { useState } from "react";
const Fields=(props)=>{
 //   const [inputt1,setInput]=useState('');
//const [inputt,setInput]=useState('');
/*
{console.log("fgh"+props.inputt)}
        <button onClick={()=>{setInput(props.inputt+props.i)}}> {props.i}</button>
      {console.log(inputt)}*/
    return(
      <div>
        <button>{props.displayname}</button>
      </div>
    );

}
export default Fields;