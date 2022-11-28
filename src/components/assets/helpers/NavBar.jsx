import React from 'react'
import { Link } from "react-router-dom";
import styles from "/Users/macintosh/Documents/WebFT30a/PI-Dogs-main/client/src/components/styles/NavBar.module.css";
import {IoPawOutline} from "react-icons/io5";


function NavBar() {
    return (
        <div>
            <div className={styles.navbar}>
                <h4>WIKIDOGS <IoPawOutline/></h4>          
            <div className={styles.bars}>
                <Link to='/home'> <button className={styles.buttonHome}>HOME</button></Link>
                <Link to='/dog/create'> <button className={styles.buttonCreate}>CREATE YOUR OWN DOG</button></Link>
            </div>
            </div>
        </div>
    )
}

export default NavBar;