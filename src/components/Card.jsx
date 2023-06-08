import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="row g-3  artist__info">
          <div className="col-md-3 img-play icon_play">
            <img
              className="img-fluid img__album"
              src="assets/Foxbel-Music/adele-21.jpg"
              alt="..."
              id="info_img"
            />
          </div>
          <div className="col-md-9 pl-5">
            <div className="card-body d-flex flex-column justify-content-around h-100">
              <div className="card__title">
                <h5 className="card-title" id="name_album">
                  Name - Album
                </h5>
                <p className="card__subtitle">
                  Lo mejor de Adele
                  <small className="card__followers">321,123 seguidores</small>
                </p>
              </div>

              <p className="card-text" id="info_description">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

              <div className="card__btn">
                <button type="button" className="btn btn-outline-primary">
                  Reproducir
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Seguir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
