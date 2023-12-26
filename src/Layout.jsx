import { useEffect, useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

const Layout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // Search useState
  const [search, setSearch] = useState('');
  // Sort useState
  const [sort, setSort] = useState('');
  // Checkbox useState
  const [select, setSelect] = useState('all')


  // Search Function
  const handleSearch = e => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  // Sort Function
  const handleSort = e => {
    setSort(e.target.value);
    console.log(e.target.value);
  }

  //Checkbox function 

  const handleCheckboxChange = e =>{
    const selectedFilter = e.target.value;
    setSelect(selectedFilter);
    console.log(selectedFilter)
  }


  // Filter products
  const filterProducts =
    // Seart filter
    products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toString().toLowerCase().includes(search.toLowerCase())
    ) 
    // Sort filter
    .filter((item) => {
      if (sort) {
        return item.category.toLowerCase() === sort.toLowerCase();
      }
      return true;
    })
    // Select filter
    .filter((item) => {
      if (select === 'all') return true; // Show all products
  
      // Filter by brand based on the selected checkbox value
      return item.brand.toLowerCase() === select.toLowerCase();
    });
  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <div className="mt-5">
        <Content filterProducts={filterProducts} handleSort={handleSort} handleCheckboxChange={handleCheckboxChange} select={select}/>
      </div>
    </div>
  );
};

export default Layout;