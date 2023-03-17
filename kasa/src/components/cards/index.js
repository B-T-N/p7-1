import "./cards.css"
function Card({ cover, title }) {
    return (
        <div className="cards" >
            <img src={cover} alt="logement possible" />
            <h3> {title}</h3>
        </div>
    )
}

export default Card 
