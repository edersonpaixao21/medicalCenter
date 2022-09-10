import styled from "styled-components";

export const Container = styled.form `
    input {
        width: 100%;
        padding: 0 1.5rem;
        margin-top: 1rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: black;
        }

        & + input {
            margin-top: 1rem;
        }
    }

    label {
        margin-top: 0.5rem;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
    .button-two {
        margin-left: 7.4rem;
        margin-top: 1rem;
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

        .buttontext {
            color: var(--white);
            font-family: 'DM Sans', sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
        }
    }
`