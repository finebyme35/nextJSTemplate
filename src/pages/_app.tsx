import "../styles/globals.scss";
import MainLayout from "Layout/MainLayout";
import type { AppProps } from "next/app";
import "regenerator-runtime/runtime";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SessionProvider } from "next-auth/react";
import { baseNextAuthUrlApi } from "constant/baseApiUrlConstant";
import { Provider } from "react-redux";
import { store } from "stores/store";

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session} basePath={baseNextAuthUrlApi}>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </DndProvider>
    </SessionProvider>
  );
}
