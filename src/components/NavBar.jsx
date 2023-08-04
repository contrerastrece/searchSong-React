const NavBar = () => {
  return (
    <div className="w-0 lg:sticky lg:top-0 lg:h-screen bg-[#662323] lg:min-w-[300px] lg:p-[1rem]">
        <ul>
          <li className="text-white text-xl font-bold">
            <a href="#">Mi Librería</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="#">Recientes</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="#">Artistas</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="#">Albums</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="#">Canciones</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="#">Estaciones</a>
          </li>
        </ul>
        <hr />
        <br />
        <ul>
          <li className="text-white text-xl font-bold">
            <a href="">Playlist</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="">Metal</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="">Para bailar</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="">Rock 90s</a>
          </li>
          <li className="text-white text-base font-normal">
            <a href="">Baladas</a>
          </li>
        </ul>

        {/* <div className="w-1 h-5 left-0 top-[171px] absolute bg-red-400" /> */}
    
    </div>
  );
};

export default NavBar;
