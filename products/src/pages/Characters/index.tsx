import { useState } from 'react';
import Gallery from '../../components/Gallery';
import useGetData from '../../hooks/useGetData';
import styles from './index.module.css';

function Characters() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, pages] = useGetData(currentPage);
  const paginationHelper = (e: React.MouseEvent<HTMLSpanElement>) => {
    const pg = Number(e.currentTarget.getAttributeNode('data-page')?.value);
    setCurrentPage(pg);
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>Gallery</h3>
      <Gallery data={data?.results} />
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

export default Characters;
