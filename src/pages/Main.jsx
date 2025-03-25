import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import '../layout.css'

function Main() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Navbar/>
        
         <div className='layout'>
            <div>메인페이지</div>
         </div>


        <div className='footer'>
          <div className='footerContent'>
            <Footer/>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main