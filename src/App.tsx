import { useState } from "react";

import { Header } from "./components/Header";
import { DateDialog } from "./components/DateDialog";

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [dateEntered, setDateEntered] = useState<Date | null>(
    new Date(1952, 9, 8)
  );

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function closeModalWithValue(value?: Date) {
    setDateEntered(value ?? null);
    setShowModal(false);
  }

  return (
    <div className="h-full flex flex-col">
      <Header startHereClicked={openModal} />
      <main className="flex-grow">
      <DateDialog
        show={showModal}
        closeModal={closeModal}
        closeModalWithValue={closeModalWithValue}
      />
    </div>
  );
};
