import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import locatelist from "../../datas/locatelist.json"
function Gallery(){
    const { id } = useParams();
    const locatepict = locatelist.find((object) => object.id == id)
    const {pictures} = locatepict
    const [locateactu, setCurrent] = useState

    return (
        key ={index}
        <img src= i
        >
        )
}
export default Gallery