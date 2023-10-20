import React, { useState } from 'react';
import ProductData from "./product.json";
import Card from './Card';

function ProductPage() {
  const [search, setSearch] = useState('');

  const filteredProducts = ProductData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {filteredProducts?.map((product, index) => (
        <Card
          key={index}
          name={product.name}
          description={product.description}
          img={product.images}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductPage;
