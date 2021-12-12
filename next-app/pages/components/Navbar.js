//import styles from '../../styles/Navbar.modules.css';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const Nav = () => {
    return ( 
<div className={styles.nav}>

<ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/Post">
          <a>Post</a>
        </Link>
      </li>
    </ul>
</div>
 );
}
 
export default Nav;