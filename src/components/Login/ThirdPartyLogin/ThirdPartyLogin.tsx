import { Button } from "@mui/material";
import GoogleLogo from '../../../assets/google.svg';
import MicrosoftLogo from '../../../assets/microsoft.svg';
import GithubLogo from '../../../assets/github.svg';

export function ThirdPartyLogin() {
    return (
        <div className="h-[80%] w-[70%] flex flex-row justify-around items-center">
            <Button variant="contained" sx={{ borderRadius: 50, height: 40, width: 40, background: '#262626', ':hover': {background: '#3f3f46'}}}>
                <img height={'20px'} width={'20px'} alt="" src={GoogleLogo}></img>
            </Button>
            <Button variant="contained" sx={{ borderRadius: 50, height: 40, width: 40, background: '#262626', ':hover': {background: '#3f3f46'}}}>
                <img height={'20px'} width={'20px'} alt="" src={MicrosoftLogo}></img>
            </Button>
            <Button variant="contained" sx={{ borderRadius: 50, height: 40, width: 40, background: '#262626', ':hover': {background: '#3f3f46'}}}>
                <img height={'20px'} width={'20px'} alt="" src={GithubLogo}></img>
            </Button>
        </div>
    )
}



