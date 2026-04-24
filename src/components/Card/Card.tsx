import styles from './Card.module.css';

interface CardProps {
    id: string;
    title: string;
}

export default function Card({ id: _id, title }: CardProps) {
    return <li className={styles.card}>{title}</li>
}