import React, {useState} from 'react'
import productData from '../../../data/data'

const Client = ({bind}) => {
    const [value, setValue] = useState("");
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };
  return (
    <div className="client">
        <input
            className="search"
            placeholder="Client Name..."
            value={value ? value : bind.value}
            onChange={bind.onChange}
        />
            <div className="dropdown">
                {productData
                    .filter((product) => {
                    const searchTerm = bind.value?.toLowerCase();
                    const clientName = product.clientName.toLowerCase();
                    return (
                        searchTerm &&
                        clientName.startsWith(searchTerm) &&
                        clientName !== searchTerm
                    );
                    })
                    .map((product) => (
                    <div
                        onClick={() => onSearch(product.clientName)}
                        className="dropdown-row"
                        key={product.clientName}
                    >
                        {product.clientName}
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Client