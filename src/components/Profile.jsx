import { FaUserAstronaut, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import PostCard from './PostCard';

const mockAuthor = {
  name: 'Dr. Seuss',
  tag: '@dr_seuss',
  bio: "was an American children's author, illustrator, animator, and cartoonist.",
  joined: '02 March 1904',
  followers: 1337,
  quotesCount: 3,
};

const mockAuthorQuotes = [
  {
    id: 1,
    name: 'Dr. Seuss',
    book: 'The Cat in the Hat',
    tag: '@dr_seuss',
    time: '5h',
    quote:
      'The sun did not shine. It was too wet to play. So we sat in the house All that cold, cold, wet day.',
  },
  {
    id: 2,
    name: 'Dr. Seuss',
    book: "Oh, the Places You'll Go!",
    tag: '@dr_seuss',
    time: '1d',
    quote:
      'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
  },
  {
    id: 3,
    name: 'Dr. Seuss',
    book: 'Green Eggs and Ham',
    tag: '@dr_seuss',
    time: '3d',
    quote: 'I do not like green eggs and ham. I do not like them, Sam-I-am.',
  },
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <section className={styles.profileSection}>
      {/* top panel */}
      <div className={styles.headerBar}>
        <button
          className={styles.backBtn}
          onClick={() => navigate(-1)}
          title="Back"
          type="button"
        >
          <FaArrowLeft size={16} />
        </button>
        <div>
          <div className={styles.headerTitle}>{mockAuthor.name}</div>
          <div className={styles.headerSubtitle}>
            {mockAuthor.quotesCount} quotes
          </div>
        </div>
      </div>

      {/* profile`s header */}
      <div className={styles.profileCard}>
        <div className={styles.banner} />

        {/* avatar */}
        <div className={styles.profileHeader}>
          <div className={styles.avatarWrapper}>
            <FaUserAstronaut size={48} />
          </div>
          <button className={styles.actionBtn} type="button">
            Follow
          </button>
        </div>

        {/* info */}
        <div className={styles.profileInfo}>
          <div className={styles.nameBlock}>
            <span className={styles.name}>{mockAuthor.name}</span>
            <span className={styles.tag}>{mockAuthor.tag}</span>
          </div>

          <p className={styles.bio}>{mockAuthor.bio}</p>

          <div className={styles.metaInfo}>
            <FaCalendarAlt size={14} />
            <span>Birthday: {mockAuthor.joined}</span>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{mockAuthor.followers}</span>
              followers
            </div>
          </div>
        </div>
      </div>

      {/* quotes */}
      <div className={styles.quotesFeed}>
        {mockAuthorQuotes.map((quote) => (
          <PostCard key={quote.id} writer={quote} />
        ))}
      </div>
    </section>
  );
}
