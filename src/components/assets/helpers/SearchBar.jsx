import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNameDog } from "/Users/macintosh/Documents/WebFT30a/PI-Dogs-main/client/src/redux/actions.js"
import { IoPawOutline} from "react-icons/io5";
import styles from "/Users/macintosh/Documents/WebFT30a/PI-Dogs-main/client/src/components/styles/SearchBar.module.css";

function SearchBar() {

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(event) {
        event.preventDefault();
        setName(event.target.value);
        // console.log(name);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (name.length === 0) {
            return alert("Please enter dog")
        } else {
            dispatch(getNameDog(name));
            setName("")
        }
    }
    return (
        <div className={styles.container}> 
            <input
                className={styles.input}
                type="text"
                placeholder="Search..."
                value={name}
                autoComplete="off"
                onKeyPress={event => event.key === "Enter" && handleSubmit(event)}
                onChange={(event) => handleInputChange(event)}
            />
            <button 
            className={styles.button}
            type='submit'
                onClick={(event) => handleSubmit(event)}><IoPawOutline /></button>
        </div>
    )
}

export default SearchBar