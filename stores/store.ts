import { createContext, useContext } from "react";
import ModalStore from "./eachStore/modalStore";

interface Store {
    modalStore: ModalStore;
}

export const store: Store = {
    modalStore: new ModalStore(),
}

export const StoreContext = createContext(store);

export function useStore () {
    return useContext(StoreContext);
}