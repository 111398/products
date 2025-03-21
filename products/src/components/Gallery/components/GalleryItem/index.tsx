import { IGalleryItemProps } from '../../../../types';
import Heart from '../../../Heart';
import styles from './index.module.css';

function GalleryItem({ item }: IGalleryItemProps) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{item.name}</p>
      <img className={styles.image} src={item.image} />
      <div className={styles.heart}>
        <Heart item={item} />
      </div>
    </div>
  );
}

export default GalleryItem;
