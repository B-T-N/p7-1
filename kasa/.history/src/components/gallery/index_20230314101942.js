import { useParams } from 'react-router-dom';
import locatelist from "../../datas/locatelist.json"
function Gallery(){
    const { id } = useParams();
    const locatepict = locatelist.find((object) => object.id == id)
    const {pictures} = locatepict
    
}
export default Gallery