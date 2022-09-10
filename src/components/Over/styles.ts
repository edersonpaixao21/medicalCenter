import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    width: 83.5rem;
    height: 48rem;

    .section {
        padding-top: 4.5rem;
        align-items: center;
        display: flex;

        img {
            margin-left: 8.5rem;
            width: 30rem;
            height: 25.875rem;
        }

        .title {
            margin-left: 2rem;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700;
            font-size: 0.875rem;
            color: var(--blue);
        }

        h4 {
            margin: 1rem 9rem 0 2rem;
            font-family: 'DM Sans', sans-serif;
            font-size: 700;
            font-size: 3.125rem;
            color: var(--text-title);
        }

        .paragraph {
            margin: 1rem 9rem 0 2rem;
            font-family: 'DM Sans', sans-serif;
            font-size: 700;
            font-size: 1rem;
            color: var(--text-body);
        }
    }

    

    .numbers {
        margin-top: 3rem;
        margin-left: 8.5rem;
        width: 68rem;
        height: 13.125rem;

        display: flex;
        align-items: center;
        justify-content: center;

        .liner {
            height:5.188rem;
            width:0.12rem;
            border-width:0;
            background-color: #DCE9E2;
        }   

        h1 {
            font-family: 'DM Sans', sans-serif;
            font-size: 700;
            font-size: 3rem;
            color: var(--text-title);
        }

        p {
            font-family: 'DM Sans', sans-serif;
            font-size: 400;
            font-size: 0.875rem;
            color: var(--blue);
        }

        .text-one {
            margin-left: 3rem;
            margin-right: 3rem;
            text-align: center;
        }

        .text-two {
            margin-left: 3rem;
            margin-right: 3rem;
            text-align: center;
        }

        .text-three {
            margin-left: 3rem;
            margin-right: 3rem;
            text-align: center;
        }

        .text-four {
            margin-left: 3rem;
            margin-right: 3rem;
            text-align: center;
        }
    }

   

`