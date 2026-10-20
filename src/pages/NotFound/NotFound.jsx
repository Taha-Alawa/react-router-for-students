import { Link } from 'react-router';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>الصفحة غير موجودة</p>
      <Link to='/'>الرجوع للرئيسية</Link>
    </div>
  );
}
