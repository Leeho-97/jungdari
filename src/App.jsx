import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './reset.css';
import './Test.css'


function App() {


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
              <div style={{backgroundColor : 'orange'}}>center2</div>
              <div style={{backgroundColor : 'black'}}>center3</div>
            </div>

          </div>
        
            {/* <div>마이페이지</div>
        

          <div className='layout2'>
            <div style={{width : "15%"}}>
              <Sidebar/>
            </div>
            <div style={{width : 'auto'}}>
              <Section/>
            </div>
          </div> */}

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

export default App

