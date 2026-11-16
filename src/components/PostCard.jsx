import styles from './PostCard.module.css';
import {
  FaUserAstronaut,
  FaRegHeart,
  FaHeart,
  FaBookmark,
} from 'react-icons/fa';
import { FcStatistics } from 'react-icons/fc';
import { SlUserFollow } from 'react-icons/sl';

export default function PostCard({ writer }) {
  return (
    <article className={styles.postCard}>
      <div className={styles.avatar}>
        <FaUserAstronaut size={32} />
      </div>
      <div className={styles.post}>
        <div className={styles.up}>
          <div className={styles.leftUp}>
            <div>{writer.name}</div>
            <div>Tag</div>
            <span>·</span>
            <div>Time_of_Post</div>
          </div>
          <div>
            <SlUserFollow />
          </div>
        </div>
        <div className={styles.textOfCard}>
          {writer.quote} (c) {writer.book}
        </div>
        <div className={styles.bottom}>
          <div>
            <FaRegHeart /> <FaHeart />
          </div>
          <div>
            <FcStatistics />
          </div>
          <div>
            <FaBookmark />
          </div>
        </div>
      </div>
    </article>
  );
}
