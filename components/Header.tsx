import Link from "next/link";
import {useEffect, useState} from "react";

const links = [
  { href: '/', label: 'Strona główna' },
  { href: '/about/', label: 'O nas' },
  { href: '/blog/', label: 'Blog' }
];
export const Header = () => {
  const [selected, setSelected] = useState("");

  console.log(selected)
  useEffect(() => {
    const path = window.location.pathname;
    console.log(path)
    setSelected(path);
  }, [])

  const mappedLinks = () => {
    console.log()
    return links.map(({ href, label }) => (
      <>
        <Link key={href} href={href} passHref>
            <span className={`mr-3.5 ml-3.5 ${selected === href ? "active" : ""}`} onClick={() => setSelected(href)}>
              {label}
            </span>
        </Link>
        <p className="inline">|</p>
      </>
    ))
  }

  return (
    <header>
      <nav className="bg-amber-600 py-1 px-2 text-white">
        {mappedLinks()}
      </nav>
    </header>
  );
};
