import Molhos from './Molhos';
import './Pastas.css'

const pastas = [
    {
        nome: "Espaguete",
        preco: "R$ 28,00",
        imagens: './Espaguetti.jpg',
        molhos: ['Alla Putanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
    },
    {
        nome: "Ravioli",
        preco: "R$ 28,00",
        imagens: './Raviolli.jpg',
        molhos: ['Alla Putanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
    },
    {
        nome: "Tagliatelle",
        preco: "R$ 30,00",
        imagens: './Tagliatelle.jpg',
        molhos: ['Alla Putanesca', 'Alla Matriciana']
    },
    {
        nome: "Fettuccine",
        preco: "R$ 32,00",
        imagens: './Fettuccine.jpg',
        molhos: ['Alla Putanesca', 'Al Pesto di Basilico', 'Cacio e Pepe']
    },
    {
        nome: "Penne",
        preco: "R$ 26,00",
        imagens: './Penne.jpg',
        molhos: ['Alla Putanesca', 'Cacio e Pepe']
    },
    {
        nome: "Rigatoni",
        preco: "R$ 28,00",
        imagens: './Rigatoni.jpg',
        molhos: ['Alla Matriciana']
    },
    {
        nome: "Pappardelle",
        preco: "R$ 34,00",
        imagens: './Pappardelle.jpg',
        molhos: ['Alla Putanesca', 'Alla Matriciana']
    }
];

function Pastas() {
    return (
        <section className="pastas-section" id="pastas">
            <h2>Massas</h2>
            <div className="pastas-grid">
                {pastas.map((pasta) => (
                    <div className="card-pasta" key={pasta.nome}>
                        <img src={pasta.imagens} alt={pasta.nome}/>
                        
                        <h3>{pasta.nome}</h3>
                        <p>{pasta.preco}</p>
                        
                        <Molhos tipos={pasta.molhos} />
                    </div>

                ))}
            </div>
        </section>
    );
}

export default Pastas