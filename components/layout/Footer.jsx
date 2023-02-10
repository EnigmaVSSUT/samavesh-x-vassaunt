import { Stack, Typography,Box} from "@mui/material"
import { Container } from "@mui/system";
import Image from 'next/image';
import logo from '/pictures/Enigmalogo.png';
import svlogo from "/pictures/svlogo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";

const Footer = () => {
	return (
		<Stack
			padding='10px 32px'
			alignItems='center'
		>
			<Box sx={{backgroundColor:"#C0000A",
		width:"100vw",height:"400px",display:"flex",justifyContent:'center',alignItems:"center",flexDirection:"column"}}>
			<Container sx={{display:'flex',
flexDirection: 'row',
justifyContent:"space-between",
alignItems: "flex-start",
padding: "32px",
gap: "10px",
color:"#ffffff"
}}>
<Image src={svlogo} alt="IMAGE" height={163} />
<Box sx={{display:'flex',
flexDirection: 'row',
justifyContent:"space-between",
alignItems: "flex-start",
padding: "0px",
gap: "60px",
}}>
<Box sx={{display:'flex',
flexDirection: 'column',
alignItems: "flex-start",
padding: "0px",
gap: "8px",
}}>
<Typography>
<Link href="/theme">THEME</Link>
</Typography>
<Typography>
<Link href="/events">EVENTS</Link>
</Typography><Typography>
<Link href="/speakers">SPEAKERS</Link>
</Typography><Typography>
	<Link href="/sponsors">SPONSORS</Link>
</Typography>

</Box>

<Box sx={{display:'flex',
flexDirection: 'column',
alignItems: "flex-start",
padding: "0px",
gap: "13px"}}>
<Typography>
FOLLOW OUR SOCIALS
</Typography>
<Typography>
<Link href="https://instagram.com/samavesh.vssut?igshid=YmMyMTA2M2Y="><InstagramIcon/></Link><Link href="www.instagram.com"> <TwitterIcon/></Link><Link href="www.instagram.com"> <YouTubeIcon/></Link>
</Typography>
</Box>

</Box>

</Container>

		</Box>
			<Box sx={{backgroundColor:"#000000",
		width:"100vw",height:"158.17px",display:"flex",justifyContent:'center',alignItems:"center",flexDirection:"column",}}>
			<Typography sx={{color:"#ffffff",}}>
				MADE WITH LOVE BY
			</Typography>
			<Image src={logo} alt="IMAGE" height={60} />
			<Typography sx={{color:"#ffffff",}}>
				ENIGMA VSSUT
			</Typography>
			</Box>
		</Stack>
	)
}

export default Footer