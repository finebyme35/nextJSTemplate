import dynamic from "next/dynamic";
import Head from "next/head";
import { useStore } from "stores/store";
import { observer } from "mobx-react-lite";

const AppHeader = dynamic(() => import("./AppHeader"), {
  ssr: false,
});

type LayoutType = {
  children?: React.ReactNode;
  title?: string;
};
export default observer(function MainLayout({ children, title }: LayoutType) {
  const {sidebarStore} = useStore();
  const {sidebar} = sidebarStore
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex h-screen overflow-hidden">
          <div className="hidden md:block">
            <h1>Left Menu If You Want</h1>
          </div>
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <AppHeader />
            <main>
              <div className={sidebar.open == true ? "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto opacity-20" : "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"} >
                {children}
              </div>
            </main>
          </div>
        </div>
        {/* <main>
        {children}
      </main> */}
      </>
    );
})

