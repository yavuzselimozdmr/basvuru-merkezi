import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");

    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
    }
  }, []);

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image
            src="/logo.png"   // public/logo.svg içinde olmalı
            alt="TÜGVA Logo"
            width={110}       // ihtiyacına göre boyutu ayarla
            height={25}
            priority
          />
        </Link>

        <nav>
          <ul className="nav-menu" id="navMenu">
            <li><Link href="/">Anasayfa</Link></li>
            <li><a href="https://tugva.org/hakkimizda" target="_blank">Hakkımızda</a></li>
            <li><a href="https://tugva.org/yurtlar">Yurtlar</a></li>
            <li><a href="https://tugva.org/tugva-icathane">İcathane</a></li>
            <li><a href="https://tugva.org/i%CC%87letisim">İletişim</a></li>
          </ul>
          <button className="mobile-menu-btn" id="mobileMenuBtn">
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}
