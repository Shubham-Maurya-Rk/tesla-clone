import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';

function Section({ title, bgimg, desp }) {
  return (
    <Wrap bgImage={bgimg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{desp}</p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>
            ADD TO CART
          </LeftButton>
          {desp &&
            <RightButton>
              Buy {title}
            </RightButton>
          }
        </ButtonGroup>
        </Fade>
        <div className='downarrow'>
          <KeyboardArrowDownIcon />
        </div>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/tesla-clone/images/${props => props.bgImage}');
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
`

const ItemText = styled.div`
    padding-top:15vh;
`

const Buttons = styled.div`
padding-bottom:5vh
`

const LeftButton = styled.div`
width:30vw;
height:8vh;
background-color: black;
opacity:0.7;
border-radius:50px;
font-size:20px;
display:flex;
justify-content:center;
align-items:center;
color:white;
margin:5px;
text-transform:uppercase;
@media(max-width:768px){
  width:60vw;
}
`
const RightButton = styled(LeftButton)`
background-color: white;
color:black;
`


const ButtonGroup = styled.div`
display:flex;
justify-content:center;
align-items:center;
@media(max-width:768px){
  flex-direction:column;
}
`
