import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPages,SearchPage , HeroPage, MarvelPages } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelPages />}/>
            <Route path="dc" element={<DcPages />}/>
            <Route path="search" element={<SearchPage />}/>
            <Route path="hero/:heroId" element={<HeroPage />}/>
            
            <Route path="/" element={<Navigate to="/dc" />}/>
      </Routes>
        </div>
    </>
  )

}
export default HeroesRoutes
