import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { pokemons } from '../pokemonList';
import { PokemonGallery } from '../components/PokemonGallery';
import { Link } from 'react-router-dom';

function HomePage() {
  const [selection, setSelection] = useState(null);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'lightgrey',
        }}
      >
        <h1>My Pokedex</h1>
      </div>
      <h1>Search</h1>
      <div style={{ marginTop: '20px', display: 'flex' }}>
        <Autocomplete
          id="combo-box-demo"
          options={pokemons}
          getOptionLabel={(option) => {
            const { name } = option;
            return name[0].toUpperCase() + name.substr(1);
          }}
          style={{ width: 300, flexGrow: 1, marginRight: '20px' }}
          renderInput={(params) => (
            <TextField {...params} label="Search Pokemons" variant="outlined" />
          )}
          onChange={function (event, currentSelection) {
            setSelection(currentSelection);
          }}
        />

        <Button
          component={() => (
            <Link to={selection ? '/pokemon/' + selection.name : '/'}>
              Go to pokemon
            </Link>
          )}
          variant="contained"
          color="primary"
        ></Button>
      </div>
      <h1>Pokemon Gallery</h1>
      <PokemonGallery />
    </>
  );
}

export { HomePage };
