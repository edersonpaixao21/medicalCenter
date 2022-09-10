import dotsImg from '../../assets/Dots.svg'
import frameImg from '../../assets/Frame.svg'
import frame2Img from '../../assets/Frame2.svg'
import aspasImg from '../../assets/Aspas.svg'

import { Container } from "./styles";

export function Deposition () {
    return (
        <Container id='deposition'>
            <div className='content'>

                <div className="text">
                    <p className="title">DEPOIMENTOS</p>
                    <h4>O que os clientes dizem sobre o Medical Center</h4>
                </div>

                <div className='quiz'>
                    <input type="text" placeholder='Nome e Sobrenome' />
                    <input type="text" placeholder='Email' />
                    <br />
                    <input type="text" placeholder='Telefone'/>
                    <input type="text" placeholder='Deixe a sua opinião' />
                    <br />
                    <button>Enviar Depoimento</button>  
                </div>
            </div>

            <div className='card'>
                <div className="brief">
                    <img className='aspas' src={aspasImg} alt="Aspas" />
                    <p className='square'>Desde o início da minha gestação fomos bem atendidos. Agradecemos imensamente a toda equipe que nos atenderam, o carinho, atenção e preocupação das enfermeiras que nos ajudaram.</p>
                    <p className='name-client'>Wanessa Souza</p>
                </div>
                <div className="brief">
                    <img className='aspas' src={aspasImg} alt="Aspas" />
                    <p className='square'>Estivemos com a nossa filha internada nos últimos 9 dias. Quero agradecer a toda equipe da pediatria, médicos, enfermeiros, técnicos, fisioterapeutas, pessoal da cozinha e limpeza, vcs foram impecáveis e maravilhosos conosco! Hospital que eu confio e super indico!</p>
                    <p className='name-client'>Alberto W.</p>
                </div>
            </div>

            <div>
                <img className='left-arrow' src={frame2Img} alt="seta para esquerda" />
                <img className='right-arrow' src={frameImg} alt="seta para direita" />
            </div>
        </Container>
    )
}