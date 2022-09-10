import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
:root {
    --backgroud: #F7F9F9;
    --green: #00856F;
    --blue: #01677e;
    --white: #fff;

    --text-title: #212529;
    --text-body: #495057;

  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
 }

 .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`