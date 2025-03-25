import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import TransportMy from "./TransportMy";

import '../layout.css'

function Mypage() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Navbar/>

        <div className='layout'>
          <div className='mainCon'>
            <div className='conlayout'>
              <div className='mypageTop'>
                <span className='span1'>마이페이지</span>
                <span className='span2'>마이페이지  &gt; 마이페이지</span>              
              </div>
            </div>

            <div className='mainSec'>
              <div className='sidebarContents'>
                <Sidebar/> 
              </div>

              <div className='mainContents'>
                <TransportMy/>
                {/* <div style={{backgroundColor : "red", width : "100%"}}>컨텐츠</div> */}
              </div>
            </div>
          </div>
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

export default Mypage