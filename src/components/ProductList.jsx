// src/components/ProductList.jsx
import { ProductCard } from './ProductCard';

export const ProductList = ({ products }) => {
  return (
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {products.map(({name, image, price, stock, oldPrice, id}, index) => (
        <ProductCard
          key={index}
          id={id}
          name={name}
          image={image}
          price={price}
          stock={stock}
          oldPrice={oldPrice}
        />
      ))}
    </div>
  );
};
