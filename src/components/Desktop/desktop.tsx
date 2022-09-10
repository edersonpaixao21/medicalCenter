import imageImg from "../../assets/image1.png"
import { Container } from "./styles";

export function Desktop() {
    return (
        <Container>

            <div className="section" id="desktop">
                <div className="text">
                    <p>BOAS-VINDAS A MEDICAL CENTER 👋</p>
                    
                    <h1>Assistência médica simplificada para todos</h1>

                    <h4>Os médicos do Medical Center vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a logo prazo.</h4>

                    <button type="button" className="button-two">
                        <span className='button-text' >VEJA SUA CONSULTA</span>
                    </button>
                    
                </div>
                <img className="photo" src={imageImg} alt="foto de mulher sorrindo" />
            </div>
        </Container>
    )
}