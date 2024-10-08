import styles from "./Pair.module.css";

export interface Props {
  origin: string;
  converted: string;
}

export const Pair = ({ origin, converted }: Props) => {
  return (
    <div className={styles.pair}>
      <div>{origin}</div>
      <hr className={styles.bar} />
      <div>{converted}</div>
    </div>
  );
};
