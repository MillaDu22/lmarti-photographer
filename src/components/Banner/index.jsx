import React from "react";
import Portrait from '../../Assets/images/photo-moi.webp';
import "./banner.css";

function Banner () {
    return(
        <div className="banner">
            <div className="container-txt-image">
                <div className="box-txt">
                    <p className= "txt-welcome">
                    </p>
                    <p className="txt-visit">Bonjour, vous êtes là où chaque photo raconte une histoire unique et capture des moments intemporels. 
                        Je suis Ludmilla, une passionnée de la photographie qui voit la beauté dans les moindres détails et cherche à immortaliser 
                        des instants éphémères à travers l'objectif de mon appareil photo.
                        La photographie est pour moi bien plus qu'une simple profession ou un passe-temps. 
                        C'est une manière de partager ma vision du monde et de capturer des émotions brutes et authentiques. 
                        Que ce soit la douceur d'un coucher de soleil, l'intensité d'un regard, ou la sérénité d'un paysage, 
                        chaque cliché est une exploration et une célébration de la beauté qui nous entoure. </p>
                </div>
                <span className="circle">
                    <img className= "portrait-header" src = {Portrait} alt ="portrait" />
                </span>
            </div>
            <h2 className= "welcome">Bienvenue dans mon univers visuel !</h2>
        </div>
    )
}
export default Banner;