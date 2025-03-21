import { useState } from 'react';
import GalleryItem from './components/GalleryItem';
import useGetData from '../../hooks/useGetData';
import styles from './index.module.css';

function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const [data, pages] = useGetData(currentPage);

  const paginationHelper = (e: React.MouseEvent<HTMLSpanElement>) => {
    const pg = Number(e.currentTarget.getAttributeNode('data-page')?.value);
    setCurrentPage(pg);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.text}>Galeery</h3>
      <div className={styles.gallery}>
        {data &&
          data.results.map((el) => <GalleryItem item={el} key={el.id} />)}
      </div>
      <div className={styles.pagination}>
        {pages &&
          pages.map((pg) => (
            <span
              className={styles.paginationNumber}
              data-page={pg}
              onClick={paginationHelper}
              key={`span_${pg}`}
            >
              {pg}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Products;
