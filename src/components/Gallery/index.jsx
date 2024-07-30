import * as React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './gallery.css';
import DatasImages from '../../datas.json';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ImageList, ImageListItem } from '@mui/material';

const GalleryItem = ({ dataImage, index, totalImages }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Link
            to={`/fiche/${dataImage.id}`}
            className={`gallery__item gallery__item--h-${dataImage.span_h} gallery__item--v-${dataImage.span_v} ${inView ? 'appear' : 'hidden'}`}
            aria-label={`Image ${dataImage.alt}`}
            ref={ref}
        >
            <div className={`embed embed--${dataImage.span_h}-${dataImage.span_v}`}>
                <LazyLoadImage loading="lazy" className="image-gallery" src={dataImage.src} alt={dataImage.alt || 'Image'} />
                <span className="photo-number">{totalImages - index}</span>
            </div>
        </Link>
    );
};

const Gallery = React.memo(() => {
    const [category, setCategory] = useState('all');

    // Filtre les images selon la catégorie sélectionnée //
    const filteredImages = category === 'all' ? DatasImages : DatasImages.filter(image => image.category === category);

    // Divise les images filtrées en segments de 11 //
    const chunkSize = 11;
    const chunks = [];
    for (let i = 0; i < filteredImages.length; i += chunkSize) {
        chunks.push(filteredImages.slice(i, i + chunkSize));
    }

    // Inverse l'ordre des segments //
    const reversedChunks = chunks.reverse();

    // Fusionne les segments inversés //
    const reversedDatasImages = reversedChunks.flat();

    const totalImages = reversedDatasImages.length;

    return (
        <div className="container-filters">
            <div className="filter-buttons">
                <button
                    onClick={() => setCategory('all')}
                    className={category === 'all' ? 'active' : ''}
                >
                    Tout
                </button>
                <button
                    onClick={() => setCategory('animalier')}
                    className={category === 'animalier' ? 'active' : ''}
                >
                    Animalier
                </button>
                <button
                    onClick={() => setCategory('hdr')}
                    className={category === 'hdr' ? 'active' : ''}
                >
                    HDR
                </button>
                <button
                    onClick={() => setCategory('macro')}
                    className={category === 'macro' ? 'active' : ''}
                >
                    Macro
                </button>
            </div>
            <div className={`gallery ${category === 'all' ? 'grid-layout' : 'masonry-layout'}`}>
                {category === 'all' ? (
                    reversedDatasImages.map((dataImage, index) => (
                        <GalleryItem key={dataImage.id} dataImage={dataImage} index={index} totalImages={totalImages} />
                    ))
                ) : (
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {reversedDatasImages.map((dataImage, index) => (
                            <ImageListItem key={dataImage.id}>
                                <Link to={`/fiche/${dataImage.id}`} aria-label={`Image ${dataImage.alt}`}>
                                    <LazyLoadImage loading="lazy" className="image-gallery" src={dataImage.src} alt={dataImage.alt || 'Image'} />
                                    <span className="photo-number">{totalImages - index}</span>
                                </Link>
                            </ImageListItem>
                        ))}
                    </ImageList>
                )}
            </div>
        </div>
    );
});

export default Gallery;

