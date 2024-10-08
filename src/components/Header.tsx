import styles from "./Header.module.css";
import { LookupTableName, LookupTables } from "../lookup";

export interface Props {
  currentLookupTableName: LookupTableName;
  setCurrentLookupTableName: (lookupTableName: LookupTableName) => void;
}

export const Header = ({
  currentLookupTableName,
  setCurrentLookupTableName,
}: Props) => {
  return (
    <header className={styles.header}>
      <h1>{currentLookupTableName} Table</h1>
      <select
        value={currentLookupTableName}
        onChange={(event) =>
          setCurrentLookupTableName(event.target.value as LookupTableName)
        }
      >
        {Object.keys(LookupTables).map((lookupTableName) => (
          <option key={lookupTableName} value={lookupTableName}>
            {lookupTableName}
          </option>
        ))}
      </select>
    </header>
  );
};
