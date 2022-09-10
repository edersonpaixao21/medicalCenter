import imageImg from "../../assets/image2.png"

import { Container } from "./styles"

export function Over () {
    return ( 
        <Container id="over" >
            <div className="section" >
                <img src={imageImg} alt="foto de familia com medico" />

                <div>
                    <p className="title">SOBRE NÓS</p>
                    <h4>Entenda quem somos e por que existimos</h4>
                    <p className="paragraph">
                    Fundada em 2000 em São Paulo, o medical Center é a maior rede integrada de cuidados em saúde no Brasil, com presença nos estados do Rio de Janeiro, São Paulo, Minas Gerais, Pernambuco, Bahia, Maranhão, Sergipe, Ceará, Paraná, Mato Grosso do Sul e no Distrito Federal. Com foco no atendimento humanizado, na qualificação da equipe, na adoção de novas tecnologias e na expansão do atendimento, o Medical Center é referência em qualidade técnica e conta com 19 Consultorios no Brasil.
                    </p>
                </div>

            </div>

            <div className="numbers">
                <div className="text-one">
                    <h1>+3.500</h1>
                    <p>Pacientes atendidos</p>
                </div>

                <hr className='liner' />

                <div className="text-two">
                    <h1>+54</h1>
                    <p>Especialista disponíveis</p>
                </div>

                <hr className='liner' />

                <div className="text-three">
                    <h1>19</h1>
                    <p>Consultorios no Brasil</p>
                </div>
                
                <hr className='liner' />

                <div className="text-four">
                    <h1>+10</h1>
                    <p>Anos no mercado</p>
                </div>
            </div>
        </Container>
    )
}