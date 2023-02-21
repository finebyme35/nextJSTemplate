import { observer } from 'mobx-react-lite';
import React from 'react'
import { useStore } from 'stores/store'

export default observer(function TabPane() {
    const {tabsStore} = useStore();
    const {selectedTab, tabsData} = tabsStore;
    console.log(tabsData)
  return (
    <>
    { tabsData.find(x => x.id == selectedTab) ? tabsData.find(x => x.id == selectedTab).body : ""}
    </>
  )
})

export const TabsPaneChange = () => {
    const {tabsStore} = useStore();
    const {selectedTab, tabsData} = tabsStore;
    
    return <div>{tabsData.find(x => x.id == selectedTab).name}</div>
  }