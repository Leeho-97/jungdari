import Jlogo from '../imgs/j_logo.svg';
import styled from "styled-components";

function Navbar() {

  const logoAction =()=>{
    console.log("로고 동작 확인");
  }

  return (
    <header>
        <div style={{backgroundColor : "#f7f7f7" , width : "100%", height : "40px"}}></div>
        <div style={{backgroundColor : "white", width : "100%", height : "120px", boxShadow : "0px 10px 20px  rgba(0, 0, 0, 0.1)", display : "flex", justifyContent : "center"}}>
            <div style={{width : "1400px", height : "120px", display : "flex", justifyContent : "space-between" }}>
                <img src={Jlogo} alt='중달이 로고' style={{width : "9rem", height : "auto", cursor :"pointer"}} onClick={logoAction}/>
                  <HCDiv>
                  <HCButton>구매대행</HCButton>
                  <HCButton>배송대행</HCButton>
                  <HCButton>단가조사</HCButton>
                  <HCButton>MD Pick</HCButton>
                  </HCDiv>
                <HEDiv>
                  <HEButton>마이페이지</HEButton>
                  <HEButton>장바구니</HEButton>
                  <HEButton>로그아웃</HEButton>
                </HEDiv>
            </div>
        </div>
    </header>
  )
}

export default Navbar

const HCDiv = styled.div`
display : flex;
justify-content :space-around;
width : 40%;
align-items : center;
font-weight : bold;
`;

const HCButton = styled.div`
cursor : pointer;

&:hover{
  color : #1D9EFF;
}
`;

const HEDiv = styled.div`
display : flex;
justify-content :space-between;
width : 20%;
align-items : center;
font-weight : 900;
`;


const HEButton = styled.a`
cursor : pointer;
`;