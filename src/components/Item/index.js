import React from 'react';

import './styles.css';

const Item = () => (
    <div className="item">
        <img className="item__image" src="https://www.ikea.com/es/es/images/es_images-es_es-/ikea-decora-tu-sal%C3%B3n-con-nuestros-favoritos-%7C-ikea__1364682272013-s3.png" alt="some random" />
        <div className="item__content">
            <h2 className="item__title"> Jogo de Cama Queen 100% algodão xadrez </h2>
            <span className="item__price"> somente pelo site <span className="item__price-actual">R$ 15,00!</span> <span className="item__price-old"> R$ 18,00 </span> </span>
            <button className="item__reservation-button item__reservation-button--enabled"> Quero reservar! </button>
        </div>
    </div>
);

export { Item };