import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/cars/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setburgerStatus] = useState(false)
  const cars=useSelector(selectCars);
  return (
    <Container>
      <p>
        <img src={process.env.PUBLIC_URL+"/images/logo.svg"} alt="logo" />
      </p>  
      <Menu>
        {cars && cars.map((car,index)=>
          /*eslint-disable-next-line*/
          <a key={index}>{car}</a>
        )}
      </Menu>
      <RightMenu>
        {/*eslint-disable-next-line*/}
        <a>Shop</a>
        {/*eslint-disable-next-line*/}
        <a>Tesla account</a>
        {/*eslint-disable-next-line*/}
        <a><CustomIcon onClick={()=>setburgerStatus(true)}/></a>
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
          <CloseWrapper>
            <CustomClose  onClick={()=>setburgerStatus(false)}/>
          </CloseWrapper>
          {cars && cars.map((car,index)=>
            <li key={index}>{car}</li>
          )}
      </BurgerMenu>
    </Container>
  )
}

export default Header

const Container=styled.div`
  height:60px;
  display:flex;
  align-items :center;
  justify-content:space-between;
  padding:0 10px;
  width:100%;
  position:fixed;
  top:0;

`;

const Menu=styled.div`
  a{
    font-weight:600;
    font-size:18px;
    text-transform:uppercase;
    color:black;
    padding:0 20px;
  }
  @media(max-width:840px){
    display:none;
  }
`

const RightMenu=styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  font-size:18px;
  text-transform:uppercase;
  color:black;
  padding:0 7px;
}
`
const CustomIcon=styled(MenuIcon)`
cursor:pointer;
width:5vw;
`
const BurgerMenu=styled.ul`
  width:300px;
  padding:20px;
  background:white;
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  transform:translateX(${props=>props.show ?'0':'100%'});
  transition:transform 0.2s;
  li{
    text-align:start;
    font-weight:600;
    padding:15px 0;
    font-size:18px;
  }
`

const CustomClose=styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
width:100%;
`
