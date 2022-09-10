import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    width: 83.5rem;
    height: 50rem;

    .section {
        padding-top: 4.4rem;
        align-items: center;
        display: flex;

        .text {
            margin-left: 8.5rem;
            margin-right: 3rem;

            h4 {
                width: 25.25rem;
                font-family: 'DM Sans', sans-serif;
                font-size: 700;
                font-size: 2.5rem;
                color: var(--text-title);
            }

            .map {
                margin-top: 2rem;
                align-items: center;
                display: flex; 

                p {
                    margin-left: 0.5rem;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 400;
                    font-size: 1rem;
                    color: var(--text-body);
                }
            }

            .message {
                margin-top: 2rem;
                align-items: center;
                display: flex; 

                p {
                    margin-left: 0.5rem;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 400;
                    font-size: 1rem;
                    color: var(--text-body);
                }
            }

            button {
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
            }

            .button-text {
                margin-left: 0.5rem;
                color: var(--white);
                font-family: 'DM Sans', sans-serif;
                font-weight: 700;
                font-size: 0.875rem;
            }
        }
    }

    .map-responsive {
        margin-left: 3rem;
    }
`