import React from 'react';
import './about.css'; 
import profilePicture from '../../Assets/images/photo-moi.webp';  
import samplePhoto1 from '../../Assets/images/Zoulou.jpg'; 
import samplePhoto2 from '../../Assets/images/Zoulou4.jpg';  

function About() {
    return (
        <div className="AProposPage">
            <div className="intro">
                <img src={profilePicture} alt="Photographer" className="profile-pic" />
                <h1>À propos de moi</h1>
                <p>
                    Bonjour ! Je suis une photographe passionnée avec plus de 10 ans d'expérience 
                    dans la capture de moments uniques et mémorables. Mon travail couvre une variété de styles 
                    allant de l'animalier aux paysages minimalistes.
                </p>
            </div>
            
            <div className="career">
                <h2>Mon parcours</h2>
                <p>
                    J'ai commencé la photographie en tant qu'amatrice passionnée, et au fil des années, j'ai transformé 
                    cette passion en une compétence dans ma nouvelle profession. J'ai travaillé avec divers clients allant de particuliers à des 
                    entreprises, en couvrant des événements, des projets artistiques.
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
                    <p>"Une photographe exceptionnelle ! Chaque photo est une œuvre d'art. Merci pour ces souvenirs incroyables."</p>
                    <p>- Client satisfait</p>
                </div>
                <div className="testimonial">
                    <p>"Son œil pour les détails et sa passion pour la photographie transparaissent dans chaque cliché."</p>
                    <p>- Client heureux</p>
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
