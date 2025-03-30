import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

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
        className="fixed inset-0 bg-black/65 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-dvw">
        <div className="min-h-full">
          <DialogPanel
            transition
            className="relative h-dvh flex flex-col justify-between items-center transform overflow-hidden transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="text-[10dvh] font-montserrat text-white">Help</div>
            <div className="h-[70dvh] w-[80dvw] ms-[20dvw] text-[4dvh] font-montserrat text-white">
              {getHelpPage(page)}
            </div>
            <div className="h-[10dvh] w-full flex justify-around items-center text-[4dvh] font-montserrat text-white px-[20dvw]">
              <div
                className="cursor-pointer select-none min-w-[20dvw]"
                onClick={() => setPage(page - 1)}
              >
                {page != 0 ? (
                  <div className="flex items-center">
                    <ArrowLeftIcon className="size-10" />
                    Previous
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div
                className="cursor-pointer select-none min-w-[20dvw]"
                onClick={() => onClose()}
              >
                Close
              </div>
              <div
                className="cursor-pointer select-none min-w-[20dvw]"
                onClick={() => setPage(page + 1)}
              >
                {page != 2 ? (
                  <div className="flex items-center">
                    Next
                    <ArrowRightIcon className="size-10" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
