import clsx from "clsx";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className, "text-grey-900")}>
      <Component {...pageProps} />
      {/* сюда модалочку порталить */}
    </div>
  );
}
