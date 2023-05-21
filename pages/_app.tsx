// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css';
import "tw-elements/dist/css/tw-elements.min.css";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

