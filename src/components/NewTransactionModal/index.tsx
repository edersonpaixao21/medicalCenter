import vectorImg from '../../assets/Vector.svg'

import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    OnRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, OnRequestClose}: NewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen}  
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={OnRequestClose} className="react-modal-close">
            <img src={vectorImg} alt="Fechar Modal" />
            </button>
            
            <Container>
                <div>
                    <label htmlFor="diaa">Informe a data da consulta:</label>
                    <input type="date" id='diaa' name="diaa"></input>
                </div>

                <div>
                    <label htmlFor="hora-cons">Escolha o horário da consulta: </label>
                    <input id="hora-cons" type="time" name="hora-cons"/>
                </div>

                <input className='name' placeholder="Nome completo" />
                
                <input type="email" name="email" id="emailAddress" placeholder='E-mail' />

                <input className='phone' type="tel" name="phone" placeholder="Telefone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>

                <div>
                <input type="text" placeholder="Especialidades" list="especialista"/>
                <datalist id="especialista">
                    <option>Alergologista</option>
                    <option>Cardiologista</option>
                    <option>Dermatologista</option>
                    <option>Ginecologista</option>
                    <option>Neurologista</option>
                    <option>Oftalmologista</option>
                    <option>Ortopedista</option>
                    <option>Otorrinolaringologista</option>
                    <option>Pediatra</option>
                    <option>Psiquiatra</option>                               
                </datalist>
                </div>

                <button type="button" className="button-two">
                    <span className='buttontext' >AGENDE SUA CONSULTA</span>
                </button>
            </Container>
            
        </Modal>
    )
}

