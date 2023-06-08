import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="panel__nav">
        <img
          src="assets/Foxbel-Music/foxbel-music@2x.png"
          alt=""
          className="panel__logo"
        />

        <ul className="panel__section">
          <li className="nav-item">
            <h3 className="playlist">Libreria</h3>
            <ul>
              <li className="playlist__item">Recientes</li>
              <li className="playlist__item">Artistas</li>
              <li className="playlist__item">Álbunes</li>
              <li className="playlist__item">Canciones</li>
              <li className="playlist__item">Estaciones</li>
            </ul>
          </li>
          <li className="nav-item">
            <h3 className="playlist">Playlist</h3>
            <ul>
              <li className="playlist__item">Metal</li>
              <li className="playlist__item">Para Bailar</li>
              <li className="playlist__item">Rocks 90s</li>
              <li className="playlist__item">Baladas</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
