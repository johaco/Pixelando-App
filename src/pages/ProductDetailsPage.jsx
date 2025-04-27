import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ImageZoom } from "../components/ImageZoom.jsx";

export const ProductDetailsPage = () => {
  const { id } = useParams(); // lee el "id" de la URL
  const product = products.find((prod) => prod.id === id);

  const { images, name, brand, description, price, oldPrice } = product;

  if (!product) {
    return <div className="container mt-5">Producto no encontrado.</div>;
  }

  const relacionados = products.filter(
    (prod) => prod.category === product.category && prod.id !== product.id
  );

  return (
    <>
      {/* Detalle del producto */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
            <ImageZoom images={images} />
            </div>
            <div className="col-md-6">
              <div className="small mb-1 title-marca">{brand}</div>
              <h1 className="display-5 fw-bolder">{name}</h1>
              <div className="fs-5 mb-5">
                {oldPrice && (
                  <span className="text-muted text-decoration-line-through me-2">
                    ${oldPrice}
                  </span>
                )}
                <span>${price}</span>
              </div>
              <p className="lead">{description}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="number"
                  defaultValue="1"
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Productos relacionados</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {relacionados.length > 0 ? (
              relacionados
                .slice(0, 4)
                .map(({ id, name, image, price, stock, oldPrice }, index) => (
                  <ProductCard
                    key={index}
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                    stock={stock}
                    oldPrice={oldPrice}
                  />
                ))
            ) : (
              <p>No hay productos relacionados.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
