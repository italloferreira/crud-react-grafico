import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Container from './componentes/Conteiner'; 
import Forms from './componentes/Forms';
import Lista from './componentes/Lista';
import Footer from './componentes/Footer';

function AppRoutes({ fetchProducts, products }) { 
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Lista fetchProducts={fetchProducts} products={products} />} />
                    <Route path="/forms" element={<Forms fetchProducts={fetchProducts} />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
