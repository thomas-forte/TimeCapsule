import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Input,
} from "@headlessui/react";
import { FormEvent } from "react";

interface DateDialogProps {
  show: boolean;
  initialDate: Date | null;
  closeModal: () => void;
  closeModalWithValue: (value: Date) => void;
}

export const DateDialog = ({
  show,
  initialDate,
  closeModal,
  closeModalWithValue,
}: DateDialogProps) => {
  const minimum = "1950-01-01";
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: FormEvent) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const enteredDate = formData.get("date");
    let processedDate;
    if (enteredDate) {
      processedDate = new Date(`${enteredDate.toString()}T00:00:00`);
    }

    if (processedDate) {
      closeModalWithValue(processedDate);
    } else {
      closeModal();
    }
  }

  let defaultDate: Date;
  if (initialDate) {
    defaultDate = initialDate;
  } else {
    defaultDate = new Date();
    defaultDate.setFullYear(
      Math.floor(Math.random() * (defaultDate.getFullYear() - 1950 + 1) + 1950)
    );
  }

  return (
    <Dialog
      open={show}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-lg rounded-xl bg-neutral-100 p-[4vw] backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border-solid border-black border-[0.5vw]"
          >
            <DialogTitle
              as="h3"
              className="text-base/7 font-medium text-neutral-600"
            >
              Time Entry Form (Draft: 29c-442)
            </DialogTitle>

            <form method="post" onSubmit={handleSubmit}>
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-neutral-600"
              >
                Date
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <Input
                  name="date"
                  type="date"
                  min={minimum}
                  max={today}
                  defaultValue={defaultDate.toISOString().split("T")[0]}
                  className="block w-full rounded-md border-0 py-1.5 px-7 text-neutral-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-2 text-sm/6 text-neutral-600/50">
                By submission you agree with the terms, conditions, and
                aberrations.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-neutral-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
