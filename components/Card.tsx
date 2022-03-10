import styled from 'styled-components'
import Link from "next/link";
const CardWrapper = styled.div`
    border: 1px solid var(--orange);
    padding: 0.75rem 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    margin-right: 2%;
    margin-bottom: 1%;
    max-width: 30%;
    &:hover{
        background-color: var(--orange-tint);
    }

`;

const CardTitle = styled.h2`
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: var(--fs-lg);
    font-weight: var(--fw-md);
    letter-spacing: 0.4px;
`

const CardDescription = styled.p`
    font-family: var(--font-mono);
    font-size: var(--fs-sm);
    font-weight: var(--fw-md);
    letter-spacing: 0.4px;
`

export interface CardProps {
    title: string
    desc?: string
    path: string
}

const Card = ({title, desc, path}: CardProps) => {

    return (
    <Link href={path} passHref={true}>
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            {desc && <CardDescription>{desc}</CardDescription>}
        </CardWrapper>
    </Link>
    )
    
}

export default Card