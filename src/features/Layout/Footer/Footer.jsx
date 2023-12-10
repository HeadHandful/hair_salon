import styles from './Footer.module.css';

export const Footer = () => (
  <div className={styles.fon}>
    <ul className={styles.colorText}>
      {['ООО "Барбершоп"', 'ИНН 6685028654', 'ОГРН 11366850055', '620075, Екатеринбург, Мамина-Сибиряка 102'].map(
        (el) => (
          <li key={el}>{el}</li>
        ),
      )}
    </ul>
    <ul className={styles.colorText}>
      {[
        'Телефон: +7 932 114 33-29, +7 932 604 70-60',
        'Время работы: пн-пт 10:00 - 20:00',
        'mail: salon_hairdressing@gamil.com',
        'Адрес: г. Екатеринбург Вторчермет ул. Титова, 29',
      ].map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  </div>
);
