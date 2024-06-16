import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';
import DatasImages from '../../datas.json';

function Gallery() {
    return (
        <div className="gallery">
            {DatasImages.map((dataImage) => (
                <Link
                    to={`/fiche/${dataImage.id}`}
                    className={`gallery__item gallery__item--h-${dataImage.span_h} gallery__item--v-${dataImage.span_v}`}
                    key={dataImage.id}
                >
                    <div className={`embed embed--${dataImage.span_h}-${dataImage.span_v}`}>
                        <img className="image-gallery" src={dataImage.src} alt={dataImage.alt} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Gallery;

