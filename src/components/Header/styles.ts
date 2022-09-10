import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    width: 85.375rem;
    height: 4.3rem;
    background: var(--blue);
`
export const Content = styled.div`   
    max-width: 69.889rem;
    margin: 0.4rem auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    

    .logo {
        width: 7.799rem;
        height: 3rem;
    }

    button {
        width: 11.875rem;
        height: 2.375rem;

        background: transparent;
        border: 0.12rem solid var(--white);
        border-radius: 2.5rem;

        color: var(--white);
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 0.875rem;

        transition: filter 0.2s;

        &:hover {
            filter: opacity(90%);
        } 
    }
   
    ul {
        max-width: 50rem;
        list-style: none;
        padding: 0;
    }

    ul li {  
        display: inline;
    }

    ul li a {
        color: var(--white);
        opacity: 70%;
        padding: 1.25rem;
        display: inline-block;
        text-decoration: none;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1rem;

    }

    ul li a:hover {
        font-weight: bold;
        opacity: 100%;
        box-shadow: 0 5px 0 0;
    }
`
