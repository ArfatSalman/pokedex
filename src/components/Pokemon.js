function getPokemonImageFromData(data) {
  const defaultImage =
    'https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png';
  const {
    sprites: { other },
  } = data;
  const officialArtwork = other['official-artwork'];
  return officialArtwork['front_default']
    ? officialArtwork['front_default']
    : defaultImage;
}

function Pokemon(props) {
  const { data } = props;
  if (!data) {
    return null;
  }

  // const { }
  return (
    <div style={{ width: '100%', backgroundColor: 'lightblue' }}>
      {data.name}
      {data.height}
      <img
        src={getPokemonImageFromData(data)}
        width={300}
        alt={'poke ball'}
        height={300}
      />
    </div>
  );
}

export { Pokemon };
