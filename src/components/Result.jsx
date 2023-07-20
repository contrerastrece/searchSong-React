import Music from "./Music";

const Result = ({ results, handlePlaySong }) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-[1rem] pb-[4rem]">
        {results&&results.map((data) => (
          <Music
            key={data.id}
            data={data}
            handlePlaySong={handlePlaySong} // Pasamos la función para controlar la reproducción de la canción
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
