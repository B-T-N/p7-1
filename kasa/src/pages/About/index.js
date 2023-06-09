import "./About.css"
import bannerimg from "../../asssets/photos nature/apropos.png"
function About() {
    return (
        <main>
            <img id="aboutbanner" src={bannerimg} alt="about's banner" />
            <div className="summary">
                <details><summary><span className="aboutname">Fiabilité</span></summary>
                    <p className="text-about">
                        Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées
                        par nos équipes.
                    </p></details>

                <details><summary><span className="aboutname">Respect</span></summary>
                    <p className="text-about">
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du
                        voisinage entraînera une exclusion de notre plateforme.
                    </p></details>

                <details><summary><span className="aboutname">Service</span></summary>
                    <p className="text-about">
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                        N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p></details>

                <details><summary><span className="aboutname">Securité</span></summary>
                    <p className="text-about">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services.
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
                        de vérifier que les standards sont bien respectés.
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p></details>


            </div>
        </main>
    )
}
export default About