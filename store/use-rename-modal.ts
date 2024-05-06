import { title } from "process";
import { create } from "zustand";

const defaultValues = { id: "", title: "" };

interface IRenameModal {
  isOpen: boolean;
  intialValues: typeof defaultValues;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  intialValues: defaultValues,
  onOpen: (id, title) => {
    set({ isOpen: true, intialValues: { id, title } });
  },
  onClose: () => set({ isOpen: false, intialValues: defaultValues }),
}));
