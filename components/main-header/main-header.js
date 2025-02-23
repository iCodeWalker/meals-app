import Link from "next/link";
// In next projects the image is imported as an object and we have to access the path using src property of the image object
import logoImg from "@/assets/logo.png";
// Import the classes from main-header.module.css as an Object and than access the properties
import Styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
// import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

const MainHeader = () => {
  // const path = usePathname(); // this hook returns us the current active path
  return (
    <>
      <MainHeaderBackground />
      <header className={Styles.header}>
        <Link href="/" className={Styles.logo}>
          {/* <img src={logoImg.src} alt="logo" /> */}
          <Image src={logoImg} alt="logo" priority />
          Nextlevel Food
        </Link>

        <nav className={Styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals" title="Browse Meals" />
              {/* <Link
                href="/meals"
                className={path.startsWith("/meals") ? Styles.active : ""}
              >
                Browse Meals
              </Link> */}
            </li>
            <li>
              <NavLink href="/community" title="Foodies Community" />
              {/* <Link
                href="/community"
                className={path.startsWith("/community") ? Styles.active : ""}
              >
                Foodies Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
