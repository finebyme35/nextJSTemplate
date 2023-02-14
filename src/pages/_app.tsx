import "../styles/globals.scss";
import MainLayout from "Layout/MainLayout";
import type { AppProps } from "next/app";
import "regenerator-runtime/runtime";
import { store, StoreContext } from "stores/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreContext.Provider>
  );
}
