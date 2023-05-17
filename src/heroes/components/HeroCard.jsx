import { Link } from "react-router-dom"

export const HeroCard = ({
id,
superhero,
publisher,
alter_ego,
first_appearance,
characters
}) =>{
    const heroImage = `/assets/heroes/${id}.jpg`
    const charactersByHero = (<p>{ characters }</p>)
    return(
        <div className="col animate__animated animate__fadeInUp">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-heroes.appspot.com/o/imagenes%2Fheroes%2Fdc-arrow.jpg?alt=media&token=6c890e37-96f4-4b08-964f-3b5099e80b83" className="card-img" alt="{superhero}" />
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