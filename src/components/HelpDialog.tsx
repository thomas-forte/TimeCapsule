import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface HelpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpScreen = ({ isOpen, onClose }: HelpDialogProps) => {
  const [page, setPage] = useState(0);

  const getHelpPage = (page: number) => {
    if (page === 0) {
      return (
        <div>
          Select a date from the panel on the left using the up and down arrows.
          <br />
          (Hint: hold 'alt' and click an arrow to skip 10 days or years at a
          time)
          <br />
          <br />
          Alternatively, click the dice button to pick a random date!
        </div>
      );
    } else if (page === 1) {
      return (
        <div>
          Select the categories you wish to view by clicking the appropriate
          buttons.
          <br />
          <br />
          <br />
          (Note that the 'All' button is selected by default)
        </div>
      );
    } else if (page === 2) {
      return (
        <div>
          Click the arrow button to view your selections!
          <br />
          <br />
          <br />
          To view another date, simply repeat the process.
        </div>
      );
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => onClose()} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-dvw">
        <div className="min-h-full">
          <DialogPanel
            transition
            className="relative h-dvh flex flex-col justify-between items-center transform overflow-hidden transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="text-[10dvh] font-montserrat">Help</div>
            <div className="h-[70dvh] w-[80dvw] ms-[20dvw] text-[4dvh] font-montserrat">
              {getHelpPage(page)}
              <button
                type="button"
                data-autofocus
                onClick={() => onClose()}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
            <div className="h-[10dvh] w-full flex justify-around items-center text-[4dvh] font-montserrat px-[20dvw]">
              <div
                className="cursor-pointer select-none min-w-[20dvw]"
                onClick={() => setPage(page - 1)}
              >
                {page != 0 ? "<- Previous" : ""}
              </div>
              <div
                className="cursor-pointer select-none min-w-[20dvw]"
                onClick={() => setPage(page + 1)}
              >
                {page != 2 ? "Next ->" : ""}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
