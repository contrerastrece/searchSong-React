// import play from "../assets/icons/play-solid.svg";
import { useContext, useEffect, useState } from "react";
import SongContext from "../context/SongContext";

const DetailArtist = ({ dataSong }) => {
  const {currentSong}=useContext(SongContext);
  // console.log(dataSong)
  let artistName = currentSong?.artist?.name||dataSong[0].artist.name;
  const initialData = {
    artist: {
      name: "",
    },
    bio: {
      summary: "",
    },
    stats: {
      listners: "",
    },
  };
  const [dataArtist, setDataArtist] = useState(currentSong||initialData);

  console.log(currentSong);
  console.log(dataArtist);
  

  const fetchBioArtist = async () => {
    const api_Key = "41c12d6e98c1c53d746a05fdc1117348";
    const options = {
      method: "GET",
    };
    let urlArtistInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${api_Key}&format=json`;
  
    const response = await fetch(urlArtistInfo, options);
    const data = await response.json();
    setDataArtist(data.artist);
    
  };
  
  useEffect(() => {
    fetchBioArtist(artistName);
    
  }, [currentSong]);

 

  return (
    <div className="min-w-[320px] h-auto w-[calc(100%-4rem)] relative flex bg-cover bg-center ">
      <img
        src={currentSong?.artist?.picture_big||dataSong[0].artist.picture_big}
        alt=""
        className="object-cover w-[80%] max-w-[300px] md:w-[18rem] h-auto  "
        loading="lazy"
      />

      {/* backgroundImge */}
      <div className="sm:w-full sm:h-auto hidden sm:block relative">
        <div className="absolute w-full border h-full bg-cover bg-center bg-no-repeat"  style={{
          backgroundImage: `url(${currentSong?.album?.cover_big||dataSong[0].album.cover_big})`,
          opacity:'0.45'
        }}></div>
        <div className="sm:w-full sm:h-full sm:bg-[#A70000]/40 sm:p-[2rem] sm:relative">
          <div className="text-white text-xl font-bold ">
            {currentSong?.title_short||dataSong[0].title_short} — {currentSong?.artist?.name||dataSong[0].artist.name}
          </div>

          <div className="flex gap-[1rem] mb-[1rem] items-center">
            <p className="text-white text-[0.85rem] font-normal">
              Lo mejor de {dataArtist.name}
            </p>
            <span className="text-[0.65rem] text-[#662323] font-normal">
              {dataArtist.stats.listeners} seguidores
            </span>
          </div>

          <p className="w-full h-8 text-white text-xs font-normal leading-tight">
            {dataArtist.bio.summary}
          </p>

          {/* buttons */}
          <div className="absolute flex gap-[2rem] bottom-[1rem] translate-x-1/2 right-[50%]">
            <button className="w-28 h-8 bg-red-400 rounded-full text-white font-normal text-center">
              Reproducir
            </button>

            <button className="w-28 h-8 border border-rose-400 bg-[#fff]/70 rounded-full text-red-400 font-normal text-center">
              Seguir
            </button>
          </div>
        </div>
      </div>

      {/* <div className="left-[93px] top-[89px] relative text-white text-7xl font-black">
        <img src={play} alt="" className="bg-red-300 absolute" />
      </div> */}
    </div>
  );
};

export default DetailArtist;
