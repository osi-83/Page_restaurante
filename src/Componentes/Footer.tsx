import './Footer.css';

function Footer() {
    return (

            <div className="footer">
                
                <div className="social-media">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" aria-hidden="true">Facebook</i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true">Instagram</i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true">Twitter</i></a>
                </div>
                <p>Endereço: Av. Paulista, 12.344 - Belo Horizonte, MG</p>
                <p>Telefone: (31) 9999-9999</p>
                <p>@Copyright 2025 - Desenvolvido por <em>Osiel Fernandes</em> - Todos os direitos reservados.</p>
            </div>
    );
}    

export default Footer