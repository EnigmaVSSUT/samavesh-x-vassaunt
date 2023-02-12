import { Stack, Typography,Box} from "@mui/material"
import Marquee from "react-fast-marquee";
const Marqueesv = () => {
	return (
            <Marquee speed={80} gradient={false}>
<Typography sx={{color:"transparent",fontSize: "150px",
lineHeight: "180px",WebkitTextStrokeColor:"#857370" ,WebkitTextStrokeWidth:"1px",postion:'relative',top:"50px"}}>SAMAVESH <span id="black">X</span> VASSAUNT</Typography>
</Marquee>
    )
}
export default Marqueesv
