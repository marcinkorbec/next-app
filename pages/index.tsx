import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen bg-teal-300">
      <header>
        <nav className="bg-amber-300 py-1 px-2">Nawigacja</nav>
      </header>
      <main className="flex-grow py-1 px-2">
        Właściwa zawartość.
      </main>
      <footer className="bg-amber-400 py-1 px-2">
        Stopka
      </footer>
    </div>)
}
