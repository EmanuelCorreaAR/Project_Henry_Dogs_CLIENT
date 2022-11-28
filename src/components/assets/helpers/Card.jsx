import React from 'react';
import { Link } from 'react-router-dom';
import styles from "/Users/macintosh/Documents/WebFT30a/PI-Dogs-main/client/src/components/styles/Card.module.css";

export default function Card({ name, image, id, max_weight, temperament, temperaments }) {
    return (
        <div className={styles.card}>
            <Link to={`/dogs/${id}`} >
                <h4>{name.toUpperCase()}</h4>
            <div>
                <div className={styles.content}>
            <img className={styles.img} src={image} alt='dog' />
                    <h3> It can weigh up to {max_weight} kgs. </h3>
                    <h4>Temperaments: {temperaments}  {temperament}</h4>
                </div>
            </div></Link>
        </div>
    )
}