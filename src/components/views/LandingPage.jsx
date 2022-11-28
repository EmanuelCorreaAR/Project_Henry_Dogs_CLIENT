import React from 'react';
import { Link } from 'react-router-dom';
// import styles from "../views/LandingPage.module.css"
import styles from "../styles/LandingPage.module.css"



export default function LandingPage() {
    return (
        <div className={styles.landing}>
            <Link to="/home">
                <h1 className={styles.tittle}>WELCOME<br />TO<br />WIKIDOGS</h1>
            </Link>
        </div>
    )
}