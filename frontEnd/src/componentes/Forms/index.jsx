import { useState } from 'react';
import axios from 'axios';
import './Form.css';
import Container from '../Conteiner';

const ProductForm = ({ fetchProducts, product }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [quantity, setQuantity] = useState(product ? product.quantity : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, description, price: parseFloat(price), quantity: parseInt(quantity) };
    if (product) {
      await axios.put(`http://localhost:5000/products/${product.id}`, payload);
    } else {
      await axios.post('http://localhost:5000/products', payload);
    }
    fetchProducts();
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <>
    <Container>
    <div className='form-campo'>
    <form onSubmit={handleSubmit} className='forms'>
      <input className='forms-input' value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
      <input className='forms-input' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required />
      <input className='forms-input' value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Preço" required />
      <input className='forms-input' value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Quantidade" required />
      <button className='forms-botao' type="submit">{product ? 'Editar Produto' : 'Adicionar Produto'}</button>
    </form>
    </div>
    </Container>
    </>
  );
};

export default ProductForm;
