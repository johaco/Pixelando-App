// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductList } from '../components/ProductList';
import { filtrarPorCategoria } from '../utils/filters';

export const CategoryPage = () => {
  const { nombre } = useParams(); // Ej: "/auriculares"
  const productos = filtrarPorCategoria(products, nombre);

  return (
    <div className="container mt-5 section-category">
      <h2 className="mb-4">{nombre}</h2>
      <ProductList products={productos} />
    </div>
  );
};