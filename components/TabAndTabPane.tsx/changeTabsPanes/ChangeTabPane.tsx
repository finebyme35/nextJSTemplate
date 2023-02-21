import { useStore } from "stores/store";

export const TabsPaneChange = () => {
    const {tabsStore} = useStore();
    const {selectedTab, tabsData} = tabsStore;
    
    return <div>{tabsData.find(x => x.id == selectedTab).name}</div>
  }