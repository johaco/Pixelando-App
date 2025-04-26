// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductList } from '../components/ProductList';
import { filtrarPorCategoria } from '../utils/filters';
import { FirstLetterCapilation } from '../helpers/FirstLetterCapilation'; 
export const CategoryPage = () => {
  const { nombre } = useParams(); // Ej: "/auriculares"
  const productos = filtrarPorCategoria(products, nombre);

  return (
    <div className="container mt-5 section-category">
      <h2 className="text-start title-product-tech">{FirstLetterCapilation(nombre)}</h2>
      <hr className="line-tech"/>
      <ProductList products={productos} />
    </div>
  );
};