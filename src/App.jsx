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
              <div className='sidebarContents'>
                <Sidebar/> 
              </div>

              <div className='mainContents'>
                <div style={{backgroundColor : '#9CFFC5'}}>center3</div>
              </div>



              {/* <table>
                <tr>
                  <th>신청일</th>
                  <th>신청서 번호</th>
                  <th>제품명</th>
                  <th>진행현황</th>
                  <th>신청내역</th>
                  <th>견적서</th>
                  <th>결제</th>
                  <th></th>
                </tr>
                <tr>
                  <th>2025-03-24</th>
                  <th>P-6</th>
                  <th>슬리퍼 여성 여름 슬리퍼 남성 홈 신발 홀 실내화</th>
                  <th>국내배송 및 물품 수령</th>
                  <th><button>확인</button></th>
                  <th><button>견적보기</button></th>
                  <th><button>결제정보</button></th>
                  <th><button>취소하기</button></th>
                </tr>
                <tr>
                  <th>2024-07-17</th>
                  <th>P-12</th>
                  <th>스우시 조던 하이 범고래</th>
                  <th>결제완료</th>
                  <th><button>확인</button></th>
                  <th><button>견적보기</button></th>
                  <th><button>결제정보</button></th>
                  <th><button>취소하기</button></th>
                </tr>
              </table> */}


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

export default App

