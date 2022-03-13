import styles from "./index.module.scss";

function Card(props) {
  const { page, name, onRetry = () => {}, onNext = () => {} } = props;

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <p>{page}</p>
      <button onClick={onRetry}>Retry</button>
      <button onClick={onNext}>Next Data</button>
    </div>
  );
}

export default Card;
