import { Button } from "@headlessui/react";

import timeCapsuleLogo from "../assets/logo.svg";

interface HeaderProps {
  startHereClicked: () => void;
}

export const Header = ({ startHereClicked }: HeaderProps) => (
  <header className="flex justify-between items-center bg-neutral-100 p-[3vw] border-solid border-black border-b-[0.5vw]">
    <div className="w-1/2 flex flex-col items-center">
      <img className="w-[40vw]" src={timeCapsuleLogo} alt="Time Capsule Logo" />
      <p className="font-montserrat font-light text-[2.5vw] text-coldGray">
        Unveiling your birthday wonders!
      </p>
    </div>
    <Button
      onClick={startHereClicked}
      className="mr-[2vw] w-[25vw] h-[6vw] rounded-[1vw] text-[3vw] border-solid border-neutral-600 border-[0.15vw] text-coldGray font-montserrat focus:outline-none data-[hover]:bg-black/10"
    >
      Start Here!
    </Button>
  </header>
);
