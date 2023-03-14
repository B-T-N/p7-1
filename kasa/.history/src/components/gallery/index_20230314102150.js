import { useParams } from 'react-router-dom';
import React, { useParams } from 'react';
import locatelist from "../../datas/locatelist.json"
function Gallery(){
    const { id } = useParams();
    const locatepict = locatelist.find((object) => object.id == id)
    const {pictures} = locatepict
    const [locateactu, setCurrent] = userState
}
export default Gallery