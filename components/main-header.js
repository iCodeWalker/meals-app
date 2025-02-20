import Link from "next/link";
import logoImg from "@/assets/logo.png";
// In next projects the image is imported as an object and we have to access the path using src property of the image object

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="logo" />
        Nextlevel Food
      </Link>

      <nav>
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
