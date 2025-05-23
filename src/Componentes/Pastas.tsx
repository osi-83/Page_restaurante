import Molhos from './Molhos';
import './Pastas.css'

const pastas = [
    {
        nome: "Espaguete",
        preco: "R$ 28,00",
        imagem: './Espaguetti.jpg',
        molhos: ['Alla Putanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
    },
    {
        nome: "Ravioli",
        preco: "R$ 28,00",
        imagem: './Raviolli.jpg',
        molhos: ['Alla Putanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
    },
    {
        nome: "Tagliatelle",
        preco: "R$ 30,00",
        imagem: './Tagliatelle.jpg',
        molhos: ['Alla Putanesca', 'Alla Matriciana']
    },
    {
        nome: "Fettuccine",
        preco: "R$ 32,00",
        imagem: './Fettuccine.jpg',
        molhos: ['Alla Putanesca', 'Al Pesto di Basilico', 'Cacio e Pepe']
    },
    {
        nome: "Penne",
        preco: "R$ 26,00",
        imagem: './Penne.jpg',
        molhos: ['Alla Putanesca', 'Cacio e Pepe']
    },
    {
        nome: "Rigatoni",
        preco: "R$ 28,00",
        imagem: './Rigatoni.jpg',
        molhos: ['Alla Matriciana']
    },
    {
        nome: "Pappardelle",
        preco: "R$ 34,00",
        imagem: './Pappardelle.jpg',
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
                        <img src={pasta.imagem} alt={pasta.nome}/>
                        
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