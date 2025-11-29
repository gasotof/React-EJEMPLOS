import React from "react";
import { useEffect, useState } from "react";

export const TarjetaDeMago = () => {
    const [magos, setMagos]= useState([]); 
    const getMagos = () => {
        fetch("https:hp-api.onrender.com/api/characters") //URL a la que pido datos
        .then(response => response.json()) //coge la respuesta del fetch y la convierte a json.
        .then(data => setMagos(data)) //con la respuesta (datos) convertida, ahora la paso a los datos de mi proyecto. 
        .catch(error => console.log(error)) //captura el error si hay alguno.
    };
    useEffect(() => {
        getMagos();
    }, []);
    useEffect(() => {
        console.log(magos);
    }, [magos]);
    return (
        <>
        {magos.map((cadaMago) => {
            return(
                <div className="card">
                <div className="card-body" key={cadaMago.id}>
                    <img
                        src={cadaMago.image}
                        alt={cadaMago.name}
                        className="card-img-top"
                    />
                    <h5 className="card-title">
                        Nombre del Mago: {cadaMago.name} </h5>
                    <p>Casa: {cadaMago.house}</p>
                </div>
            </div>
            )
        })}
        </>
    )
}