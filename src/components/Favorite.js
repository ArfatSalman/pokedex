import { useState } from 'react';

function Favorite() {
  const [favs] = useState(function () {
    const value = localStorage.getItem('pokemons');
    if (value) {
      return JSON.parse(value);
    }
    return [];
  });

  return favs.length ? (
    <div>
      <h3>Your Favorite Pokemons</h3>

      {favs.map((pokemon) => {
        return <div>{pokemon}</div>;
      })}
    </div>
  ) : null;
}

export { Favorite };
