import { useState } from "react";

import { Header } from "./components/Header";
import { DateDialog } from "./components/DateDialog";

export const App = () => {
  const [dateEntered, setDateEntered] = useState<Date | null>(
    new Date(1950, 9, 8)
  );

  function dateSelected(value?: Date) {
    setDateEntered(value ?? null);
  }

  return (
    <div className="h-full flex flex-col">
      <Header dateSelected={dateSelected} />
      <main className="flex-grow">
      </main>
    </div>
  );
};
