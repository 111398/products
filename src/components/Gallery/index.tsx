import GalleryItem from './components/GalleryItem';
import { ICharacter } from '../../types';
import styles from './index.module.css';

function Gallery({ data }: { data?: ICharacter[] }) {
  return (
    <>
      <div className={styles.gallery}>
        {data && data.map((el) => <GalleryItem item={el} key={el.id} />)}
      </div>
    </>
  );
}

export default Gallery;
