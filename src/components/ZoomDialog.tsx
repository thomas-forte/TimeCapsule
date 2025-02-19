import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface ZoomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  imgAlt?: string;
}

export const ZoomDialog = ({
  isOpen,
  onClose,
  imgSrc,
  imgAlt,
}: ZoomDialogProps) => (
  <Dialog
    open={isOpen}
    className="relative z-40 focus:outline-none"
    onClose={() => onClose()}
  >
    <DialogBackdrop className="fixed inset-0 bg-black/70" />
    <div className="fixed inset-0 z-50 w-dvw h-dvh overflow-none">
      <div className="flex w-dvw h-dvh items-center justify-center p-4">
        <DialogPanel
          transition
          className="rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 text-right"
        >
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 mb-3"
            onClick={onClose}
          >
            <XMarkIcon className="-mr-0.5 size-5" />
            Close
          </button>
          <div className="max-h-[85dvh] overflow-y-scroll">
            <img className="max-w-[90dvw]" src={imgSrc} alt={imgAlt} />
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
);
