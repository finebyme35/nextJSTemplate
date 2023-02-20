import "../styles/globals.scss";
import MainLayout from "Layout/MainLayout";
import type { AppProps } from "next/app";
import "regenerator-runtime/runtime";
import { store, StoreContext } from "stores/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
    <StoreContext.Provider value={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreContext.Provider>
    </DndProvider>
  );
}
