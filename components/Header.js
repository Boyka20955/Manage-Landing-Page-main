import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentWidth, setcurrentWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 599) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <div className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={100}
          height={20}
          alt="Manage Landing Page Logo"
        />
      </Link>
      <nav className={!isOpen ? styles.nav : styles.show}>
        <li>
          <Link href="/pricing" className="nav-list">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/product" className="nav-list">
            Product
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="nav-list">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/careers" className="nav-list">
            Careers
          </Link>
        </li>
        <li>
          <Link href="/community" className="nav-list">
            Community
          </Link>
        </li>
      </nav>

      <Link href="/get-started" className={styles.getstarted_btn_h}>
        Get Started
      </Link>

      <button className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <Image
            src="/images/icon-hamburger.svg"
            height={20}
            width={25}
            alt="icon-hamburger"
          />
        ) : (
          <Image
            src="/images/icon-close.svg"
            height={20}
            width={20}
            alt="icon-close"
          />
        )}
      </button>
    </div>
  );
};

export default Header;
