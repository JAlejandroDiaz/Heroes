import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import {Hola} from './../../firebase-confing'
import { connectStorageEmulator } from "firebase/storage";
import { Await } from "react-router-dom/dist";




export const HeroCard = ({
id,
superhero,
publisher,
alter_ego,
first_appearance,
characters
}) =>{
    
    const resultado =   Hola(id)

    console.log(resultado)

    const heroImage = `/assets/heroes/${id}.jpg`
    const charactersByHero = (<p>{ characters }</p>)
    return(
        <div className="col animate__animated animate__fadeInUp">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImage } className="card-img" alt="{superhero}" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title"> { superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                           {
                             (alter_ego !== characters) && charactersByHero
                           }
                           <p className="card-text">
                            <small > { first_appearance }</small>
                            </p>
                            <Link to={`/hero/${ id }`}>
                                mas..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}