import Menu from './Menu';
import Hero from './Hero';
import Footer from './Footer';

function Cardapio() {
    return (
        <>
            <Menu 
                nomeEmpresa="Mamma Mia - Restaurante Italiano"
                listaMenu={['Inicio', 'Gnocchi', 'Pastas', 'Bebidas', 'Contato']}
                textButton='Faça seu pedido on-line, agora mesmo!'
            />
            <Hero 
            />
            <Footer 
            />
        </>
    )
}

export default Cardapio