import { useEffect, useState } from "react";
import Item from "./Item";

const Content = ({ filterProducts, handleSort, handleCheckboxChange, select }) => {
    const [buttons, setbuttons] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch('./category.json')
            .then(res => res.json())
            .then(data => setbuttons(data))
    }, [])

    const handleClick = (category) => {
        setSelectedCategory(category);
    }
    const handleAllClick = () => {
        setSelectedCategory('');
    }
    const filteredProductsByCategory = selectedCategory ?
        filterProducts.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase()) :
        filterProducts;
    return (
        <div className="px-5">
            <div className="flex items-center justify-between w-full h-[100px]">
                <div className="flex items-center justify-center gap-3">
                    <label>
                        <input
                            type="checkbox"
                            value="all"
                            className="me-3"
                            checked={select === "all"}
                            onChange={handleCheckboxChange}
                        />
                        All
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="h&m"
                            className="me-3"
                            checked={select === "h&m"}
                            onChange={handleCheckboxChange}
                        />
                        H&M
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="samsung"
                            className="me-3"
                            checked={select === "samsung"}
                            onChange={handleCheckboxChange}
                        />
                        Samsung
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="nike"
                            className="me-3"
                            checked={select === "nike"}
                            onChange={handleCheckboxChange}
                        />
                        Nike
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="apple"
                            className="me-3"
                            checked={select === "apple"}
                            onChange={handleCheckboxChange}
                        />
                        Apple
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="fossil"
                            className="me-3"
                            checked={select === "fossil"}
                            onChange={handleCheckboxChange}
                        />
                        Fossil
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="calvin klein"
                            className="me-3"
                            checked={select === "calvin klein"}
                            onChange={handleCheckboxChange}
                        />
                        Calvin Klein
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="microsoft"
                            className="me-3"
                            checked={select === "microsoft"}
                            onChange={handleCheckboxChange}
                        />
                        Microsoft
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="contigo"
                            className="me-3"
                            checked={select === "contigo"}
                            onChange={handleCheckboxChange}
                        />
                        Contigo
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="levi's"
                            className="me-3"
                            checked={select === "levi's"}
                            onChange={handleCheckboxChange}
                        />
                        Levi's
                    </label>
                </div>
                <div className="flex items-center gap-5">
                    <p>Sort By:</p>
                    <select name="isAvailable" className="p-3 border w-52 border-slate-100" onChange={handleSort}>
                        <option value="">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="footwear">Footwear</option>
                        <option value="accessories">Accessories</option>
                        <option value="kitchen">Kitchen</option>
                    </select>
                </div>
            </div>
            <div className="my-10 flex items-center justify-center gap-5">
                <div className="flex items-center justify-center gap-3">
                    <button onClick={handleAllClick} className="btn btn-neutral">All</button>
                    {buttons.map(buttonItem => (
                        <button
                            onClick={() => handleClick(buttonItem.category)}
                            className="btn btn-neutral"
                            key={buttonItem.id}
                        >
                            {buttonItem.category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 container mx-auto px-5">
                {
                    filteredProductsByCategory.map(item => <Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Content;