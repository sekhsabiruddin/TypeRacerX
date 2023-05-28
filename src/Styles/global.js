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
  display: grid;
  min-height: 100vh;
  grid-auto-flow: row;
  gap: 0.5rem;
  padding: 2rem;
  text-align: center;
 
 
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
  font-size:24px;
  display:flex;
  flex-wrap:wrap;
  font-family: 'Roboto Mono', monospace;
  color:${({ theme }) => theme.typeBoxText};
}
.custom-icon{
  cursor: pointer;
}
.word{
  margin:5px;
  padding-right:5px;
  }

.hidden-input{
 opacity: 0;
}
.current {
  border-left:3px solid #fff;
  height: 10px;
  animation: blinking 2s infinite;
}
@keyframes blinking {
  0% {
    border-left-color: white;
  }
  25% {
  
    border-left-color: ${({ theme }) => theme.background};
  }
  50% {
    border-left-color: white;
  }
  75% {
    border-left-color: ${({ theme }) => theme.background};
  }
  100% {
    border-left-color: white;
  }
}


.current-right {
  border-right: 3px solid #fff;
  animation: blinkingRight 2s infinite;
}

@keyframes blinkingRight {
  0% {
    border-right-color: white;
  }
  25% {
    border-right-color: ${({ theme }) => theme.background};
  }
  50% {
    border-right-color: white;
  }
  75% {
    border-right-color: ${({ theme }) => theme.background};
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
  font-size: 24px;
  justify-content: space-between;
  padding: 0.5rem;
  font-family: 'Roboto Mono', monospace;
}
.modes{
    display: flex;
    gap:0.4rem;    
  }
.time-mode:hover{
    color:${({ theme }) => theme.typeBoxText};
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
.links{
  display: flex;
  gap: 20px;
}
.links div span{
  margin-left:7px;
}
.links div:hover{
  cursor:pointer;
}

${"" /* //=====================Stats css */}
.stats-box{
  display:flex;
  width:1000px;
  height:auto;
  margin-left:auto;
  margin-right:auto;
  font-family: 'Roboto Mono', monospace;
}
.left-stats{
  width:30%;
  padding:30px;
}
.right-stats{
  width:70%;
}
.title{
  font-size:32px;
  color:${({ theme }) => theme.typeBoxText}
}
.subtitle{
  font-size:40px;
}
${"" /* ==================>css for header<=================== */}

.header{
  width:1000px;
  display:flex;
  justify-content:space-between;
  margin-left:auto;
  margin-right:auto; 
}
.header .logo {
    display: flex;
    column-gap: 15px;
    width:40%;
}
.header .logo-text{
  margin-top: -8px;
  margin-left: 10px;
  font-size:32px;
  font-weight:400;
  font-family: 'Lexend Deca', sans-serif;
  color:${({ theme }) => theme.typeBoxText};
}
.header .logo-img{
  cursor:pointer;
  fill:${({ theme }) => theme.textColor};
  margin-top: 10px;
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
  font-family: 'Roboto Mono', monospace;
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
${"" /* //============================color.js */}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0.1rem 0.4rem;
}
.color-item:hover{
  background: ${({ theme }) => theme.typeBoxText};
  cursor: pointer;
  color:#fff;
}
.inner-color-box{
  background: #ccc;
    border-radius: 30px;
}

.color-effect{
  background-color: black;
    display: inline-block;
    width: 12px;
    height: 12px;
    /* border: rebeccapurple; */
    border-radius: 50%;
    margin: 0px 4px;
}

.modal-content {
  background-color: ${({ theme }) => theme.background};;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  width:60%;
  max-height:400px;
  overflow-x:hidden; 
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}
.modal-content::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */


}

.modal-content::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Change the background color of the track */
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: #888; /* Change the color of the thumb */
  border-radius: 5px; /* Add rounded corners to the thumb */
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Change the color of the thumb on hover */
}
.or{
  display: block;
  text-align: center;
  font-family: "Helvetica";
  color: black;
}
.accountcircleIcon:hover {
  cursor: pointer;
}
.start-btn-box{
  width:100%;

  text-align: center;
}
.startBtn{

  background-image: linear-gradient(#42A1EC, #0070C9);
  border: 1px solid #0077CC;
  border-radius: 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  direction: ltr;
  display: inline-block;
  font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 50px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}
.startBtn:hover{
  background-image: linear-gradient(#51A9EE, #147BCD);
  border-color: #1482D0;
  text-decoration: none;
}
.startBtn:active{
  background-image: linear-gradient(#3D94D9, #0067B9);
  border-color: #006DBC;
  outline: none;
}
.logout{
  margin-left: 10px;
  cursor:pointer;
}
`;
