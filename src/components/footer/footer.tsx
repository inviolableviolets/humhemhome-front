import "./footer.scss";
import { SiOnlyfans } from "react-icons/si";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://onlyfans.com/jordiporn/media"
          target="_blank"
          aria-label="OnlyFans social icon"
        >
          <SiOnlyfans />
        </a>
        <a
          href="https://www.linkedin.com/in/sergiomataherrero/"
          target="_blank"
          aria-label="LinkedIn social icon"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/inviolableviolets/"
          target="_blank"
          aria-label="Instagram social icon"
        >
          <AiFillInstagram />
        </a>
      </div>
      <address>hum © '23</address>
    </footer>
  );
}
