import styled from "styled-components";

export const Container = styled.div`
    padding-top: 8rem;
    width: 83.5rem;
    height: 48rem;

    .section {
        padding-top: 3rem;
        align-items: center;
        display: flex;

        .text {
            margin-left: 8.5rem;
            margin-right: 3rem;

            p {
                font-family: 'DM Sans', sans-serif;
                font-weight: 700;
                font-size: 0.875rem;
                color: var(--blue);
            }

            h1 {
                margin-top: 2rem;
                font-family: 'DM Sans', sans-serif;
                font-weight: 700;
                font-size: 3.25rem;
                color: var(--text-title);
            }

            h4 {
                margin-top: 2rem;
                font-family: 'DM Sans', sans-serif;
                font-weight: 400;
                font-size: 1.125rem;
                color:var(--text-body);
            }

            .button-two {
                margin-top: 2rem;
                width: 16.438rem;
                height: 3.25rem;

                background: var(--blue);
                border: 0.12rem solid var(--blue);
                border-radius: 2.5rem;

                display: flex;
                align-items: center;
                justify-content: center;

                transition: filter 0.2s;

                &:hover {
                    filter: opacity(80%);
                }
            
                .button-text {
                    color: var(--white);
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 700;
                    font-size: 0.875rem;
                }
            }
        }
    }

    
    .photo {
        margin-right: 7rem;
        margin-top: 1.5rem;
        width: 26.25rem;
        height: 34.188rem;
        background: #DCE9E2;
    }

`
