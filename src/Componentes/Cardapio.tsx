import Menu from './Menu';
import Hero from './Hero';
import Footer from './Footer';
import Bebidas from './Bebidas';

function Cardapio() {
    return (
        <>
            <Menu 
                nomeEmpresa="Mamma Mia - Restaurante Italiano"
                listaMenu={['Bebidas','Pastas','Gnocchi']}
                textButton='Faça seu pedido on-line, agora mesmo!'
            />
            <Hero 
            />

            <Bebidas 
            />

            <Footer 
            />
        </>
    )
}

export default Cardapio