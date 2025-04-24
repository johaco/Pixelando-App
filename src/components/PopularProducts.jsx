import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export const PopularProducts = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map(({image, name, price, popular}, index) => (
            popular && (
              <ProductCard image={image} name={name} price={price} key={index}/>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
