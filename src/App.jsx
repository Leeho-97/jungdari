import './reset.css';
import Navbar from './components/Navbar';
// import MainC from './components/MainC';
import './Test.css'
import Text from './components/Test'

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
        <div className='footer'>풋터</div>
      </div>
    </div>
  )
}

export default App

