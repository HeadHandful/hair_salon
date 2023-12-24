import styles from './Contacts.module.css';
import {YMaps, Map} from '@pbe/react-yandex-maps';

export const Contacts = () => (
  <div className={styles.contactsPosition}>
    <div className={styles.contactsText}>
      <p>Телефон: +7 932 114 33-29, +7 932 604 70-60</p>
      <p>Время работы: пн-пт 10:00 - 20:00</p>
      <p>mail: salon_hairdick@gmail.com</p>
      <p>Адрес: г. Екатеринбург Вторчермет ул. Титова, 29</p>
    </div>
    <YMaps>
      <div>
        <Map width="95%" height="300px" defaultState={{center: [56.77295364860497, 60.61407090619905], zoom: 16}} />
      </div>
    </YMaps>
  </div>
);
