import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments, filterByTemperaments, filterCreated, orderSort } from "../../redux/actions";
import Card from '../assets/helpers/Card';
import Paginated from "../assets/helpers/Paginated";
import NavBar from "../assets/helpers/NavBar";
import SearchBar from "../assets/helpers/SearchBar";
import styles from "../styles/Home.module.css";
import { IoArrowForwardSharp, IoArrowBackSharp, IoReloadSharp } from "react-icons/io5";


function Home() {

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);//traigo el array con alldogs gracias al UseSelector del reducer
    //console.log(allDogs)

    //FILTER BY RAZAS
    const [, setBreeds] = useState("all")
    function handleFilterCreated(event) {
        event.preventDefault();
        dispatch(filterCreated(event.target.value))
        setCurrentPage(1)
        setBreeds(event.target.value)
    }
    //FILTER BY TEMPERAMENTS
    const temperaments = useSelector((state) => state.temperaments)//traigo el array temprements desde el reducer
    const [temperament, setTemperament] = useState("all")//traigo el estado desde FILTER_BY_TEMPERAMENTS

    function handleSelect(event) {
        event.preventDefault()
        dispatch(filterByTemperaments(event.target.value))
        setTemperament(event.target.value)
        setCurrentPage(1)
    }
    //SORT OUT
    const [, setOrden] = useState("default")
    function handleSort(event) {
        event.preventDefault()
        dispatch(orderSort(event.target.value))
        setCurrentPage(1)
        setOrden(event.target.value)
    }

    //PAGINATED
    const [currentPage, setCurrentPage] = useState(1)
    const dogsPerPage = 8
    const numbersOfLastDog = currentPage * dogsPerPage   //8
    const numberOfFirtsDog = numbersOfLastDog - dogsPerPage //0
    const currentDog = allDogs.slice(numberOfFirtsDog, numbersOfLastDog)//devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //REFRESH
    function handleClick(event) {
        event.preventDefault();
        dispatch(getAllDogs());
        setCurrentPage(1);
    }

    //MANEJO DE CICLO DE VIDA
    useEffect(() => {
        dispatch(getAllDogs())
        dispatch(filterByTemperaments())
        dispatch(getTemperaments())
    }, [dispatch])

    return (
        <div className={styles.body} >
            <div>
                <NavBar />
            </div>
            <div>
                <SearchBar />
            </div>
            <div >
                <div className={styles.filters}>
                    <div >
                        <select className={styles.buttonSort} onChange={(event) => handleSort(event)}>
                            <option value="default"> Sort by... </option>
                            <option value="az"> A-Z</option>
                            <option value="za"> Z-A </option>
                            <option value="toUp">min to max weight</option>
                            <option value="toDown">max to min weight</option>
                        </select>
                    </div>
                    <div>
                        <select className={styles.buttonSort} onChange={(event) => { handleFilterCreated(event) }}>
                            <option>Breeds</option>
                            <option value="created">Breeds created</option>
                            <option >Breeds database</option>
                        </select>
                    </div>
                    <div>
                        <select className={styles.buttonSort} value={temperament} onChange={(event) => handleSelect(event)}>
                            <option value="all"> Temperaments </option>
                            {temperaments.map((temp, index) => (
                                <option onClick={(event) => handleClick(event)} key={index}>
                                    {temp.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className={styles.buttonSort} onClick={event => { handleClick(event) }}><IoReloadSharp /></button>
                </div>
                <div className={styles.cards} >
                    {currentDog.length === 0 ?
                        <div> <h4>Loading...</h4></div>
                        : currentDog.map(dog => {
                            return (
                                <div key={dog.id}>
                                    <Card
                                        key={dog.id}
                                        id={dog.id}
                                        name={dog.name}
                                        image={dog.image}
                                        min_weight={dog.min_weight}
                                        max_weight={dog.max_weight}
                                        temperaments={dog.temperaments?.map((temp) => temp.name).join(', ')}
                                        temperament={dog.temperament}
                                    />
                                </div>
                            )
                        })
                    }
                </div >
                <div className={styles.nav}>
                    <button className={styles.buttonSort} onClick={() => paginated(currentPage === 1 ? currentPage : currentPage - 1)}><IoArrowBackSharp /></button>
                    <button className={styles.buttonSort} onClick={event => { handleClick(event) }}><IoReloadSharp /></button>
                    <button className={styles.buttonSort} onClick={() => paginated(currentPage === 23 ? currentPage : currentPage + 1)}><IoArrowForwardSharp /></button>
                </div>
            </div>
            <div>
                <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginated={paginated}
                />
            </div>
        </div>
    )

}
export default Home