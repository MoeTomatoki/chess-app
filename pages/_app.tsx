import clsx from "clsx";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={clsx(inter.className, "text-grey-900")}>
      <Component {...pageProps} />
      {/* сюда модалочку порталить */}
    </div>
  );
};

export default App;
