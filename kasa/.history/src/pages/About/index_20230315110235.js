import "./About.css"
import bannerimg from "../../asssets/photos nature/apropos.png"
function About(){
    return(
        <main>
            <img id="aboutbanner" src={bannerimg} alt="about's banner" />
<div className="summary">
            <details><summary><span className="aboutname">Fiabilité</span></summary>
            <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées 
                par nos équipes  </p></details>
                
                <details><summary><span className="aboutname">Fiabilité</span>Respect</summary>
            <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comprotement  discriminatoire ou de perturbation du voisinage 
                entrainera une exclusion de notre plateforme</p></details>

                <details><summary><span className="aboutname">Fiabilité</span>Service</summary>
            <p>
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                 N'hésitez pas à nous contacter si vous avez la moindre question </p></details>
                 
                <details><summary>Securité</summary>
            <p>
                La Securité est la priorité de Kasa.
                 Aussi bien pour nos hôtes que pour les voyageurs, 
                 chaques logement correspond aux critères de sécurité établis par nos services.
                  En laissant une note aussi bien à l'hôte qu'au locataire, 
                  cela permet à nos équipes de vérifier que les standards sont bien respectés.
                   Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.  </p></details>
       

                   </div>
        </main>
    )
}
export default About