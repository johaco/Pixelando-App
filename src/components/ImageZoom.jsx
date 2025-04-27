import React, { useRef } from "react";

export const ImageZoom = ({ src, alt }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty('--display', 'block');

    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / container.offsetWidth) * 100;
    const y = ((event.clientY - rect.top) / container.offsetHeight) * 100;

    container.style.setProperty('--zoom-x', `${x}%`);
    container.style.setProperty('--zoom-y', `${y}%`);
  };

  const handleMouseOut = () => {
    const container = containerRef.current;
    if (container) {
      container.style.setProperty('--display', 'none');
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      style={{
        position: 'relative',
        overflow: 'hidden',
        "--url": `url(${src})`,
        "--zoom-x": "50%",
        "--zoom-y": "50%",
        "--display": "none",
      }}
      className="image-zoom-wrapper"
    >
      <img
        src={src}
        alt={alt}
        className="card-img-top mb-5 mb-md-0"
      />
    </div>
  );
};
