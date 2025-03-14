import './reset.css';
import Navbar from './components/Navbar';
// import MainC from './components/MainC';
import './Test.css'

function App() {


  return (
    <div className='full'>
    <Navbar/>
    <div className='wrapper'>
      <div className='layout'>
        <div className='mainC'>컨텐츠</div>
        <div className='footer'>풋터</div>
      </div>
    </div>


    </div>
  )
}

export default App

