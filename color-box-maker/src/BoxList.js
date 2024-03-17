import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";
import "./BoxList.css"

const BoxList = () => {

    const [box, setBox] = useState([]);
    
    
    const remove = (id) => {
        setBox(((prevBox) => prevBox.filter(box => box.id !==id)))
    }

    const addBox = (box) => {
        const id = uuid()
        let newBox = {
            ...box,
            id
        }
        setBox((prevBox) => [...prevBox, newBox]);
    }

    return (
        <div>
            <h1> Create a box!</h1>
            <NewBoxForm addBox={addBox} className="NewBoxForm" remove={remove} />
            <div className="BoxList">
                {box.map(({id, height, width, backgroundColor}) =>
                    <Box id={id} 
                        height={height}
                        width={width}
                        backgroundColor={backgroundColor}
                        remove={remove}
                    />)}
            </div>
        </div>
    )
};

export default BoxList;