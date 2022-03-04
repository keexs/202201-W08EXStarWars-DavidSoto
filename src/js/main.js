import { useState } from "react";

const Main = () => {
  const [startships, setStarships] = useState();

  const getStarShipCount = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const { count } = await response.json();
    return count;
  };

  const countObj = getStarShipCount();

  const getStarShipType = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const { next } = await response.json();
    while (next !== null) {
      let starships = await response.map((starship) => {
        let starships = { ...starships, starship };
        next = console.log(starships);
        // const response = await fetch(starships.next);
      });
    }
    return startships;
  };

  getStarShipType();

  return (
    <>
      <div id="background-container">
        <header id="header-title">Star Wars Test</header>
        <main id="main-container">
          <h2>Starships:</h2>
          <p id="total-ships">Total ships:{countObj.count}</p>
          <h2>Starships by class:</h2>
        </main>
      </div>
    </>
  );
};
export default Main;
