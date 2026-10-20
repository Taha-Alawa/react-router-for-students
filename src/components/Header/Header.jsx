import styles from './Header.module.css'
import { Link, NavLink } from 'react-router'

const Header = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--color-secondary)' : 'white'
  })

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>TAHA</Link>

      <nav className={styles.nav}>
        <NavLink to='/' style={linkStyle}>الرئيسية</NavLink>
        <NavLink to='/about' style={linkStyle}>من نحن</NavLink>
        <NavLink to='/users' style={linkStyle}>المستخدمين</NavLink>
      </nav>
    </header>
  )
}

export default Header
