import { makeAutoObservable, runInAction } from "mobx"




export default class LoadingStore {
    loading = false;

    constructor(){
        makeAutoObservable(this)
    }
    loadingTrue = () => {
        this.loading = true;
    }

    loadingFalse = () => {
        this.loading = false;
    }

    
}