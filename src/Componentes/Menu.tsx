import './Menu.css'
interface ItemMenuProps {
    nomeEmpresa: string,
    listaMenu: string[],
    textButton: string

}
function Menu({ nomeEmpresa, listaMenu, textButton }: ItemMenuProps) {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar principal fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">{nomeEmpresa}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {listaMenu.map((item) => (
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <button className='btn-pedido'>{textButton}</button>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Menu