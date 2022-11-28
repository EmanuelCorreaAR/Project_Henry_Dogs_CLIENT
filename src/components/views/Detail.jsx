import React, { useEffect, } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { getDetail } from "../../redux/actions";
import NavBar from "../assets/helpers/NavBar";
import styles from "../styles/Detail.module.css"
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

//poner un loading

function Detail(props) {
    const { id } = props; //traigo id={match.params.id}
    const dispatch = useDispatch()
    const myDog = useSelector((state) => state.detail) // en myDog tengo el estado global de detail (reducer)
    // console.log(myDog)

    //MANEJO DE CICLO DE VIDA
    useEffect(() => {//anda a buscar details = MOUNT
        dispatch(getDetail(id))//dispachame getDetail id.
    }, [id, dispatch])// array de dependencias.

    return (
        <div className={styles.body}>
            <NavBar />
            <div className={styles.container}>
                <div>
                    {
                        !myDog ? <h1>Loading...</h1> :
                            <div >
                                <h1 className={styles.title} style={{ textTransform: 'uppercase' }}>{myDog.name}</h1>
                                <img className={styles.image} src={myDog.image} alt="dog_image" />
                                <h3 > Max height : {myDog.max_height} cm</h3>
                                <h3 className={styles.details}> Min height {myDog.min_height} cm</h3>
                                <h3 > Max weight :{myDog.max_weight} kg</h3>
                                <h3 className={styles.details}> Min weight {myDog.min_weight} kg</h3>
                                <h3> Life span : {myDog.life_span}</h3>
                                <h3 className={styles.details}>Temperaments: {myDog.createInDb ? myDog.temperaments.map(el => el.name).join(", ") : myDog.temperament} </h3>
                            </div>
                    }
                    <Link to="/home">
                        <button className={styles.back}><IoArrowBackSharp /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Detail;


// Temperaments: {myDog[0].createdInDataBase? myDog[0].temperaments.map(el => el.name ).join(', '): myDog[0].temperament.split(', ').map(e => e ).join(', ')}

// dog.temperaments?.map((temp) => temp.name).join(', ')

//temperament. db
//temepraments. cretates