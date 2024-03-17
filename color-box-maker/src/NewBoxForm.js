import React, {useState} from "react";
import "./NewBoxForm.css"

const NewBoxForm = ({addBox}) => {

    const initialState = {
        id:"",
        width:"",
        height:"",
        backgroundColor:""
    };
    const [formData, setFormData] = useState(initialState);


    const handleSubmit = (e) => {
        e.preventDefault();  
        addBox(formData);
        setFormData(initialState);
    };




    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]:value
        }));
    };

    return (
        <form data-testid="new-box-form" className="NewFormBox">
            <label htmlFor="width">Width:</label>
            <input type="text" 
                    id="width"
                    placeholder="width" 
                    name="width"
                    value={formData.width}
                    onChange={handleChange} />

            <label htmlFor="height">Height:</label>
            <input type="text" 
                    id="height"
                    placeholder="height" 
                    name="height"
                    value={formData.height}
                    onChange={handleChange} />

            <label htmlFor="backgroundColor">Background color:</label>
            <input type="text" 
                    id="backgroundColor"
                    placeholder="background color"
                    name="backgroundColor" 
                    value={formData.backgroundColor}
                    onChange={handleChange} />
            <button onClick={handleSubmit}> Create box!</button>
        </form>
    );
};

export default NewBoxForm;