import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import {useForm} from '../../hooks/useForm'
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)

  const heroes =getHeroesByName(q)
  console.log(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0)&& heroes.length
  
  const { searchText, onInputChage } = useForm({
    searchText: ''
  })
  const onSearchSubmit = (event) =>{
    event.preventDefault();
    if(searchText.trim().lenght <= 1) return navigate(`?q=${ searchText }`)
  }

  return (
    <div>
      <h1>Buscar</h1>
      <hr />
      <div className="col-5">
        <h4>search</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="search a hero"
            className="form.control"
            name="searchText"
            autoComplete="false"
            value={searchText}
            onChange={onInputChage}
          />
          <button className="btn btn-outline-dark mt-2">Search</button>
        </form>
        <div className="col-7">
          <h4>results</h4>
          <div className="alert alert-primary animate__animated animate__fadeIn"
          style={{display: showSearch ? '' : 'none'}}>
            search ahero
          </div>
          <div className="alert alert-danger"
          style={{display: showError ? '' : 'none'}}>hero by <b>{q}</b></div>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
