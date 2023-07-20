import { useState } from "react";
import Result from "./Result";
import dataTracks from "../assets/json/dataTracks.json";
import DetailMusic from "./DetailMusic";
import useFetch from "./useFetch";
// import ChartTracks from "./ChartTracks";
import Loader from "./Loader";
import ControlBar from "./ControlBar";
import search from "../assets/icons/search.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [currentSong, setCurrentSong] = useState(null); // Estado para la canción actualmente seleccionada

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

  const handlePlaySong = (songData) => {
    if (currentSong && currentSong.id === songData.id) {
      setCurrentSong(null); // Si la canción actual es la misma que la que se hizo clic, detener la reproducción
    } else {
      setCurrentSong(songData); // Si se hizo clic en una nueva canción, iniciar la reproducción
    }
  };

  return (
    <div className="w-full max-w-[1200px] min-w-[768px]">
      <div className="m-[2rem]">
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="relative"
        >
          <input
            type="text"
            placeholder="search song..."
            className="text-[#828282] text-lg font-normal w-full outline pl-4 outline-[1px] rounded-[1rem] h-[2rem]"
            value={query}
            onChange={handleChange}
          />
          <img
            src={search}
            alt="search-icon"
            className="absolute w-[1rem] right-[1rem] top-[0] translate-y-1/2"
          />
        </form>
      </div>

      <div className="m-[2rem]">
        <DetailMusic
          results={data && data.data ? data.data : dataTracks.tracks.data}
        />

        <h2>Ranking Top</h2>
        {loading ? (
          <Loader />
          ) : (
            <>
            {error && <div>Error: {error.message}</div>}
            <Result results={data.data || dataTracks.tracks.data} handlePlaySong={handlePlaySong} />
            {/* {query !== "" && data !== null ? (
            <Result results={data.data || dataTracks.data} handlePlaySong={handlePlaySong} />
            ) : (
              <ChartTracks dataTracks={dataTracks.data} />
            )} */}
          </>
        )}
      </div>

      {/* Pasamos la información de la canción actual al componente ControlBar */}
      {currentSong && <ControlBar currentSongData={currentSong} />}
    </div>
  );
};

export default SearchBar;
