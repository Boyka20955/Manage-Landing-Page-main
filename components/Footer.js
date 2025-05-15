import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className={styles.section_1}>
        <h2>Simplify how your team works today.</h2>
        <Link href="/get-started" className={styles.getstarted_btn_f}>
          Get Started
        </Link>
      </div>
      <div className={styles.footer}>
        <div className={styles.section_2}>
          <div className={styles.r1}>
            <Link href="/" className={styles.logo_2}>
              <Image
                src="/images/logo.svg"
                width={100}
                height={20}
                alt="Manage Landing Page Logo"
              />
            </Link>

            <ul className={styles.social_link}>
              <li>
                <Link href="/facebook">
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
              </li>
              <li>
                <Link href="/youtube">
                  <i className="fab fa-youtube fa-2x"></i>
                </Link>
              </li>
              <li>
                <Link href="/twitter">
                  <i className="fab fa-twitter fa-2x"></i>
                </Link>
              </li>
              <li>
                <Link href="/pinterest">
                  <i className="fab fa-pinterest fa-2x"></i>
                </Link>
              </li>
              <li>
                <Link href="/instagram">
                  <i className="fab fa-instagram fa-2x"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.navigations}>
            <ul className="nav_1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>

            <ul className="nav_2">
              <li>
                <Link href="/careers"> Careers </Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.r3}>
            <Form />
            <h3 className={styles.copyright_text}>
              Copyright 2020. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.attribution}>
        Challenge by
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className={styles.attribution_link}
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link
          href="https://github.com/Boyka20955"
          className={styles.attribution_link}
        >
          Francis Irungu
        </Link>
        .
      </div>
    </div>
  );
};

export default Footer;
