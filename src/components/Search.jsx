import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchIcon}>
        <FaSearch />
      </div>
      <input className={styles.searchInput} placeholder="Search" type="text" />
    </section>
  );
}
