import "../styles/globals.scss";
import MainLayout from "Layout/MainLayout";
import type { AppProps } from "next/app";
import 'regenerator-runtime/runtime';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
