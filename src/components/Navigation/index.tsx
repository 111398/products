import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';
import styles from './index.module.css';
import logo from '/5502029.jpeg';

const links = [
  { id: 2, name: 'characters', to: '/characters' },
  { id: 3, name: 'liked', to: '/liked' },
];

function Navigation() {
  const navigate = useNavigate();
  const navigateHelper = () => {
    navigate('/');
  };
  return (
    <>
      <header className={styles.header} data-testid='layout'>
        <nav className={styles.navigation}>
          <img className={styles.logo} src={logo} onClick={navigateHelper} />
          {links.map((link) => (
            <ListItem link={link} key={link.id} />
          ))}
        </nav>
      </header>
    </>
  );
}

export default Navigation;
