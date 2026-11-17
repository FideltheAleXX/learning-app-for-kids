import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Content.module.css';
import PostCard from './PostCard';

export default function Content() {
  const [writers, setWriters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/data/writers.json');
        setWriters(response.data);
      } catch (err) {
        setError('Ошибка загрузки данных');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWriters();
  }, []);

  if (isLoading)
    return <div className={styles.contentSection}>Загрузка ленты...</div>;
  if (error)
    return (
      <div className={styles.contentSection}>
        <span className="errorMessage">{error}</span>
      </div>
    );
  return (
    <section className={styles.contentSection}>
      <div className={styles.contentHeader}>
        <button className={styles.contentHeaderBtn}>For you</button>
        <button className={styles.contentHeaderBtn}>Following</button>
      </div>
      {writers.map((writer) => (
        <PostCard key={writer.id} writer={writer} />
      ))}
    </section>
  );
}
