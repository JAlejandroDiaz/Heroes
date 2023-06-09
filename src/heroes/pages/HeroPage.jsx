import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  

  const hero = useMemo (() => getHeroesById(heroId), [heroId]);
  const onNavigateBack = () => {
    navigate(-1);
  };
  //console.log(hero);

  if (!hero) {
    return <Navigate to="/dc" />;
  }

  return (
    <div>
      <div className="row mt-5">
        <div className="col-4">
          <img src={`/assets/heroes/${heroId}.jpg`} 
               alt={hero.superhero} 
               className="img-thumbnail animate__animated animate__fadeInLeft"/>
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
          </ul>
          <h5 className="mt-5">Characters</h5>
          <p>{ hero.characters }</p>
          <button className="btn btn-outline-dark" onClick={onNavigateBack}>
            Regresar
          </button>
        </div>
    </div>
    </div>
  );
};
