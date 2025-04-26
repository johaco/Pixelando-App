// src/pages/SearchPage.jsx
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { filtrarPorTexto } from "../utils/filters";
import { ProductList } from "../components/ProductList";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || "";

  const resultados = filtrarPorTexto(products, query);

  return (
    <div className="container mt-5">
      <h2 className="text-start title-product-tech">Resultados de búsqueda para: "{query}"</h2>
      <hr className="line-tech"/>
      {resultados.length > 0 ? (
        <ProductList products={resultados} />
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};
