import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DatasImages from '../../datas.json';
import './fiche.css'; // Créez ce fichier pour les styles spécifiques

function Fiche() {
    const { id } = useParams();
    const imageData = DatasImages.find(dataImage => dataImage.id === parseInt(id, 10));

    if (!imageData) {
        return <div>Image non trouvée</div>;
    }

    return (
        <div className="fiche">
            <Link to="/" className="back-link">← Retour à la galerie</Link>
            <div className="image-container">
                <img className="image-large" src={imageData.src} alt={imageData.alt} />
                <p className="description">{imageData.description}</p>
            </div>
        </div>
    );
}

export default Fiche;