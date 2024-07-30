import React, { useState, useEffect, useCallback } from 'react';
import './diaporama.css';
import DatasImages from '../../datas.json';

function Diaporama() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    // Fonction pour aller à l'image précédente //
    const goToPreviousSlide = useCallback(() => {
        setFade(false);
        const newIndex = (currentImageIndex - 1 + DatasImages.length) % DatasImages.length;
        setCurrentImageIndex(newIndex);
        setTimeout(() => setFade(true), 50); // Réactiver l'effet de fondu peu de temps après
    }, [currentImageIndex]);

    // Fonction pour aller à l'image suivante //
    const goToNextSlide = useCallback(() => {
        setFade(false);
        const newIndex = (currentImageIndex + 1) % DatasImages.length;
        setCurrentImageIndex(newIndex);
        setTimeout(() => setFade(true), 50); // Réactiver l'effet de fondu peu de temps après
    }, [currentImageIndex]);

    // Utilisation useEffect pour automatiser le changement de slide //
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                goToNextSlide();
                setFade(true);
            }, 1000); // Temps pour la transition de fondu //
        }, 8000); // Durée totale de chaque slide (temps de lecture + temps de transition) //

        return () => clearInterval(interval);
    }, [goToNextSlide]);

    // Calcul du numéro d'image actuel pour le compteur (commençant à 1) //
    const currentImageNumber = currentImageIndex + 1;

    return (
        <div className="diaporama">
            <div className="slide" onMouseEnter={() => setFade(false)} onMouseLeave={() => setFade(true)}>
                <img
                    className={`tof-diapo ${fade ? 'fade-in' : 'fade-out'}`}
                    src={DatasImages[currentImageIndex].src}
                    alt={DatasImages[currentImageIndex].alt}
                />
                <div className="counter">{`${currentImageNumber}/${DatasImages.length}`}</div>
                <div className="controls">
                    <button className="prev" onClick={goToPreviousSlide}>&larr;</button>
                    <button className="next" onClick={goToNextSlide}>&rarr;</button>
                </div>
                <div className="description">
                    {DatasImages[currentImageIndex].description}
                </div>
            </div>
        </div>
    );
}

export default Diaporama;



