import { useParams } from 'react-router-dom';
import locatelist from "../../datas/locatelist.json"
function Gallery(){
    const { id } = useParams();
    const locatepict = locatelist.find(o)
}
export default Gallery