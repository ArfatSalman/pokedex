const baseURL = 'https://pokeapi.co/api/v2';

class PokeApi {
  constructor() {
    throw new Error('cannot be constructed');
  }

  static getPokemonByName(pokemonName) {
    // not the best way (use URL constructor)
    const url = baseURL + '/pokemon/' + pokemonName;

    return fetch(url, { mode: 'cors' }).then((response) => response.json());
  }
}

export { PokeApi };
