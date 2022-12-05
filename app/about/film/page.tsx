export default function MoviesIveWatched() {
  return (
    <>
      <h1>Movies I&apos;ve Watched</h1>

      <p>This is a list of movies I&apos;ve watched.</p>

      <ul>
        <li>Star Wars: A New Hope</li>
        <li>Star Wars: The Empire Strikes Back</li>
        <li>Star Wars: Return of the Jedi</li>
        <li
          style={{
            textDecoration: "line-through",
          }}
        >
          Star
        </li>
      </ul>
    </>
  );
}
