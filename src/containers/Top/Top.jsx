
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import './Top.css';

const Top = () => {

    //Hook inicial para la paginación
    const [page, setPage] = useState(1);
    const [oldpage, setOldPage] = useState(1);
    const [films, setFilms] = useState([]);

    //useEffect...estados...

    useEffect(()=>{

        //traemos las películas por primera vez
        bringFilms();

    },[]);

    useEffect(()=> {

        if(page !== oldpage){
            setOldPage(page);
            bringFilms();
        }
        
    })

    const bringFilms = async () => {

        try {
            console.log("estamos en la página....",page);
            let res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=${page}`);
            setFilms(res.data.results);

        } catch (error) {
            console.log(error);
        }
    }

    const changePage = (operacion) => {

        if(operacion === "+"){

            //Cambiamos la página
            let newPage = page + 1;
            
            setOldPage(page);
            setPage(newPage);
            
            

        } else if (operacion === "-" && page > 1) {

            let newPage = page - 1;
            setOldPage(page);
            setPage(newPage);
           
        }

    }

    if(films[0]?.id !== 0){

        return(
            <div className="vistaPaginacion">
                <div className="boton" onClick={()=> changePage("-")}>ANTERIOR</div>
                <div className="contenedorFilms">
                    {films.map((pelicula,index) => {
                        return (
                            <div key={index}>{pelicula.title}</div>
                        )
                    })}
                </div>
                <div className="boton" onClick={()=> changePage("+")}>SIGUIENTE</div>
            </div>
        )

    }else{
        return(
            <div>
                Soy Top y estoy cargando las películas
            </div>
        )
    }

    
}

export default Top;