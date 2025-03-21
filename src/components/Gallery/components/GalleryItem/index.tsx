import { memo } from 'react';
import { IGalleryItemProps } from '../../../../types';
import Heart from '../../../Heart';
import styles from './index.module.css';

function GalleryItem({ item }: IGalleryItemProps) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{item.name}</p>
      <img
        className={styles.image}
        src={item.image}
        loading='lazy'
        alt={item.name}
      />
      <div className={styles.heart}>
        <Heart item={item} />
      </div>
    </div>
  );
}

export default memo(GalleryItem);
