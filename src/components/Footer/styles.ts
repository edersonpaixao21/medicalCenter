import styled from 'styled-components'

export const Container = styled.header`
    width: 83.5rem;
    height: 14rem;
    background: var(--blue);

    .section {
        align-items: center;
        display: flex;

        .text {
            margin-left: 8.5rem;
            margin-right: 3rem;

            .logo {
                margin-top: 3rem;
                width: 7.799rem;
                height: 3rem;
            }
        
            p {
                margin-top: 1rem;
                font-family: 'DM Sans', sans-serif;
                font-size: 400;
                font-size: 12px;
                color: var(--white);
            }
        }

        .social {
            margin-top: 3rem;
            margin-left: 46.2rem;
        }
    }   
`