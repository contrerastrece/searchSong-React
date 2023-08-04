import { createContext, useState } from "react";

const SongContext = createContext();

const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlaySong = (songData) => {
    if (currentSong && currentSong.id === songData.id) {
      setCurrentSong(null); // Si la canción actual es la misma que la que se hizo clic, detener la reproducción
    } else {
      setCurrentSong(songData); // Si se hizo clic en una nueva canción, iniciar la reproducción
    }
  };

  const data = { handlePlaySong, currentSong};
  return <SongContext.Provider value={data}>{children}</SongContext.Provider>;
};

export {SongProvider};

export default SongContext;