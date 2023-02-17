import { createContext, useContext } from "react";
import FilterStore from "./eachStore/filterStore";
import LoadingStore from "./eachStore/loadingStore";
import LocalStore from "./eachStore/localStore";
import ModalStore from "./eachStore/modalStore";
import SidebarStore from "./eachStore/sidebarStore";

interface Store {
    modalStore: ModalStore;
    filterStore: FilterStore;
    localStore: LocalStore;
    loadingStore: LoadingStore;
    sidebarStore: SidebarStore;
}

export const store: Store = {
    modalStore: new ModalStore(),
    filterStore: new FilterStore(),
    localStore: new LocalStore(),
    loadingStore: new LoadingStore(),
    sidebarStore: new SidebarStore(),
}

export const StoreContext = createContext(store);

export function useStore () {
    return useContext(StoreContext);
}