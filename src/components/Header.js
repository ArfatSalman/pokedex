function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
      }}
    >
      <img
        src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"
        alt="poke ball"
        height="75px"
      />{' '}
      <h1>My Pokedex</h1>
    </header>
  );
}

export { Header };
