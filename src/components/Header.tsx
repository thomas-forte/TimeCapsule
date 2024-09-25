import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";

import { DateDialog } from "./DateDialog";
import { Logo } from "./Logo";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function closeModalWithValue(value: Date) {
    navigate(value.toISOString().slice(0, 10).replace(/-/g, "/"));
    setShowModal(false);
  }

  return (
    <header className="flex justify-between items-center bg-neutral-100 p-[3vw] border-solid border-black border-b">
      <div className="w-1/2 flex flex-col items-center">
        <Logo />
        <p className="font-montserrat font-light text-[2.5vw] text-coldGray">
          Unveiling your birthday wonders!
        </p>
      </div>
      <Button
        onClick={openModal}
        className="mr-[2vw] w-[25vw] h-[6vw] rounded-small text-[3vw] border-solid border-neutral-600 border-thin text-coldGray font-montserrat focus:outline-none data-[hover]:bg-black/10"
      >
        Start Here!
      </Button>
      <DateDialog
        show={showModal}
        initialDate={new Date()}
        closeModal={closeModal}
        closeModalWithValue={closeModalWithValue}
      />
    </header>
  );
};
