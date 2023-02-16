import dynamic from "next/dynamic";
import Head from "next/head";

const AppHeader = dynamic(() => import("./AppHeader"), {
  ssr: false,
});

type LayoutType = {
  children?: React.ReactNode;
  title?: string;
};
function MainLayout({ children, title }: LayoutType) {
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
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
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
}


export default MainLayout;
