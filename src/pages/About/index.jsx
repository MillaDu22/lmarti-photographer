import React from 'react';
import './about.css'; 
import profilePicture from '../../Assets/images/photo-moi.webp';  

function About() {
    return (
        <div className="AProposPage">
            <div className="intro">
                <img src={profilePicture} alt="Photographer" className="profile-pic" />
                <h1>À propos de moi</h1>
                <p>
                    Bonjour ! Je suis une photographe passionnée avec une simple formation de BEP photographe
                    qui aime la capture de moments uniques et mémorables. Mon loisir couvre une variété de styles 
                    allant de l'animalier aux paysages minimalistes en passant aussi par des voyages dans le temps avec des
                    lieux laissés à l'abandon depuis des décenies où la nature à repris ses droits.
                    En couleur ou noir & blanc.
                </p>
            </div>
            
            <div className="career">
                <h2>Mon parcours</h2>
                <p>
                    J'ai commencé la photographie en tant qu'amatrice passionnée, et au fil des années, j'ai transformé 
                    cette passion en une compétence pour ma profession de web-developer. Je code des sites web, et peux également travailler sur les images.
                </p>
                <p>
                    Mon approche se base sur la créativité, l'authenticité et l'émotion. Je m'efforce de capturer 
                    l'essence de chaque sujet que je photographie, en apportant une touche personnelle à chaque 
                    image.
                </p>
            </div>
            
            <div className="testimonials">
                <h2>Témoignages</h2>
                <div className="testimonial">
                    <p>"Une photographe qui a l'oeil ! Chaque photo capture une émotion. Merci pour ces souvenirs incroyables."</p>
                    <p>- Satisfait</p>
                </div>
                <div className="testimonial">
                    <p>"Son œil pour les détails et sa passion pour la photographie transparaissent dans chaque cliché."</p>
                    <p>- Heureux</p>
                </div>
            </div>

            <div className="contact">
                <h2>Contact</h2>
                <p>Vous pouvez me contacter à l'adresse suivante : <a href="mailto:marti.ludmilla@orange.fr">Ludmilla Marti</a></p>
                <p>Ou par téléphone : +33 6 58 06 28 00</p>
            </div>
        </div>
    );
}

export default About;
