import { NavLink, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import cn from 'classnames';

interface IProps {
  link: { name: string; to: string };
}

function ListItem({ link }: IProps) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={cn(styles.links, path === link.to ? styles.hide : '')}>
      <NavLink to={link.to}>{link.name}</NavLink>
    </div>
  );
}

export default ListItem;
