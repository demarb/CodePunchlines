import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'


export default function App() {

  return (
    <section className='box-border m-0 p-0'>
    
        <Routes>
          <Route index element={ <Home /> }/>
          <Route path="*" element={<PageNotFound/>} ></Route>
        </Routes>    
    </section>
  )
}
