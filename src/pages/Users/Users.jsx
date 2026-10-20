import Card from '../../components/Card/Card'
import { getUsers } from '../../services/usersService'
import styles from './Users.module.css' 

const Users = () => {
  const users = getUsers()

  return (
    <div>
      <h1>المستخدمين</h1>
      <p className={styles.hint}>
        اضغط على بطاقة اي مستخدم لتنتقل الى صفحته الخاصة
      </p>

      <div className={styles.grid}>
        {
          users.map((user) => (
            <Card 
              key={user.id}
              title={user.name}
              description={user.role}
              to={`/users/${user.id}`}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Users
