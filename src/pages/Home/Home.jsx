// import {NavLink} from 'react-router-dom';
// import cn from 'classnames';
// import img from '../../assets/images/salon.jpeg';
import styles from './Home.module.css';

export const Home = () => (
  <>
    <div>
      {/* <img src={img} alt="salon" /> */}
      {/* <NavLink to="/shcedule">shcedule</NavLink> */}
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
    <div>
      <h1>МАСТЕРА</h1>
      <div>
        <div>
          <h3>Тоха Кабанов</h3>
          <p>
            Тоха Кабанов не спроста его
            <br />
            так называют. Он звезда нашего
            <br />
            салона, креативный и
            <br />
            быстродумающий. Всех любит
            <br />
            подстригать налысо
          </p>
        </div>
        <div>
          <h3>Виталя Подстригало</h3>
          <p>
            Виталий человек дела, он не любит
            <br />
            всякую похвалу, просто берёт и
            <br />
            делает. У нас он работает более 4
            <br />
            лет, раньше по его словам, он
            <br />
            работал "дома" по 162 около 5 лет,
            <br />
            там он и полюбил подстригать.
          </p>
        </div>
      </div>
    </div>
    <div>
      <h1>Прайс-лист</h1>
      <div>
        <div>
          <h3>Женский лист</h3>
        </div>
      </div>
    </div>
  </>
);
