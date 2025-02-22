import Link from "next/link";
// In next projects the image is imported as an object and we have to access the path using src property of the image object
import logoImg from "@/assets/logo.png";
// Import the classes from main-header.module.css as an Object and than access the properties
import Styles from "./main-header.module.css";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className={Styles.header}>
      <Link href="/" className={Styles.logo}>
        {/* <img src={logoImg.src} alt="logo" /> */}
        <Image src={logoImg} alt="logo" priority />
        Nextlevel Food
      </Link>

      <nav className={Styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
