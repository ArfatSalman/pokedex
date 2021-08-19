import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Pokemon } from '../components/Pokemon';
import { PokeApi } from '../api/pokeApi';

function PokemonPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);
  const [isError, setIsError] = useState(false);

  const name = params.name;
  useEffect(
    function () {
      PokeApi.getPokemonByName(name)
        .then((data) => {
          setIsLoading(false);
          setPokemonData(data);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    },
    [name]
  );

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Network error, try after some time.
      </div>
    );
  }

  return (
    <>
      <h1>More data for {params.name}</h1>
      <Pokemon data={pokemonData} />
    </>
  );
}

export { PokemonPage };
