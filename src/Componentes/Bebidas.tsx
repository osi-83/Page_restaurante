import './Bebidas.css'


function Bebidas() {
    return (
        <section className="bebidas-section" id="bebidas">
            <h2>Bebidas</h2>
            
                <div className="categoria">
                    <h3>Água</h3>
                    <ul>
                        <li>Água mineral (sem gás) - R$ 2,00</li>
                        <li>Água mineral (com gás) - R$ 3,00</li>
                        <li>Água de coco - R$ 4,00</li>
                    </ul>

                    <div className="categoria"><h3>Refrigerantes</h3>
                        <ul>
                            <li>Coca-cola (lata) - R$ 5,00</li>
                            <li>Fanta (lata) - R$ 5,00</li>
                            <li>Sprite (lata) - R$ 5,00</li>
                            <li>Guarana (lata) - R$ 5,00</li>
                        </ul>
                    </div>
                    <div className="categoria"><h3>Sucos</h3>
                        <ul>
                            <li>Laranja - R$ 5,00</li>
                            <li>Manga - R$ 5,00</li>
                            <li>Uva - R$ 5,00</li>
                        </ul>
                    </div>
                </div>
        </section>
    );
}

export default Bebidas