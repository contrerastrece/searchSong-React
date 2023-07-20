import { useState } from "react";
import pause from "../assets/icons/pause.svg";
import play from "../assets/icons/play-solid.svg";
import dots from "../assets/icons/dots.svg";

const Music = ({ data, handlePlaySong }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si la canción está en reproducción

  // Función para manejar el clic en el componente Music
  const handleMusicClick = () => {
    setIsPlaying(!isPlaying);
    handlePlaySong(data); // Llamamos a la función pasada por prop para controlar la reproducción de la canción
  };

  return (
    <div
      className="w-40 h-52 relative cursor-pointer"
      onClick={handleMusicClick}
    >
      <img className="w-40 h-40" src={data.album.cover_medium} />
      <div className=" text-neutral-600 text-sm font-bold truncate">
        {data.title_short}
      </div>
      <div className=" text-zinc-500 text-xs font-normal">
        {data.artist.name}
      </div>

      <div className="w-4 h-1 left-[152px] top-[8px] absolute origin-top-left rotate-90">
        <img src={dots} alt="" />
      </div>
      <div className="w-40 h-40 absolute top-0  text-4xl font-black hover:scale-150">
        <img
          src={isPlaying ? pause : play}
          alt="icon-play"
          className="absolute w-8 h-8 top-[50%] translate-x-[50%] translate-y-[-50%] right-[50%]"
        />
      </div>
     
    </div>
  );
};

export default Music;
