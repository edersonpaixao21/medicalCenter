import elipseImg from "../../assets/Elipse.png"

import { Container } from "./styles";

export function Service () {
    return (
        <Container id="service">
            <div className="text">
                <p className="title">SERVIÇOS</p>
                <h4>Como podemos ajudá-lo a se sentir melhor?</h4>
            </div>
            
            <div className="line-one">
                <div className="square">
                    <img src={elipseImg} alt="certo" />
                    <h6>Problemas Digestivos</h6>
                    <p>A importância desse sistema é vital para o organismo. Sem a absorção correta dos nutrientes, a saúde fica seriamente comprometida, por esse motivo qualquer anormalidade no seu funcionamento é sinal de alerta.</p>
                </div>
                <div className="square">
                    <img src={elipseImg} alt="certo" />
                    <h6>Saúde Hormonal</h6>
                    <p>Os problemas hormonais e desequilíbrio hormonais são muito comuns e podem provocar vários sintomas como excesso de fome, irritabilidade, cansaço excessivo ou insônia.</p>
                </div>
                <div className="square">
                    <img src={elipseImg} alt="certo" />
                    <h6>Bem-estar Mental</h6>
                    <p>Bem-estar mental é um estado harmônico em que a mente trabalha as emoções positivas e negativas de maneira equilibrada. É a capacidade de administrar os sentimentos, independentemente das variações e exigências externas.</p>
                </div>
            </div>

            <div className="line-two">
                <div className="square">
                    <img src={elipseImg} alt="certo" />
                    <h6>Cuidados Pediátricos</h6>
                    <p>Em Pediatria, os cuidados paliativos são aqueles que previnem, identificam e tratam crianças que sofrem com doença crônica, progressiva e avançada, suas famílias e equipes que os atendem.</p>
                </div>
                <div className="square">
                    <img src={elipseImg} alt="certo" />
                    <h6>Autoimune e Inflamação</h6>
                    <p>Uma doença autoimune é essencialmente a revolta do seu corpo contra si mesmo. Em vez de protegê–lo de ameaças externas, o sistema imune direciona o seu ataque contra tecidos e órgãos saudáveis.</p>
                </div>
                <div className="square">
                    <img src={elipseImg} alt="certo" />
                    <h6>Saúde do Coração</h6>
                    <p>O coração é o músculo mais importante do corpo. A cada batida ele fornece alimento e oxigênio às células. Um coração saudável é a chave para um corpo saudável, e seu coração precisa de exercícios para mantê-lo em forma.</p>
                </div>
            </div>
        </Container>
    )
}