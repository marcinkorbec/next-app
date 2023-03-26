// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <p className="text-5xl text-red-500">Hej kurła</p>
    <Component {...pageProps} />
  </div>
}
