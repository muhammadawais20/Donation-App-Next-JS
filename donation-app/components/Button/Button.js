import styles from "../../styles/Button.module.scss";

const Button = ({ onClick, children, otherButtonClass }) => {
  return (
    <div
      className={`${styles.button} ${
        styles.otherButtonClass ? styles.otherButtonClass : styles.button
      }`}
      onClick={onClick}
    >
      <button>{children}</button>
    </div>
  );
};

export default Button;
