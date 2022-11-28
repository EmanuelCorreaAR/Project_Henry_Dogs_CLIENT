import React from "react";
import styles from "/Users/macintosh/Documents/WebFT30a/PI-Dogs-main/client/src/components/styles/Paginated.module.css";

function Paginated({ dogsPerPage, allDogs, paginated }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) { //devuelve el entero mayor o igual más próximo a un número dado
        pageNumbers.push(i)
    }
    return (
        <nav className={styles.pagination}>    
                {pageNumbers?.map(number => (
                    <p className={styles.ul} key={number}>
                        <button onClick={() => paginated(number)}>
                            {number}
                        </button>
                    </p>
                ))} 
        </nav>
    )
}

export default Paginated