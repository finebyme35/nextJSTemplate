import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react'
import { useStore } from 'stores/store'



export default observer(function Tabs({data, defaultActiveKey}: any) {
    const {tabsStore} = useStore();
    const {selectedTab, changeTab} = tabsStore
    useEffect(() => {changeTab(defaultActiveKey, data)},[])
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
    <ul className="flex  overflow-x-scroll -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {data.map((x: any, i: any) => {
            return <li className="mr-2" onClick={() => changeTab(i, data)} key={i}>
            <a href="#" className={selectedTab == i ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}>
                <svg className={selectedTab == i ? "w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" : "w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>{x.name}
            </a>
        </li>
        })}
       
    </ul>
</div>
  )
})
