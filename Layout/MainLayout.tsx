import HeuristicsNetDiagram from "components/Heuristic/HeuristicNetVisualization";
import dynamic from "next/dynamic";
import Head from "next/head";
import { HeuristicNetImageService } from "utils/request/requestService/heuristicNetImageRequest";

const AppHeader = dynamic(() => import("./AppHeader"), {
  ssr: false,
});

type LayoutType = {
  children?: React.ReactNode;
  title?: string;
};
export default function MainLayout({ children, title }: LayoutType) {
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
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
            <main className="m-[30px]">
              <div className="w-full mx-auto h-full" >
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

