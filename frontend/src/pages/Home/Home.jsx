// import {NavLink} from 'react-router-dom';
// import cn from 'classnames';
// import img from '../../assets/images/salon.jpeg';
import styles from './Home.module.css';
import {PriceTable} from '../../features/PriceTable/PriceTable';
import {Masters} from '../../features/Masters/Masters';
import {Contacts} from '../../features/Contacts/Contacts';

export const Home = () => (
  <div>
    <div className={styles.imageHeader}>
      <div>
        <ul className={styles.navigate}>
          {['Мастера', 'Прайс-лист', 'Контакты', 'Вход'].map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className={styles.nameSalon}>SALON HAIRDRESSING</h1>
      </div>
      <div>
        <input className={styles.onlineRecord} type="date" />
      </div>
    </div>
    <div>
      <h1>МАСТЕРА</h1>
      <Masters />
    </div>
    <div>
      <h1>ПРАЙС-ЛИСТ</h1>
      <PriceTable />
    </div>
    <div>
      <h1>КОНТАКТЫ</h1>
      <Contacts />
    </div>
  </div>
);
