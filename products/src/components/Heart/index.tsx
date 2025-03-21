import likedHeart from '/heart_red.jpeg';
import unlikedHeart from '/heart.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { like, unlike } from '../../redux/slices/characterSlice';
import { IGalleryItemProps } from '../../types';
import { memo, useMemo } from 'react';
import styles from './index.module.css';
import cn from 'classnames';

const Heart = memo(({ item }: IGalleryItemProps) => {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );
  const likeHelper = () => {
    if (characters.some((char) => char.id === item.id)) {
      dispatch(unlike(item.id));
    } else {
      dispatch(like(item));
    }
  };

  const liked = useMemo(
    () => characters.some((char) => char.id === item.id),
    [characters, item.id]
  );
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
