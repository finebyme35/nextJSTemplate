import { makeAutoObservable, runInAction } from "mobx"




export default class LocalStore {
    dataRegistry = new Map<string | number , any>();
    selectedData: any | undefined = undefined;


    constructor(){
        makeAutoObservable(this)
    }
    getData = (id: number | string) => {
        return this.dataRegistry.get(id);
    }

    setData = (id: number | string, data: any) => {
        this.dataRegistry.set(id, data)
    }

    removeData = (id: number |string) => {
        runInAction(() => {
            this.dataRegistry.delete(id);
        })
    }
    
}