import { makeAutoObservable, runInAction } from "mobx"




export default class TabsStore {
    selectedTab: number | undefined = 0;
    tabsData: Array<any> = [];

    constructor(){
        makeAutoObservable(this)
    }

    changeTab = (id: number, data: Array<any>) => {
        this.selectedTab = id;
        this.tabsData = data;
    }

}