/**
 * Filtra productos por texto ingresado (marca, modelo o categoría)
 */
export function filtrarPorTexto(productos, search) {
  if (!search) return productos;

  const texto = search.toLowerCase();

  return productos.filter((producto) => {
    const nombre = producto.name?.toLowerCase() || '';
    const categoria = producto.category?.toLowerCase() || '';
    const marca = producto.brand?.toLowerCase() || '';

    return (
      nombre.includes(texto) ||
      categoria.includes(texto) ||
      marca.includes(texto)
    );
  });
}

/**
 * Filtra productos por categoría exacta
 */
export function filtrarPorCategoria(productos, categoria) {
  if (!categoria) return productos;

  return productos.filter(
    (producto) =>
      producto.category &&
      producto.category.toLowerCase() === categoria.toLowerCase()
  );
}

/**
 * Filtra productos por marca exacta
 */
export function filtrarPorMarca(productos, marca) {
  if (!marca) return productos;

  return productos.filter(
    (producto) =>
      producto.brand &&
      producto.brand.toLowerCase() === marca.toLowerCase()
  );
}
