import pause from '../assets/icons/pause.svg';
import play from '../assets/icons/play-solid.svg';
import dots from '../assets/icons/dots.svg';


const Music = ({data,onPlay}) => {
  // console.log(data.preview)

  const handleClick = () => {
    onPlay(data); // Llamamos a la función onPlay para reproducir la canción
  }

  return (
    <div className="w-40 h-52 relative cursor-pointer" onClick={handleClick}>
       <img
        className="w-40 h-40"
        src={data.album.cover_medium}
      />
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
        <img src={play} alt="icon-play" className='absolute w-8 h-8 top-[50%] translate-x-[50%] translate-y-[-50%] right-[50%]'/>
      </div>
     
    </div>
  );
};

export default Music;
