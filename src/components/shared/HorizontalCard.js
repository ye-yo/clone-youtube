import styles from './HorizontalCard.module.css';
import moment from 'moment';
import { ProcessViewCount, ProcessUploadDate } from '../../utils';

function HorizontalCard({ data }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${data.id}`}
      key={`home-card-${data.index}`}
      className={styles.card}
    >
      <img
        className={styles.thumbnail}
        src={data.thumbnail}
        alt={`${data.title}의 썸네일`}
      />
      <div className={styles.info}>
        <a href={`https://www.youtube.com/channel/${data.channelId}`}>
          <img
            className={styles.channelImg}
            src={data.channelThumbnail}
            alt={`${data.channelTitle} 프로필 사진`}
          />
        </a>

        <div>
          <div className={styles.title}> {data.title}</div>
          <div className={styles.uploader}>{data.channelTitle}</div>
          <div className={styles.flex}>
            <div className={styles.view}>{data.viewCount}</div>
            <div className={styles.date}>{ProcessUploadDate(data.date, moment('2021-09-16T13:15:02'))}</div>
          </div>
        </div>
      </div>

    </a>
  );
}
export default HorizontalCard;