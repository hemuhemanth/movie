import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers.js";
import App from "./App.js";

const SideBar=()=>{
    function callingNowPlaying(){
        console.log("clicked");
     return "hi";
    }
    return(
        <div className="listi">
         <a href="google.com" onClick={callingNowPlaying}>NowPlaying </a>
        </div>
    );
}
export default SideBar;
//<a href="#module-learnmore" class="menu-link">Learn More</a>