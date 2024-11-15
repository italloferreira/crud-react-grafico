import axios from 'axios';
import ProductDetail from '../Detalhes';
import Container from '../Conteiner';
import { useEffect, useState } from 'react';
import './Lista.css';
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from 'chart.js'; 

ChartJS.register(BarElement, CategoryScale, LinearScale, Title); 

const ProductList = ({ fetchProducts, products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]); 
  const [category, setCategory] = useState('all'); 

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  const toggleProductDetail = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id)); 
    } else {
      setSelectedProducts([...selectedProducts, product]); 
    }
  };

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter((product) => product.category === category);

  const stockData = {
    labels: filteredProducts.map(product => product.name),
    datasets: [{
      label: 'Quantidade em Estoque',
      data: filteredProducts.map(product => product.quantity),
      backgroundColor: 'rgb(211, 211, 211)',
    }]
  };

  const priceData = {
    labels: filteredProducts.map(product => product.name),
    datasets: [{
      label: 'Preço do Produto',
      data: filteredProducts.map(product => product.price),
      backgroundColor: 'rgb(211, 211, 211)',
    }]
  };

  return (
    <>
    <Container>
    <div>
      <h1 className='lista-titulo'>Lista de Produtos</h1>
      
    <div className='filtro'>

    <label htmlFor="category-filter" className='filtro-titulo'>Filtrar por Categoria: </label>
      <select id="category-filter" className='filtro-opcao' value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">Todas</option>
      </select>

    </div>
    <div className='lista-campo'>
    {filteredProducts.map((product) => (
        <div key={product.id} className='lista'>
          <h2 className='lista-nome'>{product.name}</h2>

          <div className='lista-botoes'>
            <button className='lista-botao' onClick={() => toggleProductDetail(product)}>
              {selectedProducts.includes(product) ? 'Fechar Detalhes' : 'Exibir Detalhes'}
            </button>
            <button className='lista-botao' onClick={() => deleteProduct(product.id)}>Excluir</button>
          </div>

          {selectedProducts.includes(product) && <ProductDetail product={product} />}
        </div>
      ))}
    </div>
<div className='chart'>

      <div className="chart-container">
        <h2>Quantidade em Estoque</h2>
        <Bar data={stockData} />
      </div>

      <div className="chart-container">
        <h2>Distribuição de Preço</h2>
        <Bar data={priceData} />
      </div>
    </div>

</div>
    </Container>
    </>
  );
};

export default ProductList;
