import styles from './Header.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.headerLogo}>Logo</div>
      <div className={styles.headerMain}>
        <button className={styles.headerBtn}>For you</button>
        <button className={styles.headerBtn}>Following</button>
      </div>
      <div className={styles.headerSearch}>
        <div className={styles.headerSearchIcon}>
          <FaSearch />
        </div>
        <input
          className={styles.headerInput}
          placeholder="Search"
          type="text"
        />
      </div>
    </section>
  );
}
