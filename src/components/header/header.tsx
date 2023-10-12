/* eslint-disable @typescript-eslint/no-unused-vars */
import style from "./header.module.scss";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import logo from "/logo.png";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={style["nav-container"]}>
        <main>
          <img src={logo} alt="ISDI Coders logo" />

          <ul style={isMenuOpen ? { right: "0%" } : { right: "-150%" }}>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Linktree</a>
            </li>
          </ul>

          <section
            className={style.menu}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            role="button"
            aria-label="button"
          >
            {isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </section>
        </main>
      </nav>
    </>
  );
}
