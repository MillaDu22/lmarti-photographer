import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './gallery.css';
import DatasImages from '../../datas.json';

const Gallery = React.memo(() =>  {
    return (
        <div className="gallery">
            {DatasImages.map((dataImage, index) => (
                <Link
                    to={`/fiche/${dataImage.id}`}
                    className={`gallery__item gallery__item--h-${dataImage.span_h} gallery__item--v-${dataImage.span_v}`}
                    key={dataImage.id}
                    aria-label={`Image ${dataImage.alt}`}
                >
                    <div className={`embed embed--${dataImage.span_h}-${dataImage.span_v}`}>
                        <LazyLoadImage loading="lazy" className="image-gallery" src={dataImage.src} alt={dataImage.alt || 'Image'}/>
                        <span className="photo-number">{index + 1}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
})

export default Gallery;

