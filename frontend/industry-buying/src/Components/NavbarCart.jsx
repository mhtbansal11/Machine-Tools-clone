import React from "react";
import styles from "./NavbarCart.module.css";
import { FaLock } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export const NavbarCart = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <Link className={styles.logo} to={`/`}>
            <img src={logo} alt="logo" />
            <h1 style={{ color: "white" }}>Machine</h1>
            <h1 style={{ color: "red" }}>&</h1>
            <h1 style={{ color: "orange" }}>Tools</h1>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.textIconWrapper}>
            <div style={{marginRight:"10px"}}>
              <FaLock />
            </div>
            <div className={styles.textWrapper}>
              <span>Secure</span>
              <span className={styles.headingText2}>Payments</span>
            </div>
          </div>

          <div className={styles.textIconWrapper}>
            <div style={{marginRight:"10px"}}>
              <AiFillStar />
            </div>
            <div className={styles.textWrapper}>
              <span>Original</span>
              <span className={styles.headingText2}>Products</span>
            </div>
          </div>

          <div className={styles.textIconWrapper}>
            <div style={{marginRight:"10px"}}>
              <FaExchangeAlt />
            </div>
            <div className={styles.textWrapper}>
              <span>Free & Easy</span>
              <span className={styles.headingText2}>Returns</span>
            </div>
          </div>

          <div className={styles.textIconWrapper}>
            <div style={{marginRight:"10px"}}>
              <FaRegCheckCircle />
            </div>
            <div className={styles.textWrapper}>
              <span>100% Buyer</span>
              <span className={styles.headingText2}>Protection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
