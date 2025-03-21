import likedHeart from '/heart_red.jpeg';
import unlikedHeart from '/heart.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { like, unlike } from '../../redux/slices/characterSlice';
import { memo, useMemo } from 'react';
import styles from './index.module.css';
import cn from 'classnames';

const Heart = memo(({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );
  const likeHelper = () => {
    if (characters.includes(id)) {
      dispatch(unlike(id));
    } else {
      dispatch(like(id));
    }
  };

  const liked = useMemo(() => characters.includes(id), [characters, id]);
  return (
    <img
      src={liked ? likedHeart : unlikedHeart}
      className={cn(styles.heart, liked ? styles.liked : '')}
      onClick={likeHelper}
      alt='image'
    />
  );
});

export default Heart;
