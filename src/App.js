import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

function SearchResults() {
  const [data, setData] = useState({ drinks: [] });
  // const [query, setQuery] = useState('react');

  useEffect(() => {
    // let ignore = false;

    async function fetchData() {
      const result = await axios(`/.netlify/functions/fetch-random`);
      setData(result.data);
      // if (!ignore) setData(result.data);
    }

    fetchData();
    // return () => { ignore = true; }
  }, []);

  return (
    <>

      <ul>
        {data.drinks.map(drink => (
          <li key={drink.idDrink}>
            {/* <a href={drink.url}>{drink.title}</a> */}
            <p>{drink.strDrink}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchResults;





// const rootElement = document.getElementById("root");
// ReactDOM.render(<SearchResults />, rootElement);
