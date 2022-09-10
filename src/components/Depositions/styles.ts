import styled from "styled-components";

export const Container = styled.div`
    width: 83.5rem;
    height: 60rem;

    .content {
        padding-top: 4.4rem;
        margin-top: 10rem;
        align-items: center;
        display: flex;
    }

    .text {
        width: 30.063rem;
        height: 8.813rem;
        margin-left: 8.5rem;
        margin-bottom: 3rem;
    }

    .title {
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 0.875rem;
        color: var(--blue);
    }
    
    h4 {
        margin-top: 1rem;
        font-family: 'DM Sans', sans-serif;
        font-size: 700;
        font-size: 2.5rem;
        color: var(--text-title);
    }

    .quiz {
        margin-top: 1rem;
        margin-left: 5rem;
        align-items: center;
        justify-content: center;

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

        button {
            margin-top: 2rem;
            margin-left: 8rem;
            width: 16.438rem;
            height: 3.25rem;

            background: var(--blue);
            border: 0.12rem solid var(--blue);
            border-radius: 2.5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            font-family: 'DM Sans', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            color: var(--white);

            transition: filter 0.2s;

            &:hover {
                filter: opacity(80%);
            }
        }
    }    

    .card {
        align-items: center;
        display: flex;

        .brief {
            margin-top: 5rem;
            margin-left: 6rem;
            width: 34rem;
            height: 17.063rem;
            background: #F7F9F9;

            .aspas {
                margin-top: 2rem;
                margin-left: 1.5rem;
                width: 2.813rem;
                height: 1.938rem;
            }

            .square {
                margin-top: 2rem;
                margin-left: 1.5rem;
                font-family: 'DM Sans', sans-serif;
                font-size: 400;
                font-size: 1rem;
                color: var(--text-title);
            }

            .name-client {
                margin-top: 2rem;
                margin-left: 1.5rem;
                font-family: 'DM Sans', sans-serif;
                font-weight: 700;
                font-size: 1rem;
                color: var(--blue);
            }
        }
    }

    .left-arrow {
        margin-top: 2rem;
        margin-left: 6rem;

        transition: filter 0.2s;

        &:hover {
            background: var(--blue);
        }
    }

    .right-arrow {
        margin-left: 1rem;

        transition: filter 0.2s;

        &:hover {
            background: var(--blue);
        }
    }
    
`