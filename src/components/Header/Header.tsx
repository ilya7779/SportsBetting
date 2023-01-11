import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        Ставки на спорт
      </div>
    </header>
  );
};
