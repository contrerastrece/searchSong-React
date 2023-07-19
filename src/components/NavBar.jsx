const NavBar = () => {
  return (
    <div className="w-80 relative bg-[#662323]">
      <div className="w-80 fixed top-0 left-0 bg-blue-200">
        <div className="left-[40px] top-[139px] absolute text-white text-xl font-bold">
          Mi Librería
        </div>
        <div className="left-[40px] top-[171px] absolute text-red-400 text-base font-bold">
          Recientes
        </div>
        <div className="left-[40px] top-[199px] absolute text-white text-base font-normal">
          Artistas
        </div>
        <div className="left-[41px] top-[227px] absolute text-white text-base font-normal">
          Álbums
        </div>
        <div className="left-[41px] top-[255px] absolute text-white text-base font-normal">
          Canciones
        </div>
        <div className="left-[41px] top-[283px] absolute text-white text-base font-normal">
          Estaciones
        </div>
        <div className="left-[40px] top-[333px] absolute text-white text-xl font-bold">
          Playlist
        </div>
        <div className="left-[40px] top-[365px] absolute text-white text-base font-normal">
          Metal
        </div>
        <div className="left-[40px] top-[393px] absolute text-white text-base font-normal">
          Para bailar
        </div>
        <div className="left-[40px] top-[421px] absolute text-white text-base font-normal">
          Rock 90s
        </div>
        <div className="left-[40px] top-[449px] absolute text-white text-base font-normal">
          Baladas
        </div>
        <div className="w-1 h-5 left-0 top-[171px] absolute bg-red-400" />
      </div>
    </div>
  );
};

export default NavBar;
