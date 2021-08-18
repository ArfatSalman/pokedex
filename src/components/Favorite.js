function Favorite() {
  const favs = ['bulb', 'char'];
  return (
    <div>
      {favs.map((pokemon) => {
        return <div>{pokemon}</div>;
      })}
    </div>
  );
}

export { Favorite };
