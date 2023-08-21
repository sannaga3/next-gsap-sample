import Header from "../Components/header";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-slate-700">
      <Header />
      <main className={`min-h-screen ${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
