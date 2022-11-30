import { FC } from 'react';
import Image from 'next/image';

import styles from './video-card.module.css';

const VideoCard: FC<Video> = ({ _id, title, publishDate, urlTitle }) => {
  var date = new Date(publishDate);
  {
    return (
      <div className={styles['video-card']}>
        <a href={`videos/${urlTitle}`}>
          <div className={styles['video-card__image-wrapper']}>
            <Image
              className={styles['video-card__image']}
              alt={title}
              src={`https://img.youtube.com/vi/${_id}/hqdefault.jpg`}
              width={480}
              height={360}
            />
          </div>
          <span className={styles['video-card__date']}>{date.toDateString()}</span>
          <h2 className={styles['video-card__title']}>{title}</h2>
        </a>
      </div>
    );
  }
};

export default VideoCard;
