import './Hero.css'
import RistoranteImg from '../assets/Ristorante.jpg'

function Hero() {
    return (
      <section className="hero-section">
        <div>
            <div>

              <h1 className="title">
                      <strong>Mamma Mia</strong><br />
                      Restaurante Italiano!
                    </h1>

                <div className="container">
                    
                      <div className="lead">
                      
                        <h2 >Servindo massas à mais de 70 anos...</h2>
                        <br />                   
                        <h4>"Qualidade passada por gerações"</h4>
                      
                      </div>

                    <div>
                    <img className="picture" src={RistoranteImg} alt="restaurante"/>
                </div>

                </div>
                                               
            </div>
        </div>
      </section>
    );
}

export default Hero