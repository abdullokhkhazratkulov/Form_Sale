import React, {useState} from 'react'
import productData from '../../data/data'

const NewSale = () => {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(false);
  return (
    <div className="new_sale">
        <button onClick={() => setActive(!active)}> Add New Sale</button>
        <div className={active ? 'd-block' : 'd-none'} >   
            <div>
                <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toUpperCase())}
                />
                <ul className="list">
                        {productData.filter((asd) =>
                    asd.employeeName.toUpperCase().includes(query)
                    ).map((product) => (
                    <li className="listItem" key={product.id}>
                        {product.employeeName}
                    </li>
                    ))}
                </ul>
            </div>
            <div className="forms d-flex flex-column">
                <div class="input-group mb-3 w-25">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                <input className="search"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value.toUpperCase())} type="text" class="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <div class="input-group mb-3 w-25">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>

                <div class="input-group mb-3 w-25">
                <button class="btn btn-outline-secondary" type="button">Button</button>
                <input type="text" class="form-control" aria-label="Example text with two button addons" />
                </div>

                <div class="input-group w-25">
                <input type="text" class="form-control"  aria-label="Recipient's username with two button addons" />
                <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewSale