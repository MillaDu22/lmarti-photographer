import React, { useState } from 'react';
import './diaporama.css';
import DatasImages from '../../datas.json';

function Diaporama() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousSlide = () => {
        const newIndex = (currentImageIndex - 1 + DatasImages.length) % DatasImages.length;
        setCurrentImageIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentImageIndex + 1) % DatasImages.length;
        setCurrentImageIndex(newIndex);
    };

    // Calcul du numéro d'image actuel pour le compteur (1-indexed) //
    const currentImageNumber = currentImageIndex + 1;

    return (
        <div className="diaporama">
            <div className="slide">
                <img src={DatasImages[currentImageIndex].src} alt={DatasImages[currentImageIndex].alt} />
                <div className="description">
                    {DatasImages[currentImageIndex].description}
                </div>
                <div className="counter">{`${currentImageNumber}/${DatasImages.length}`}</div>
            </div>
            <div className="controls">
                <button className="prev" onClick={goToPreviousSlide}>&larr;</button>
                <button className="next" onClick={goToNextSlide}>&rarr;</button>
            </div>
        </div>
    );
}

export default Diaporama;
