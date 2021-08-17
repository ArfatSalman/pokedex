import { pokemons } from '../pokemonList';
import sampleSize from 'lodash/sampleSize';
import { Link } from 'react-router-dom';

function GalleryItem(props) {
  const { children } = props;
  return (
    <div
      style={{
        width: '29%',
        margin: '1%',
        height: '100px',
        backgroundColor: 'red',
      }}
    >
      {children}
    </div>
  );
}

function PokemonGallery() {
  const randomPokemons = sampleSize(pokemons, 9);
  console.log(randomPokemons);
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {randomPokemons.map((pokemon) => {
        const { name } = pokemon;
        return (
          <GalleryItem key={name}>
            <Link to={'/pokemon/' + name}>{name}</Link>
          </GalleryItem>
        );
      })}
    </div>
  );
}

export { PokemonGallery };
