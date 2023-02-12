import { Stack, Typography,Box} from "@mui/material"
import { Container } from "@mui/system";
import Countdown,{zeroPad} from 'react-countdown';
import { HydrationProvider, Server, Client } from "react-hydration-provider";
const Completionist = () => <Typography sx={{fontSize:"100px",color:'#C0000A',fontWeight:'900'}}>The Fest is ON!</Typography>
const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return  <Typography sx={{fontSize:"100px",color:'#C0000A',fontWeight:'900',}}>
      {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </Typography>;
    }
  };
const Timer = () => {
	return (
    <HydrationProvider>
        <Stack
			padding='10px 32px'
			alignItems='center'sx={{background:"#F3EEE8"}}
		>
<Box sx={{display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: "flex-start"}}>
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        padding:'32px',
        gap: '10px'
    }}
    >
        <Typography sx={{color:"#C0000A",fontWeight:"900",fontSize:"36px",lineHeight:"44px"}}>Starting in</Typography>
        <Server><Countdown
    // date= {1677868200000}
    date={Date.now()+50000}
    renderer={renderer}
  /></Server>
   <Client><Countdown
    date= {1677868200000}
    // date={Date.now()+50000}
    renderer={renderer}
  /></Client>

    </Container>
</Box>
</Stack>
</HydrationProvider>
    )
}
export default Timer