import { Box,  Typography } from "@mui/material";
import face from "../assets/facebook.png"
import insta from "../assets/insta.png"
import Linkedin from "../assets/in.png"
import twitter from "../assets/twiter.png"
import Logo from "../assets/logo.png"
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <a>Mazen</a>
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
    <img src={Logo}  alt="logo"  width="60px" height="60px"/>
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Something here to give the footer a purpose!
    </Typography>
    <Copyright />
    <Box align="center" my={2}>
        <img src={face} style={{margin:"0 10px"}} />
        <img src={insta} style={{margin:"0 10px"}}/>
        <img src={Linkedin} style={{margin:"0 10px"}}/>
        <img src={twitter} style={{margin:"0 10px"}}/>
    </Box>
  </Box>
  )
}

export default Footer
