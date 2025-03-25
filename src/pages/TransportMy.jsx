import '../css/mypagelayout.css'

function TransportMy() {






    return (
    <>
        <div className='mainTitle'>
            <span className='span1'>
                배송대행 목록
            </span>
        </div>
        
        <table className='tablelayout2'>
            <tr className='trSty'>
                <th className='thSty'>신청일</th>
                <th className='thSty'>신청서 번호</th>
                <th className='thSty'>제품명</th>
                <th className='thSty'>진행현황</th>
                <th className='thSty'>신청내역</th>
                <th className='thSty'>견적서</th>
                <th className='thSty'>결제</th>
                <th className='thSty'></th>
            </tr>

            <tr>
                <td className='tdSty'>2025-03-24</td>
                <td className='tdSty'>P-6</td>
                <td className='tdSty'>슬리퍼 여성 여름 슬리퍼 남성 홈 신발 홀 실내화</td>
                <td className='tdSty'>국내배송 및 물품 수령</td>
                <td className='tdSty'><button className='buttonStyle'>확인</button></td>
                <td className='tdSty'><button className='buttonStyle'>견적보기</button></td>
                <td className='tdSty'><button className='buttonStyle'>결제정보</button></td>
                <td className='tdSty'><button className='buttonStyle'>취소하기</button></td>
            </tr>

            <tr>
                <td className='tdSty'>2024-07-17</td>
                <td className='tdSty'>P-12</td>
                <td className='tdSty'>스우시 조던 하이 범고래</td>
                <td className='tdSty'>결제완료</td>
                <td className='tdSty'><button className='buttonStyle'>확인</button></td>
                <td className='tdSty'><button className='buttonStyle'>견적보기</button></td>
                <td className='tdSty'><button className='buttonStyle'>결제정보</button></td>
                <td className='tdSty'><button className='buttonStyle'>취소하기</button></td>
            </tr>
        </table>
    </>
  )
}

export default TransportMy