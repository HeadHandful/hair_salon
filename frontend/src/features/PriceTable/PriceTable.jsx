import styles from './PriceTable.module.css';

const servicesWoman = [
  {haircut: 'Стрижка', price: 550},
  {haircut: 'Стрижка креативная + Каре', price: 650},
  {haircut: 'Подравнивание волос одним срезом', price: 250},
  {haircut: 'Оформление челки', price: 200},
  {haircut: 'Сушка феном', price: 140},
  {haircut: 'Окрашивание', price: 1500},
  {haircut: 'Окрашивание корней', price: 1300},
  {haircut: 'Наголо', price: 200},
  {haircut: 'Мелирование', price: 1600},
  {haircut: 'Сложное окрашивание', price: 4000},
  {haircut: 'Выпрямление волос', price: 200},
  {haircut: 'Укладка волос', price: 450},
];

const servicesMan = [
  {haircut: 'Модельная', price: 450},
  {haircut: 'Модельная удлинённая', price: 500},
  {haircut: 'Камуфляж волос (налысо)', price: 1600},
  {haircut: 'Полоска', price: 50},
  {haircut: 'Креативная', price: 500},
  {haircut: 'Спортивная', price: 350},
  {haircut: 'Площадка', price: 500},
  {haircut: 'Наголо', price: 200},
  {haircut: 'Льготная стрижка', price: 300},
  {haircut: 'Окантовка', price: 150},
  {haircut: 'Стрижка бороды', price: 500},
  {haircut: 'Оформление усов', price: 50},
];

const ServiceTable = ({services}) => (
  <table>
    <tr>
      <th>Услуга</th>
      <th className={styles.costHaers}>Прайс</th>
    </tr>
    {services.map((service) => (
      <tr key={service.haircut}>
        <td>{service.haircut}</td>
        <td className={styles.costHaers}>{service.price}</td>
      </tr>
    ))}
  </table>
);

export const PriceTable = () => (
  <div className={styles.positionTable}>
    <div>
      <h3>Женский лист</h3>
      <div>
        <ServiceTable services={servicesWoman} />
      </div>
    </div>

    <div>
      <h3>Мужской лист</h3>
      <div className={styles.manBackground}>
        <ServiceTable services={servicesMan} />
      </div>
    </div>
  </div>
);
