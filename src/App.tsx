import React from "react";

import FilterInputs from "./components/FilterInputs/FilterInputs.tsx";
import Table from "./components/Table/Table.tsx";

import css from "./App.module.css";

function App() {
  return (
    <div>
      <main className={css.container}>
        <FilterInputs />
        <Table />
      </main>
    </div>
  );
}

export default App;
