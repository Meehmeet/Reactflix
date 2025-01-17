import React from "react";

function InputField({ value, onChange, placeholderText }) {
    return (
        <div className="flex justify-center">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholderText}
                className="border border-gray-300 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default InputField;