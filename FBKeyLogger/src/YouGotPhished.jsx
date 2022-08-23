import styled from 'styled-components'
import Troll from './assets/PhishTroll.jpeg';

const PhishContainer = styled.div`
width: 900px;
margin-left: auto;
margin-right: auto;
height: 900px;
`;


const YouGotPhished = () => {
    return(
        <PhishContainer><img style={{width: '900px',
            height: '900px',
            objectFit: 'contain'}} src={Troll} alt="troll"></img></PhishContainer>
    )
}
export default YouGotPhished;