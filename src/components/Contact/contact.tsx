import whatsImg from '../../assets/whats.svg'
import strokeImg from '../../assets/Stroke.png'
import stroke1Img from '../../assets/Stroke1.png'

import { Container } from './styles'

export function Contact () {
    return (
        <Container id='contact'>
            <div className='section'>
                <div className='text'>
                    <h4>Entre em contato com a gente!</h4>
                    <div className='map'>
                        <img src={strokeImg} alt="mapa" />
                        <p>R. Amauri de Souza, 346</p>
                    </div>
                    
                    <div className='message'>
                        <img src={stroke1Img} alt="mensagem" />
                        <p>contato@medicalcenter.com</p>
                    </div>

                    <div>
                        <button type="button">
                            <img className="imageWhats" src={whatsImg} alt="" />
                            <span className='button-text'>ENTRE EM CONTATO</span>
                        </button>
                    </div>
                </div>

                <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5534232921323!2d-49.8444915859449!3d-23.00344368496274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c03d5bc19e6e1f%3A0xc1989af28430f71e!2sR.%20Amauri%20de%20Souza%2C%20Ourinhos%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1661287510133!5m2!1spt-BR!2sus"  width="588" height="590" ></iframe>
                </div>
            </div>
        </Container>
    )
}
