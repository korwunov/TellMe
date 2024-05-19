import React from "react";

const Dropdown = ({ valuesArray, setCurrentValue }) => {
    
    // const handleValuePick = (value) => {
    //     setCurrentValue('rate', value);
    // }
  
    return (
        <menu>
            {Object.keys(valuesArray).map(value => (
                <button key={value} onClick={() => setCurrentValue(valuesArray[value])}>
                    {value}
                </button>
            ))}            
        </menu>
    );
};

export default Dropdown;