import React from "react";
import "./Box.css"
const Box = ({id, backgroundColor, width, height, remove}) => {

    return (
        <div className="box" id={id} data-testid="box-component"
            style={{
                backgroundColor:backgroundColor,
                height:height,
                width:width
            }}>            
            <button className="btn" onClick={() => remove(id)}> X </button>
        </div>
    )
}


export default Box;