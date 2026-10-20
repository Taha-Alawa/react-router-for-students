import { Link, useParams } from 'react-router'
import styles from './UserProfile.module.css'
import { getUserById } from '../../services/usersService';

const UserProfile = () => {
  const { id } = useParams();
  const user = getUserById(id)

  if (!user) {
    return (
      <div className={styles.profile}>
        <h1>المستخدم غير موجود</h1>
        <p>لايوجد مستخدم برقم: {id}</p>
        <Link to='/users'>الرجوع للمستخدمين</Link>
      </div>
    )
  }

  return (
    <div className={styles.profile}>
      <span className={styles.badge}>id: {user.id}</span>
      <h1>{user.name}</h1>
      <p>الوظيفة: {user.role}</p>
      <p>المدينة: {user.city}</p>
      <Link to='/users'>الرجوع للمستخدمين</Link>
    </div>
  )
}

export default UserProfile
