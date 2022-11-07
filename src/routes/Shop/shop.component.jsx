import { Fragment, useState, useEffect, useMemo } from "react";
import axios from "axios";

import DtPicker from "../../components/datepicker/range-dtpicker.component";
import TableFormat from "../../components/table/table.component";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;

      console.log(response.data);
      setProducts(products);
    }
  };

  const data = useMemo(() => [...products], [products]);

  const columns = useMemo(
    () => products[0] ? Object.keys(products[0]).filter((key) => key !== 'rating').map((key)=>{
      return {Header:key, accessor :key};
    }) : [],
    [products]
  );



  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>User</h1>
      {/* <DtPicker /> */}
      <input type="text" name="searchbox" id="search" />
      <TableFormat columns={columns} data={data} />
    </>
  );
};

export default Shop;
