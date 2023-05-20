import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
  body {
    background: ${({ theme }) => theme.background};
    color:${({ theme }) => theme.textColor};
    margin:0;
    padding:0;
    transition:all 0.2s linear;
    position:relative;
  }
.canvas{
  display:grid;
  min-height:100vh;
  grid-auto-flow:row;
  grid-template-row:auto 1fr auto;
  gap:0.5rem;
  padding:2rem;
  width:100vw;
  align-item:center;
  text-align:center;
}
${"" /* //css TypingBox css start here */}
.type-box{
  display:block;
  max-width:1000px;
  height:200px;
  margin-left:auto;
  margin-right:auto;
  overflow:hidden;
 
}
.words{
  font-size:32px;
  display:flex;
  flex-wrap:wrap;
}
.word{
  margin:5px;
  padding-right:5px;
}
  
.hidden-input{
  opacity:0; 
}
.current {
  border-left:1px solid #fff;
  height: 10px;
  animation: blinking 2s infinite;
}

@keyframes blinking {
  0% {
    border-left-color: white;
  }
  25% {
    border-left-color: black;
  }
  50% {
    border-left-color: white;
  }
  75% {
    border-left-color: black;
  }
  100% {
    border-left-color: white;
  }
}


.current-right {
  border-right: 1px solid #fff;
  animation: blinkingRight 2s infinite;
}

@keyframes blinkingRight {
  0% {
    border-right-color: white;
  }
  25% {
    border-right-color: black;
  }
  50% {
    border-right-color: white;
  }
  75% {
    border-right-color: black;
  }
  100% {
    border-right-color: white;
  }
} 




.correct{
  color:green;
}
.incorrect{
 color:red;
}
${"" /* End here Typing css */}


${"" /* =======================UpperMenu.js */}
.upper-menu {
  display: flex;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.3rem;
  justify-content: space-between;
  padding: 0.5rem;
 
}
  .modes{
    display: flex;
    gap:0.4rem;
    
  }
  .time-mode:hover{
    color:green;
    cursor:pointer;
    
  }
  .selectMenu {
  position: absolute;
  top: 50%;
  left: 25%;
 background:black;
  z-index: 999;
  background-color: white;
  width:50%;

  /* Other styling properties */
}

${"" /* ==============>footer <==============*/}
.footer{
  width:1000px;
  display:flex;
  justify-content: space-between;
  margin-left:auto;
  margin-right:auto;
}

${"" /* //=====================Stats css */}
.stats-box{
  display:flex;
  width:1000px;
  height:auto;
  margin-left:auto;
  margin-right:auto;
}
.left-stats{
  width:30%;
  padding:30px;
}
.right-stats{
  width:70%;
}
.title{
  font-size:20px;
  color:${({ theme }) => theme.typeBoxText}
}
${"" /* ==================>css for header<=================== */}
.header{
  width:1000px;
  display:flex;
  justify-content:space-between;
  margin-left:auto;
  margin-right:auto;
}
${"" /* //=================================userPage====== */}
.user-profile{
  width:1000px;
  margin:auto ;
  display:flex;
  height:15rem;
  background:${({ theme }) => theme.typeBoxText};
  border-radius:20px;
  padding:1rem;
  justify-content:center;
  align-text:center;
}
.user{
  width:50%;
  display:flex;
  margin-top:30px;
  margin-bottom:30px;
  font-size:1.5rem;
  padding:1rem;
  color:#fff;
  border-right:2px solid;
}
.info{
  width:60%;
  padding:1rem;
}
.pictures{
  width:40%;
}
.total-tests{
  width:50%;
  color:#fff;
  font-size:3rem;
  display:flex;
  align-items:center;
  justify-content:center;
}
.table,.graph-user-page{
  margin:auto;
  width:1000px;
}
.center-of-screen{
  display:flex;
  min-height:100vh;
  justify-content:center;
  align-items:center;s
}
`;
