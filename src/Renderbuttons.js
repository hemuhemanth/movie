import App from "./App.js";
const Renderbuttons=()=>{

    const views=[];
    
    for(var i=0;i<5;i++){
    views.push(
      <button
      key={i}
      />);
    
    }
    
  }
export default Renderbuttons;