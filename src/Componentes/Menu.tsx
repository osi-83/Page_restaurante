import './Menu.css'
interface ItemMenuProps {
    nomeEmpresa: string,
    listaMenu: string[],
    textButton: string

}
function Menu( {nomeEmpresa,listaMenu, textButton}: ItemMenuProps) {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar principal fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">{nomeEmpresa}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {listaMenu.map((item) =>(
                            <li className="nav-item">
                            <a className="nav-link" href="#">{item}</a>
                        </li>
                        ))}
                    </ul>

                <div>
                <button>{textButton}</button>
                </div>

                </div>
            </div>
        </nav>
    );
}

export default Menu