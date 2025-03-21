import { ReactNode } from 'react';
import styles from './index.module.css';

interface Iprops {
  children: ReactNode;
}

function Section({ children }: Iprops) {
  return <section className={styles.section}>{children}</section>;
}

export default Section;
