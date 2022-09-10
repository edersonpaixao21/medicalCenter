import logoImg from "../../assets/LogoWhite.png"

import { Container, Content } from "./styles"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img className="logo" src={logoImg} alt="Medical Center" /> 

                <nav>
                    <ul>
                        <li><a href="#desktop">Início </a></li>
                
                        <li><a href="#over">Sobre</a></li>
                
                        <li><a href="#service">Serviços</a></li>
                
                        <li><a href="#deposition">Depoimentos</a></li>

                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>

                <button type="button" onClick={onOpenNewTransactionModal}>
                    AGENDE SUA CONSULTA
                </button>

            </Content>
        </Container>
    )
    
}

