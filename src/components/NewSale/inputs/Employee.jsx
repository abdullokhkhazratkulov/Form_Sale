import React, {useState} from 'react'
import productData from '../../../data/data'

const Employee = ({bind}) => {
    const [value, setValue] = useState("");
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };
  return (
    <div className="employee">
        <input
            className="search"
            placeholder="Employee..."
            value={value ? value : bind.value}
            onChange={bind.onChange}
        />
        <div className="dropdown">
            {productData
                .filter((product) => {
                const searchTerm = bind.value?.toLowerCase();
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