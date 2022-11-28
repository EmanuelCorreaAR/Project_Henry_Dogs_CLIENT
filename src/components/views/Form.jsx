import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postDog, getTemperaments } from '../../redux/actions';
import Validation from '../assets/helpers/Validation';
import NavBar from '../assets/helpers/NavBar';
import { IoArrowBackCircleOutline, IoPawOutline } from "react-icons/io5";
import styles from "/Users/macintosh/Documents/WebFT30a/PI-Dogs-main/client/src/components/styles/Form.module.css";

function Form() {
    const dispatch = useDispatch()//un disparador de dispacht, sin tener que crear una funcion dispachadora.
    const temperaments = useSelector((state) => state.temperaments);
    const [errors, setErrors] = useState({})
    const history = useHistory();

    //INPUT
    const [input, setInput] = useState({
        name: "",
        life_span: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        image: "",
        // review: "",
        temperament: []
    })

    //SUBMIT
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(postDog(input))
        alert("Your new dog was created!!!")
        setInput({
            name: "",
            life_span: "",
            min_weight: "",
            max_weight: "",
            min_height: "",
            max_height: "",
            image: "",
            // review: "",
            temperament: []
        })
        history.push("/home")//una vez que postea, vuelve al home.
    }

    //PARA ERRORES
    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(Validation({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    //PARA TEMPERAMENTS
    function handleSelect(event) {
        if (input.temperament.includes(event.target.value)) {
            alert("Already in the list");
        } else {
            setInput({
                ...input,
                temperament: [...input.temperament, event.target.value]
            })
        }
    }

    //PARA BORRAR LOS TEMPERAMENTS ELEGIDOS
    function handleDelete(el) {
        setInput({
            ...input,
            temperament: input.temperament.filter(temp => temp !== el)
        })
    }

    console.log(input);

    //MANEJO DE CICLO DE VIDA DEL FORM
    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    return (
        <div className={styles.body}>
            <NavBar />
            <div >
                <h1 className={styles.title} > CREATE YOUR DOG </h1>
            </div>
            <form className={styles.container} onSubmit={event => { handleSubmit(event) }}>
                <div className={styles.dos}>
                    <div>
                    <label className={styles.title_inside}>Name :</label>
                        <input
                            className={styles.input}
                            placeholder='Name...'
                            type="text"
                            value={input.name.toUpperCase()}
                            name="name"
                            onChange={(event) => handleChange(event)} />
                        {errors.name && (<p className={styles.error}>{errors.name}</p>)}
                    </div>
                    <div>
                        <label className={styles.title_inside}>Life Span :</label>
                        <input
                            className={styles.input}
                            type="number"
                            min="1"
                            max="30"
                            value={input.life_span}
                            name="life_span"
                            onChange={(event) => handleChange(event)} />
                        <label className={styles.subtitend}> years </label>
                        {errors.life_span && (<p className={styles.error}>{errors.life_span}</p>)}
                    </div>
                    <div>
                        <label className={styles.subtitle} >Min weight :</label>
                        <input
                            className={styles.input}
                            type="number"
                            min="1"
                            value={input.min_weight}
                            name="min_weight"
                            onChange={(event) => handleChange(event)} />
                        <label className={styles.subtitend}> kgs </label>
                        {errors.min_weight && (<p className={styles.error}>{errors.min_weight}</p>)}
                    </div>
                    <div>
                        <label className={styles.subtitle} >Max weight :</label>
                        <input
                            className={styles.input}
                            type="number"
                            max="100"
                            value={input.max_weight}
                            name="max_weight"
                            onChange={(event) => handleChange(event)} />
                        <label className={styles.subtitend}> kgs </label>
                        {errors.max_weight && (<p className={styles.error}>{errors.max_weight}</p>)}
                    </div>
                    <div>
                        <label className={styles.subtitle}>Min height :</label>
                        <input
                            className={styles.input}
                            type="number"
                            min="10"
                            value={input.min_height}
                            name="min_height"
                            onChange={(event) => handleChange(event)} />
                        <label className={styles.subtitend}> cms </label>
                        {errors.min_height && (<p className={styles.error}>{errors.min_height}</p>)}
                    </div>
                    <div>
                        <label className={styles.subtitle}>Max height :</label>
                        <input
                            className={styles.input}
                            type="number"
                            max="80"
                            value={input.max_height}
                            name="max_height"
                            onChange={(event) => handleChange(event)} />
                        <label className={styles.subtitend}> cms </label>
                        {errors.max_height && (<p className={styles.error}>{errors.max_height}</p>)}
                    </div>
                    <div>
                        <label className={styles.subtitle} >Picture url :</label>
                        <input
                            className={styles.input}
                            type="url"
                            value={input.image}
                            name="image"
                            onChange={(event) => handleChange(event)} />
                    </div>
                    {/* <div>
                        <label>Review</label>
                        <input
                            type="string"
                            name="review"
                            value={input.review}
                            onChange={(event) => handleChange(event)}
                        />
                    </div> */}
                    <div>
                        <label className={styles.subtitle}> Temperaments :</label>
                        <select className={styles.input} value={input.temperament} onChange={(event) => handleSelect(event)}>
                            {temperaments.map((temp) => (<option value={temp.name} key={temp.id}> {temp.name} </option>))}
                        </select>
                        <p className={styles.temps}>
                            {input.temperament.map(temp => <li>{temp} <button onClick={() => handleDelete(temp)}>x</button></li>)}
                        </p>
                    </div>
                </div>
                <div className={styles.btn}>
                    <button disabled={Object.keys(errors).length < 0 || input.temperament.length === 0 ? true : false} type='submit'>
                        <p><IoPawOutline />CREATE</p></button>
                    <Link to="/home">
                        <button><p><IoArrowBackCircleOutline />BACK</p></button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form;


