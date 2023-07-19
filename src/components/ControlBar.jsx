import play from "../assets/icons/play-solid.svg";
import next from "../assets/icons/next.svg";
import prev from "../assets/icons/prev.svg";
import pause from "../assets/icons/pause.svg";
import { useState, useRef } from "react";

const ControlBar = ({ currentSongData }) => {
  console.log(currentSongData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // El volumen inicial es 0.5 (50%)

  const audioRef = useRef(null); // Referencia al elemento de audio

  // Función para reproducir o pausar la música
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

  return (
    <div className="w-full h-24 fixed bottom-0 left-0 right-0 shadow shadow-inner bg-rose-500">
      <div className="w-14 h-14 left-[620px] top-[20px] absolute">
        <button className="w-14 h-14 flex justify-center bg-red-400 rounded-full" onClick={handlePlayPause}>
          <img src={isPlaying?play:pause} alt="icon-pause" className={`w-[18px] ${isPlaying?"":"hidden"}`} />
          <img src={play} alt="icon-play" className={`w-[18px] ${isPlaying?"hidden":""}`}/>
        </button>
      </div>
      <img
        className="w-24 h-24 left-0 top-0 absolute"
        src={currentSongData.album.cover_medium}
        alt={currentSongData.album.tile}
      />
      <div className="left-[120px] top-[24px] absolute text-white text-sm font-bold">
        {currentSongData.title}
      </div>
      <div className="left-[120px] top-[50px] absolute text-white text-xs font-normal">
        {currentSongData.artist.name} - {currentSongData.album.title}
      </div>

      <div className="w-24 h-5 left-[1110px] top-[40px] absolute">
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
