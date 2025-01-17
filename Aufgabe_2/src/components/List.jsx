import React from "react";

function List({ rows }) {
    return (
        <div className="flex flex-col items-start">
            <table className="table-auto border-collapse border border-gray-300 bg-teal-500 text-white w-1/4 -ml-2">
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="p-4 text-left border-b border-gray-300 hover:bg-teal-600" >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;