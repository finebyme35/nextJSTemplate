import { makeAutoObservable } from "mobx"

interface SidebarOpenClose {
    open: boolean;
}


export default class SidebarStore {
    sidebar: SidebarOpenClose = {
        open: false,
    }

    constructor(){
        makeAutoObservable(this)
    }

    openSidebar = () => {
        this.sidebar.open = true;
    }

    closeSidebar = () =>{
        this.sidebar.open= false;
    }
}