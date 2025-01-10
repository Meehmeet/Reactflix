import React from "react";

function InputField({ value, onChange, placeholderText }) {
    return (
        <div className="input-container">
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholderText} />
        </div>
    );
}

export default InputField;