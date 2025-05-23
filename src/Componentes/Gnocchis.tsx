import React from 'react';
import './Gnocchis.css';

interface Gnocchi {
  nome: string;
  valor: number;
  imagem: string;
}

const gnocchis: Gnocchi[] = [
  {
    nome: 'Gnocchi de Batata',
    valor: 28.90,
    imagem: 'https://th.bing.com/th/id/OIP.5AS3yQBLyQHDjKrzOBbjEAHaEO?rs=1&pid=ImgDetMain'
  },
  {
    nome: 'Gnocchi de Espinafre',
    valor: 30.50,
    imagem: 'https://th.bing.com/th/id/OIP.4sMhJEXGa4GT0tf44JuLNQHaJQ?rs=1&pid=ImgDetMain'
  },
  {
    nome: 'Gnocchi de Cenoura',
    valor: 29.90,
    imagem: 'https://1.bp.blogspot.com/-pnLq8t1gqyI/WasUNcHVEaI/AAAAAAAAQqI/PL_pUbI-wy03jBplegKrOwyTWx2cERE3ACLcBGAs/s320/cenoura.jpg'
  },
  {
    nome: 'Gnocchi de Beterraba',
    valor: 31.00,
    imagem: 'https://th.bing.com/th/id/OIP.FSgplBMyIboFSx-VDND_SgHaHa?rs=1&pid=ImgDetMain'
  }
];

const Gnocchis: React.FC = () => {
  return (
    <section id="gnocchis" className="gnocchis-section">
      <h2>Opções de Gnocchis</h2>
      <div className="gnocchi-grid">
        {gnocchis.map((item, index) => (
          <div key={index} className="gnocchi-card">
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>R$ {item.valor.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gnocchis;
