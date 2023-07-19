import { useState } from "react";
import Result from "./Result";
import dataTracks from "../assets/json/dataTracks.json";
import DetailMusic from "./DetailMusic";
import useFetch from "./useFetch";
import ChartTracks from "./ChartTracks";
import Loader from "./Loader";
import ControlBar from "./ControlBar"; // Importamos el componente Footer


const SearchBar = () => {

  const [query, setQuery] = useState("");
  let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ee70458364mshd0186ce8e1256d0p15041ajsn2678ff925da5",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const { data, loading, error } = useFetch(url, options);
  
  const [currentSong, setCurrentSong] = useState(null); // Estado para almacenar la canción actual
  const [currentSongData, setCurrentSongData] = useState(null);

  // console.log(dataTracks, "dataTracks");
  // console.log(data, "data");

  // Función para reproducir la canción
  const handlePlaySong = (songData) => {
    const { preview } = songData;
    const audio = new Audio(preview);
    audio.play();

    if (currentSong && currentSong.id === songData.id) {
      setCurrentSong(null); // Si la canción actual es la misma que la que se hizo clic, detener la reproducción
      setCurrentSongData(null); // 
    } else {
      if (currentSong) {
      currentSong.pause(); // Detener la reproducción de la canción anterior
      }
      setCurrentSong(audio); // Almacenar la referencia al objeto Audio de la nueva canción
      setCurrentSongData(songData);
    } 
  };

  return (
    <div className="w-full">
      <div className="m-[1rem]">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search song..."
            className="text-stone-500 text-lg font-normal"
            value={query}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="m-[1rem]">
        {/* <DetailMusic results={ data.data || dataTracks.data} /> */}
        <DetailMusic
          results={data && data.data ? data.data : dataTracks.data}
        />

        <h2>Resultados</h2>
        {/* Muestra el componente Loader mientras se realiza la búsqueda */}
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Muestra los resultados de la búsqueda o ChartTracks según corresponda */}
            {error && <div>Error: {error.message}</div>}
            {query !== "" && data !== null ? (
              <Result results={data.data} onPlay={handlePlaySong} />
            ) : (
              <ChartTracks dataTracks={dataTracks.data} />
            )}
          </>
        )}
      </div>
      {/* Mostrar el footer solo si hay una canción en reproducción */}
      {currentSong && <ControlBar currentSongData={currentSongData} />}
    </div>
  );
};

export default SearchBar;
