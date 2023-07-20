import { useState, useRef, useEffect } from "react";
import play from "../assets/icons/play-solid.svg";
import pause from "../assets/icons/pause.svg";
import next from '../assets/icons/next.svg';
import prev from '../assets/icons/prev.svg';

const ControlBar = ({ currentSongData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioRef = useRef(null);

  // Función para controlar la reproducción de la canción
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Función para controlar el volumen
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    // Si la canción actual cambia, cargamos la nueva canción
    if (currentSongData) {
      setIsPlaying(true);
      audioRef.current = new Audio(currentSongData.preview);
      audioRef.current.play();

      // Cuando la canción termine, cambiamos el estado para mostrar el icono de Play
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }

    // Limpieza al desmontar el componente
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", () => {});
      }
    };
  }, [currentSongData]);

  return (
    <div className="w-full h-24 fixed bottom-0 left-0 right-0 shadow shadow-inner bg-rose-500">
      <div className="w-14 h-14 left-[620px] top-[20px] absolute">
        <button
          className="w-14 h-14 flex justify-center bg-red-400 rounded-full"
          onClick={handlePlayPause}
        >
          <img
            src={isPlaying ? pause : play}
            alt="icon-pause"
            className={`w-[18px] ${isPlaying ? "" : "hidden"}`}
          />
          <img
            src={play}
            alt="icon-play"
            className={`w-[18px] ${isPlaying ? "hidden" : ""}`}
          />
        </button>
      </div>
      <img
        className="w-24 h-24 left-0 top-0 absolute"
        src={currentSongData.album.cover_medium}
        alt={currentSongData.album.title}
      />
      <div className="left-[120px] top-[24px] absolute text-white text-sm font-bold">
        {currentSongData.title}
      </div>
      <div className="left-[120px] top-[50px] absolute text-white text-xs font-normal">
        {currentSongData.artist.name} - {currentSongData.album.title}
      </div>

      <div className="w-24 h-5 left-[1110px] top-[40px] absolute">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-5 left-0 top-0 absolute bg-white rounded-full border border-red-400 border-opacity-20"
        />
      </div>
      <div className="left-[1250px] top-[32px] absolute text-white text-4xl font-black"></div>
      <div className="w-9 h-9 left-[700px] top-[32px] absolute">
        <button className="w-9 h-9 left-0 top-0 absolute ">
          <img src={next} alt="" />
        </button>
      </div>
      <div className="origin-top-left rotate-180 w-9 h-9 left-[500px] top-[32px] absolute">
        <button className="w-9 h-9 left-0 top-0 absolute origin-top-left rotate-180">
          <img src={prev} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ControlBar;
