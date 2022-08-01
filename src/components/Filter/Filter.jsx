import React from "react";


const Filter = ({ filter, onFilterChange }) => {
    
    return (
        <div>
        <label>
            Filter by name:
            <input type="text" value={filter} onChange={onFilterChange} />
        </label>
        </div>
    );
}
    
export default Filter;