// import {NavLink} from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => [
  <div>
    {/* <NavLink to="/shcedule">shcedule</NavLink> */}
    <ul className={styles.navigate}>
      {['Мастера', 'Прайс-лист', 'Контакты', 'Вход'].map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  </div>,
  <div>
    <h1 className={styles.nameSalon}>SALON HAIRDRESSING</h1>
  </div>,
  <div>
    <input className={styles.onlineRecord} type="date" />
  </div>,
];
