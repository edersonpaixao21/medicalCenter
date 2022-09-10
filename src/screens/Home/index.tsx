import { useState } from "react";
import { Contact } from "../../components/Contact/contact";
import { Deposition } from "../../components/Depositions/depositions";
import { Desktop } from "../../components/Desktop/desktop";
import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { Over } from "../../components/Over/over";
import { Service } from "../../components/Servics/servics";

import { GlobalStyled } from "../../styles/global";

export function Home() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState (false);

    function handleOpenNewTransactionModal () {
        setIsNewTransactionModalOpen(true);
    }
  
    function handleCloseNewTransactionModal (){
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>  
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Desktop />
            <Over />
            <Service />
            <Deposition />
            <Contact />
            <Footer />

            <NewTransactionModal 
                isOpen={isNewTransactionModalOpen}
                OnRequestClose= {handleCloseNewTransactionModal}
            />

            <GlobalStyled />
        </>
    )
}
function smoothScrollTo(arg0: number, to: any) {
    throw new Error("Function not implemented.");
}

