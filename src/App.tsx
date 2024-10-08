import "./App.css";
import { useState } from "react";
import { Table } from "./components/Table";
import { LookupTableName, LookupTables } from "./lookup";
import { Header } from "./components/Header";

function App() {
  const [tableName, setTableName] = useState<LookupTableName>("ROT13");
  const table = LookupTables[tableName];

  return (
    <>
      <Header
        currentLookupTableName={tableName}
        setCurrentLookupTableName={setTableName}
      />
      <Table lookup={table} />
    </>
  );
}

export default App;
