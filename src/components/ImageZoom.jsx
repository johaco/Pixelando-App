import { useRef, useState, useEffect } from "react";

export const ImageZoom = ({ images }) => {
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(images[0]);

  // Reinicia imagen principal al cambiar producto
  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  // Agrega control de zoom táctil en móviles
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      if (e.touches.length === 0) return;
      e.preventDefault();
      container.style.setProperty("--display", "block");
      updateZoomPosition(e.touches[0]);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 0) return;
      e.preventDefault();
      updateZoomPosition(e.touches[0]);
    };

    const handleTouchEnd = () => {
      container.style.setProperty("--display", "none");
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeImage]);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("--display", "block");

    const x = (event.nativeEvent.offsetX * 100) / container.offsetWidth;
    const y = (event.nativeEvent.offsetY * 100) / container.offsetHeight;

    container.style.setProperty("--zoom-x", `${x}%`);
    container.style.setProperty("--zoom-y", `${y}%`);
  };

  const handleMouseOut = () => {
    containerRef.current?.style.setProperty("--display", "none");
  };

  const updateZoomPosition = (touch) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) * 100) / container.offsetWidth;
    const y = ((touch.clientY - rect.top) * 100) / container.offsetHeight;

    container.style.setProperty("--zoom-x", `${x}%`);
    container.style.setProperty("--zoom-y", `${y}%`);
  };

  return (
    <div>
      {/* Imagen principal con zoom */}
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

      {/* Miniaturas */}
      <div className="miniatures d-flex justify-content-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura ${index}`}
            className={`mini-img mx-2 ${activeImage === img ? "active" : ""}`}
            onMouseEnter={() => setActiveImage(img)}
            onTouchStart={() => setActiveImage(img)}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              cursor: "pointer",
              border: activeImage === img ? "2px solid #cb6ce6" : "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
};
