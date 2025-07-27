import { useState, useRef, useEffect } from 'react';
import styles from './Videos.module.css';

const baseVideoIds = [
  '8HNkzTN12Xk',
  '6D4uLLWjdWE',
  'r7SGHfXK15Q',
];

function getEmbedUrl(videoId: string, autoplay = false) {
  return `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1&mute=1' : ''}`;
}

function getThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export default function Videos() {
  const [selectedId, setSelectedId] = useState(baseVideoIds[0]);

  const mainVideoRef = useRef<HTMLIFrameElement>(null);

  const hasAutoPlayed = useRef(false);

  useEffect(() => {
    hasAutoPlayed.current = false;
  }, [selectedId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mainVideoRef.current && !hasAutoPlayed.current) {
          const iframe = mainVideoRef.current;

          const src = getEmbedUrl(selectedId, true);

          iframe.src = '';
          iframe.src = src;

          hasAutoPlayed.current = true;
        }
      },
      {
        threshold: 0.6,
      },
    );

    if (mainVideoRef.current) observer.observe(mainVideoRef.current);

    return () => observer.disconnect();
  }, [selectedId]);

  return (
    <section className={styles.heroContainer}>
      <h2 className={styles.title}>Твій шлях у велике майбутнє починається з нами</h2>
      <p className={styles.subtitle}>Зануруйся у світ інновацій, знань і перспектив!</p>
      <div className={styles.videoLayout}>
        <div className={styles.mainVideoWrapper}>
          <iframe
            ref={mainVideoRef}
            src={getEmbedUrl(selectedId, true)}
            className={styles.mainVideo}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Selected Video"
          />
        </div>
        <div className={styles.thumbnailList}>
          {baseVideoIds.map((id, index) => (
            <button
              key={id}
              className={styles.thumbnailWrapper}
              onClick={() => setSelectedId(id)}
            >
              <img
                src={getThumbnailUrl(id)}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnail}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
