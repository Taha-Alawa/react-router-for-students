import styles from './Card.module.css'
import { Link } from 'react-router'

const Card = ({ title, description, to }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      {to && <Link to={to} className={styles.button}>عرض التفاصيل</Link>}
    </div>
  )
}

export default Card
