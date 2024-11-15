import { useEffect, useState } from 'react';
import axios from 'axios';
import AppRoutes from './routes'

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/products');
      console.log(response.data); // Adicione isso
      setProducts(response.data);
  };

  useEffect(() => {
      fetchProducts();
  }, []);

  return (
      <div>
        <AppRoutes fetchProducts={fetchProducts} products={products} /> {/* Passando as props */}
      </div>
  );
};

export default App;
