import "./cards.css"
function Card({ cover , title}){
    return (
    <div className = "cards" >
       <img src = {cover} alt ="logement possible"/>
       <h3> {title}</h1>
       </div>
       )}

        export default Card 
