import { LookupTable } from "../lookup";
import { Pair } from "./Pair";

export interface Props {
  lookup: LookupTable;
}

export const Table = ({ lookup: table }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(2rem, 1fr))",
        gap: "0.5rem",
      }}
    >
      {table.origin.split("").map((origin, index) => (
        <Pair key={origin} origin={origin} converted={table.converted[index]} />
      ))}
    </div>
  );
};
