import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <>
        <header className='header'>

            <h1 className='titulo-header'>Gerenciaodor de produtos</h1>
            
            <nav className='links'>
                <Link to='/'><p className='produtos'>Produtos cadastrados</p></Link>
                <Link to='/forms'><p className='page-forms'>Cadastrar produto</p></Link>
            </nav>
        </header>
    
        </>
    )
}

export default Header
