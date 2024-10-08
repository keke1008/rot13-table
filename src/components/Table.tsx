import styles from "./Table.module.css";
import { LookupTable } from "../lookup";
import { Pair } from "./Pair";

export interface Props {
  lookup: LookupTable;
}

export const Table = ({ lookup: table }: Props) => {
  return (
    <div className={styles.table}>
      {table.origin.split("").map((origin, index) => (
        <Pair key={origin} origin={origin} converted={table.converted[index]} />
      ))}
    </div>
  );
};
