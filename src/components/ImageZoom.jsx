import { useRef, useState, useEffect } from "react";

export const ImageZoom = ({ images }) => {
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(images[0]);

  // 👇 Este useEffect detecta cuando cambia el producto
  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("--display", "block");

    const pointer = {
      x: (event.nativeEvent.offsetX * 100) / container.offsetWidth,
      y: (event.nativeEvent.offsetY * 100) / container.offsetHeight,
    };

    container.style.setProperty("--zoom-x", `${pointer.x}%`);
    container.style.setProperty("--zoom-y", `${pointer.y}%`);
  };

  const handleMouseOut = () => {
    const container = containerRef.current;
    if (container) {
      container.style.setProperty("--display", "none");
    }
  };

  return (
    <div>
      <div
        className="image-zoom-wrapper mb-3"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        style={{
          "--url": `url(${activeImage})`,
          "--zoom-x": "0%",
          "--zoom-y": "0%",
          "--display": "none",
          position: "relative",
        }}
      >
        <img
          key={activeImage}
          src={activeImage}
          alt="Producto"
          className="img-fluid fade-in"
        />
      </div>

      <div className="miniatures d-flex justify-content-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura ${index}`}
            className={`mini-img mx-2 ${activeImage === img ? "active" : ""}`}
            onMouseEnter={() => setActiveImage(img)}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              cursor: "pointer",
              border:
                activeImage === img ? "2px solid #cb6ce6" : "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
};
