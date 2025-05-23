import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";

export const ProductDetailsPage = () => {
  const [isChanging, setIsChanging] = useState(false);

  const handleImageChange = (img) => {
    setIsChanging(true);
    setTimeout(() => {
      setMainImage(img);
      setIsChanging(false);
    }, 100); // le da tiempo a aplicar el efecto
  };

  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);

  const { images, name, brand, description, price, oldPrice } = product;

  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMainImage(images[0]);
  }, [id, images]);

  if (!product) {
    return <div className="container mt-5">Producto no encontrado.</div>;
  }

  const relacionados = products.filter(
    (prod) => prod.category === product.category && prod.id !== product.id
  );

  // URL de WhatsApp con el mensaje predefinido
  const currentUrl = window.location.href;
  const whatsappUrl = `https://wa.me/5492634618976?text=¡Hola! Me interesa el producto *${name}* que vi en tu catálogo: ${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <>
      {/* Detalle del producto */}
      
      <section className="py-5">
        
        <div className="container px-4 px-lg-5 my-5">
          
          <div className="row gx-4 gx-lg-5 align-items-center">
            
            <div className="col-md-8">
              
              <img
                src={mainImage}
                alt={name}
                className={`card-img-top mb-3 smooth-image ${
                  isChanging ? "smooth-image-change" : ""
                }`}
              />

              <div className="d-flex justify-content-center gap-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Mini ${index}`}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      border:
                        img === mainImage
                          ? "2px solid #cb6ce6"
                          : "1px solid #ccc",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => handleImageChange(img)}
                    onClick={() => handleImageChange(img)}
                  />
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <div className="small mb-1 title-marca">{brand}</div>
              <h2 className="display-7 fw-bolder">{name}</h2>
              <div className="fs-1 mb-3">
                {oldPrice && (
                  <span className="text-muted text-decoration-line-through me-2">
                    $ {oldPrice}
                  </span>
                )}
                <span>$ {price}</span>
              </div>
              <p className="" style={{ whiteSpace: 'pre-line' }}>{description}</p>
              <div className="d-flex">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success flex-shrink-0"
                >
                  <i className="bi-whatsapp me-1"></i>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos relacionados */}
      <section className="py-1 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Productos relacionados</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {relacionados.length > 0 ? (
              relacionados
                .slice(0, 4)
                .map((prod, index) => (
                  <ProductCard
                    key={index}
                    id={prod.id}
                    name={prod.name}
                    image={prod.image}
                    price={prod.price}
                    stock={prod.stock}
                    oldPrice={prod.oldPrice}
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
