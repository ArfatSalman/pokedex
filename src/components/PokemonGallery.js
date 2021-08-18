import { useState } from 'react';
import { pokemons } from '../pokemonList';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

function GalleryItem(props) {
  const { children, pokemonName } = props;
  const [isInLocalStorage, setIsInLocalStorage] = useState(function () {
    const val = localStorage.getItem('pokemons');
    if (!val) {
      return false;
    }
    const jsArray = JSON.parse(val); // ["a"]
    const set = new Set(jsArray);
    return set.has(pokemonName);
  });
  return (
    <div
      style={{
        border: '1px solid lightblue',
        boxShadow: '0 0 5px lightblue',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ flexGrow: 1 }}>{children}</div>
      <img
        src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"
        style={{ height: '50px', flexGrow: 2 }}
        alt="i'll come back to it"
      ></img>
      <Button
        onClick={function () {
          if (!isInLocalStorage) {
            setIsInLocalStorage(true);
            const key = 'pokemons';
            const val = localStorage.getItem(key);
            if (val) {
              const arr = JSON.parse(val); // converting string to js objects
              arr.push(pokemonName);
              const stringifiedArray = JSON.stringify(arr);
              localStorage.setItem(key, stringifiedArray);
            } else {
              const stringifiedArray = JSON.stringify([pokemonName]);
              localStorage.setItem(key, stringifiedArray);
            }
          }
        }}
        variant="contained"
        color={isInLocalStorage ? 'secondary' : 'primary'}
      >
        <FavoriteIcon />
      </Button>
    </div>
  );
}

function PokemonGallery() {
  // const randomPokemons = sampleSize(pokemons, 9);
  const randomPokemons = pokemons.slice(0, 9);
  console.log(randomPokemons);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '1fr 1fr 1fr',
        gridGap: '10px',
        height: '400px',
      }}
    >
      {randomPokemons.map((pokemon) => {
        const { name } = pokemon;
        return (
          <GalleryItem key={name} pokemonName={name}>
            <Link to={'/pokemon/' + name}>{name}</Link>
          </GalleryItem>
        );
      })}
    </div>
  );
}

export { PokemonGallery };
