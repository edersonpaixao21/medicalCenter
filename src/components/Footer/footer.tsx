import logoImg from '../../assets/LogoWhite.png'
import sociaisImg from '../../assets/sociais.png'

import { Container } from './styles'

export function Footer () {
    return (
        <Container>
            <div className='section'>

                <div className='text'>
                    <img className='logo' src={logoImg} alt="Logo" />
                    <p>©2022 - Medical Center.</p>
                    <p>Todos os direitos reservados.</p>
                </div>

                <img className='social' src={sociaisImg} alt="Rede socias" />
            </div>
        </Container>
    )
}