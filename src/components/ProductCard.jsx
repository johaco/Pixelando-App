import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  image,
  name,
  price,
  oldPrice,
  stock,
}) => {
  return (
    <div className="col mb-5">
      <div className="card h-100 position-relative  card-product-tech">
        {/* tag */}
          <div
            className={`position-absolute badge ${stock ? "bg-success" : "bg-primary"}`}
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            {
              stock ? (
                <span className="stock-product-tech">En stock</span>
              ) : (
                <span className="stock-product-tech">Por encargue</span>
              )
            }
          </div>
        
        <img className="card-img-top img-product-tech" src={image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder name-product-tech">{name}</h5>
            {oldPrice && (
              <span className="text-muted text-decoration-line-through me-1 old-price-product-tech">
                $ {oldPrice}
              </span>
            )}
            $ {price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center btn-product-tech">
            <Link
              className="btn btn-outline-dark mt-auto btn-detalles-tech"
              to={`/producto/${id}`}
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
