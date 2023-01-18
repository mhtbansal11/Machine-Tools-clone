
import React from 'react'
import styles from "./NavbarCart.module.css"
import {FaLock} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {FaExchangeAlt} from "react-icons/fa"
import {FaRegCheckCircle} from "react-icons/fa"

export const NavbarCart = () => {
  return (
    <div>
        <div className={styles.navbar}>
            <div className={styles.leftSide}>
                <img src="" alt="" />
            </div>
            <div className={styles.rightSide}>
                
                <div className={styles.textIconWrapper}>
                    <div>
                    <FaLock/>
                    </div>
                    <div className={styles.textWrapper}>
                    <span>Secure</span>
                    <span className={styles.headingText2}>Payments</span>
                    </div>
                </div>

                <div className={styles.textIconWrapper}>
                    <div>
                    <AiFillStar/>
                    </div>
                    <div className={styles.textWrapper}>
                    <span>Original</span>
                    <span className={styles.headingText2}>Products</span>
                    </div>
                </div>

                <div className={styles.textIconWrapper}>
                    <div>
                    <FaExchangeAlt/>
                    </div>
                    <div className={styles.textWrapper}>
                    <span>Free & Easy</span>
                    <span className={styles.headingText2}>Returns</span>
                    </div>
                </div>

                <div className={styles.textIconWrapper}>
                    <div>
                    <FaRegCheckCircle/>
                    </div>
                    <div className={styles.textWrapper}>
                    <span>100% Buyer</span>
                    <span className={styles.headingText2}>Protection</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
