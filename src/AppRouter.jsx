import { Navigate ,Route,Routes } from 'react-router-dom'
import {Navigation} from './components/cards/Navigation'
import HomePage from './pages/HomePage'
import Pokemonpages  from './pages/Pokemonpages'
import  Search  from './pages/search'


const AppRouter = () => {
  
  return (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route path="/home" element={<HomePage />}/>
      <Route path='pokemon/:id' element={<Pokemonpages/>}/>
      <Route path='search' element={<Search/>}/> 
    </Route>
    <Route path="*" element={<Navigate  to='/'/>}/>
  </Routes>
  );
  
}


export default AppRouter







































































