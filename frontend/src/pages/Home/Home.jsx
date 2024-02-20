// import {NavLink} from 'react-router-dom';
// import cn from 'classnames';
// import img from '../../assets/images/salon.jpeg';
// import {TypeSelector} from '@pbe/react-yandex-maps';
import styles from './Home.module.css';
import {PriceTable} from '../../features/PriceTable/PriceTable';
import {Masters} from '../../features/Masters/Masters';
import {Contacts} from '../../features/Contacts/Contacts';

// CONST NAV_ITEMS =

export const Home = () => (
  <div>
    <div className={styles.imageHeader}>
      <div>
        <ul className={styles.navigate}>
          {/* TODO  перенести сонстанту отдельно */}
          {['Мастера', 'Прайс-лист', 'Контакты', 'Вход'].map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className={styles.nameSalon}>SALON HAIRDRESSING</h1>
      </div>
      {/* TODO вынести в модальное окно */}
      <div>
        <input type="button" value="ОНЛАЙН ЗАПИСЬ" className={styles.onlineRecord} />
      </div>
    </div>
    <div>
      <h2 className={styles.nameSlades}>МАСТЕРА</h2>
      <Masters />
    </div>
    <div>
      <h2 className={styles.nameSlades}>ПРАЙС-ЛИСТ</h2>
      <PriceTable />
    </div>
    <div>
      <h2 className={styles.nameSlades}>КОНТАКТЫ</h2>
      <Contacts />
    </div>
  </div>
);
