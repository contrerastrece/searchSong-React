import play from "../assets/icons/play-solid.svg";
import useFetch from "./useFetch";
const DetailMusic = ({ results }) => {
  const api_Key = "41c12d6e98c1c53d746a05fdc1117348";
  const options = {
    method: "GET",
  };

  let artistName = results[0]?.artist?.name || "Yorsh";
  // console.log(artistName);

  let urlArtistInfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${api_Key}&format=json`;

  // let { data, loading, error } = useFetch(urlArtistInfo, options);
  let { data} = useFetch(urlArtistInfo, options);
  // console.log(urlArtistInfo);
  // console.log(data);
  // console.log(loading);
  // console.log(error);
  // console.log(results);
  return (
    <div className="w-full h-64 relative flex bg-contain bg-right"  style={{
      backgroundImage: `url(${results[0].artist.picture_big})`,
      backgroundRepeat:'no-repeat'
    }}>
      <img
        src={results[0].album.cover_big}
        alt=""
        className="object-contain w-75 h-64"
      />
      <div className="backdrop-blur-[1px] bg-[#EB5757]/50 w-full ">
        
        <div className="text-white text-xl font-bold">
        {results[0].title_short} — {results[0].artist.name}
        </div>

        <div className="text-white text-sm font-normal">
          Lo mejor de {results[0].artist.name}
        </div>
        <div className="text-red-900 text-xs text-white font-normal">
          {/* {data.artist.stats.listeners} seguidores */}
        </div>
        <div className="w-full h-8 text-white text-xs font-normal leading-tight">
          {data?.artist?.bio?.summary || "Biografía no disponible"}
        </div>

       
      </div>

      <div className="w-28 h-8 left-[280px] top-[197px] absolute">
        <button className="w-28 h-8 left-0 top-0 absolute bg-red-400 rounded-full text-white font-normal text-center">
          Reproducir
        </button>
      </div>

      <div className="w-28 h-8 left-[417px] top-[197px] absolute">
        <button className="w-28 h-8 left-0 top-0 absolute border border-rose-500 rounded-full text-red-400 font-normal text-center">
          Seguir
        </button>
      </div>

      <div className="left-[93px] top-[89px] absolute text-white text-7xl font-black">
        <img src={play} alt="" className="bg-red-300 absolute" />
      </div>
    </div>
  );
};

export default DetailMusic;
