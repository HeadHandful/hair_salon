import styles from './Masters.module.css';
import FirstMaster from '../../assets/images/Toxa.jpg';
import SecondMaster from '../../assets/images/Vit.jpg';

export const Masters = () => (
  <div className={styles.positionsMasters}>
    <div className={styles.positionsMasters}>
      <img className={styles.sizeImageMaster} src={FirstMaster} alt="Toxa" />
      <div>
        <h3 className={styles.nameMaster}>Тоха Кабанов</h3>
        <p className={styles.biography}>
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
    </div>
    <div className={styles.positionsMasters}>
      <div>
        <h3 className={styles.nameMaster}>Виталя Подстригало</h3>
        <p className={styles.biography}>
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
      <img className={styles.sizeImageMaster} src={SecondMaster} alt="Vitalya" />
    </div>
  </div>
);
