import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export const PopularProducts = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
      <h2 className="text-start title-product-tech">Populares</h2>
      <hr className="line-tech"/>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map(({id, image, name, price, popular, stock, oldPrice}, index) => (
            popular && (
              <ProductCard id={id} image={image} name={name} price={price} stock={stock} key={index} oldPrice={oldPrice}/>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
