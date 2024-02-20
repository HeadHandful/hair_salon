import cn from 'classnames';
import styles from './PriceTable.module.css';

export const ServiceTable = ({services}) => (
  <table>
    <tr>
      <th className={styles.serviceAndPrise}>Услуга</th>
      <th className={cn(styles.costHaers, styles.serviceAndPrise)}>Прайс</th>
    </tr>
    {services.map((service) => (
      <tr key={service.haircut}>
        <td>{service.haircut}</td>
        <td className={styles.costHaers}>{service.price}</td>
      </tr>
    ))}
  </table>
);
