import Navbar from './components/Navbar';
import Text from './components/Test'
import Footer from './components/Footer';

import './reset.css';
import './Test.css'


function App() {


  return (
    <div className='wrapper'>
      <div className='container'>
        <Navbar/>
        <div className='layout'>
            <div className='mainC'>
              <Text/>
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

export default App

