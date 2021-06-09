import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  location.split(" ");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location[0].toUpperCase() + location.substring(1)}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
