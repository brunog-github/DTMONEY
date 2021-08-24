import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
        }

        td {
            padding: 1rem 2rem;
            border: none;
            background: var(--shape);
            color: var(--text-body);
            

            &:first-child {
                color: var(--text-title);
                border-radius: 0.25rem 0 0 0.25rem;
            }

            &:last-child {
                border-radius: 0 0.25rem 0.25rem 0;
            }

            &.withdraw {
                color: var(--red);
            }

            &.deposity {
                color: var(--green);
            }
        }
    }
`