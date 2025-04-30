import './App.css'
import EmployeeCompnent from './components/EmployeeCompnent'
import FooterComponents from './components/FooterComponents'
import HeaderComponents from './components/HeaderComponents'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter,Navigate, Routes,Route} from 'react-router-dom'

function App(){
  return(
    <>
      <BrowserRouter>
        <HeaderComponents/>

        <Routes>
          <Route path="/" element={<Navigate to="/employees" />} />

          <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

          <Route path='/add-employee' element={<EmployeeCompnent/>}></Route>
        </Routes>
        
        <FooterComponents/>
      </BrowserRouter>
      
    </>
  )
}

export default App