import './Detalhes.css';
import Container from '../Conteiner';

const ProductDetail = ({ product }) => {
    return (
        <>
            <Container>
                <div className='card'>
                    <h2 className='card-titulo'>Detalhes do Produto</h2>
                    <p className='card-txt'>Nome: {product.name}</p>
                    <p className='card-txt'>Descrição: <span className='descricao'>{product.description}</span></p>
                    <p className='card-txt'>Preço: {product.price}</p>
                    <p className='card-txt'>Quantidade: {product.quantity}</p>
                </div>
            </Container>
        </>
    );
};

export default ProductDetail;
