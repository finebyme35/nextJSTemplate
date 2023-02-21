import "../styles/globals.scss";
import MainLayout from "Layout/MainLayout";
import type { AppProps } from "next/app";
import "regenerator-runtime/runtime";
import { store, StoreContext } from "stores/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SessionProvider } from "next-auth/react";
import { baseNextAuthUrlApi } from "constant/baseApiUrlConstant";

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session} basePath={baseNextAuthUrlApi}>
    <DndProvider backend={HTML5Backend}>
      <StoreContext.Provider value={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </StoreContext.Provider>
    </DndProvider>
    </SessionProvider>
  );
}
