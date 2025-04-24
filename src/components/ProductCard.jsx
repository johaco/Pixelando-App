import React from 'react'

export const ProductCard = ({image, name, price, sale, oldPrice, reviews}) => {
  return (
    <div className="col mb-5">
              <div className="card h-100 position-relative  card-product-tech">
                {sale && (
                  <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                    Sale
                  </div>
                )}
                <img className="card-img-top img-product-tech" src={image} alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder name-product-tech">{name}</h5>
                    {reviews && (
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="bi-star-fill" />
                        ))}
                      </div>
                    )}
                    {oldPrice && (
                      <span className="text-muted text-decoration-line-through me-1">
                        {oldPrice}
                      </span>
                    )}
                    {price}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center btn-product-tech">
                    <a className="btn btn-outline-dark mt-auto btn-detalles-tech" href="#">
                      Ver detalles
                    </a>
                  </div>
                </div>
              </div>
            </div>
  )
}
