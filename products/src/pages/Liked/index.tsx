import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Gallery from '../../components/Gallery';
import styles from './index.module.css';

function Liked() {
  const characters = useSelector(
    (store: RootState) => store.characters.characters
  );

  console.log(characters);
  return (
    <div className={styles.container}>
      <h3>Liked</h3>
      <Gallery data={characters} />
    </div>
  );
}

export default Liked;
