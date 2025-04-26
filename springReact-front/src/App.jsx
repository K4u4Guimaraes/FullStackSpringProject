import './App.css'
import FooterComponents from './components/FooterComponents'
import HeaderComponents from './components/HeaderComponents'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App(){
  return(
    <>
      <BrowserRouter>
        <HeaderComponents/>

        <Routes>
          <Route path='/' element={<ListEmployeeComponent/>}></Route>
          <Route path=''></Route>
        </Routes>
        
        <FooterComponents/>
      </BrowserRouter>
      
    </>
  )
}

export default App