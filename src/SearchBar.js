import FilterableProductTable from "./FilterableProductTable";
function SearchBar(props){

     function handleFilterTextChange(e){
        console.log("filter"+e.target.value);
        props.onFilterTextChange(e.target.value);
    }
    function handleInStockChange(e) {
        if(e.target.checked===true){
            props.onInStockChange(e.target.checked=false);
        }
        else{
            props.onInStockChange(e.target.checked=true);
        }
        console.log(e.target.checked);
       // props.onInStockChange(e.target.checked);
      }

      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={props.filterText}
            onChange={handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={props.inStockOnly}
            
              onChange={handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
}

export default SearchBar;