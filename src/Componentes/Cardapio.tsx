import Menu from './Menu';
import Hero from './Hero';
import Footer from './Footer';
import Bebidas from './Bebidas';
import Pastas from './Pastas';
import './Cardapio.css';

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

            <div className="cardapio-sections">

                <Bebidas 
            />

                <Pastas 
            />

            </div>
      

            <Footer 
            />
        </>
    )
}

export default Cardapio