const SearchParams = () => {

  const location = "Seattle, WA";

  return ( 
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input type="text" id="location" value={location.toUpperCase()} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
   );
}
 
export default SearchParams;