import React, {useState} from 'react'
import productData from '../../../data/data'

const Employee = () => {
    const [value, setValue] = useState("");
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };
  return (
    <div className="employee">
        <input
            className="search"
            placeholder="Search..."
            value={value} onChange={onChange}
            />
            <div className="dropdown">
                {productData
                    .filter((product) => {
                    const searchTerm = value.toLowerCase();
                    const employeeName = product.employeeName.toLowerCase();
                    return (
                        searchTerm &&
                        employeeName.startsWith(searchTerm) &&
                        employeeName !== searchTerm
                    );
                    })
                    .map((product) => (
                    <div
                        onClick={() => onSearch(product.employeeName)}
                        className="dropdown-row"
                        key={product.employeeName}
                    >
                        {product.employeeName}
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Employee