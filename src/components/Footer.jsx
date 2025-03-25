import '../layout.css'
import logoB from '../imgs/j_logo2.svg'

function Footer() {
  return (
    <div className="footerOutline">
      <div className="footerPadding">
        
        <div className='footerTop'>
          <img src={logoB} alt='중다리 footer 로고' className='footerImg'/>
          <div className='footerButtonLayout'>
            <div className='footerButton'>이용약관</div>
            <div className='footerButton'>개인정보취급방침</div>
            <div className='footerButton'>개인정보의 수집 및 이용목적</div>
          </div>
        </div>

        <div className='footerBottom'>
          <p>상호:(주)빅파이씨앤티 | 사업자 등록번호 : 169-81-00496 | 전화번호 : 070-7776-1688 | 팩스번호 : 032-714-3850</p>
          <p>경기도 부천시 조마루로 385번길 122 삼보테크노타워 2702-3호 (주)빅파이씨앤티</p>
          <p>대표이사: 이중엽 | 통신판매 신고번호 : 제 2021-경기부천-1209호 | 개인정보보호책임자 : 양지연 | 메일 : pi@jungdari.com</p>
          <p>Copyrights2023ⓒBigpieC&T. All Rights Reserved</p>
        </div>

      </div>
    </div>
  )
}

export default Footer