import { makeAutoObservable, runInAction } from "mobx"

interface Filter {
    data: Array<any>;
    key: string;
}


export default class FilterStore {
    filter: Filter = {
    data: [],
    key: ""
    }

    constructor(){
        makeAutoObservable(this)
    }
    getFilterData(data: any, key: string){    
       const filtersData = data.filter((x: any) => x.role == key)
       return filtersData;
    }
    
}