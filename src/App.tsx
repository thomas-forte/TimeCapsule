import { useState } from "react";

import { Header } from "./components/Header";
import { Initial } from "./components/Initial";
import { DateViewer } from "./components/DateViewer";

export const App = () => {
  const [dateEntered, setDateEntered] = useState<Date | null>(
    new Date(1991, 9, 8)
  );

  function dateSelected(value?: Date) {
    setDateEntered(value ?? null);
  }

  return (
    <div className="h-full flex flex-col">
      <Header dateSelected={dateSelected} />
      <main className="flex-grow">
        {dateEntered ? <DateViewer date={dateEntered} /> : <Initial />}
      </main>
    </div>
  );
};
