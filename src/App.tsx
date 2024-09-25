import { Outlet } from "react-router-dom";

import { Header } from "./components/Header";
// import { RotateScreenPopup } from "./components/RotateScreenPopup";
// import { HelpScreenPopup } from "./components/HelpPopup";

export const App = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <RotateScreenPopup /> */}
      {/* <HelpScreenPopup date={dateEntered} /> */}
    </div>
  );
};
