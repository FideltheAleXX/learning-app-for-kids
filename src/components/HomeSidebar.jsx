import { sidebarItems } from '../data/constants';
import styles from './HomeSidebar.module.css';
import { Link } from 'react-router-dom';

export default function HomeSidebar() {
  return (
    <aside className={styles.sidebarSection}>
      <div className={styles.logo}>Logo</div>
      <div>
        <ul>
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <li className={styles.sidebarItem} key={item.title}>
                <Icon aria-hidden="true" size={24} />
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>Profile</div>
    </aside>
  );
}
