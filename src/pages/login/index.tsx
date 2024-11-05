import { BackgroundContainer, LoginContainer, LoginContent, SocialLogin } from "./styles";

import Image from "next/image";
import BookWiseLogo from '../../assets/BookWise-Logo.svg';
import GoogleLogo from '../../assets/Google-Logo.svg'
import GithubLogo from '../../assets/Github-Logo.svg'
import RocketLogo from '../../assets/Rocket-Logo.svg'

export default function Login () {
    return(
        <LoginContent>
            <BackgroundContainer>
                <Image src={BookWiseLogo} width={232} alt='BookWise Logo' />
            </BackgroundContainer>
            <LoginContainer>
                <div>
                    <div>
                        <h3>Boas Vindas!</h3>
                        <p>Faça seu login ou acesse como visitante.</p>
                    </div>

                    <div>
                        <SocialLogin>
                            <Image src={GoogleLogo} width={32} alt="Google Logo"/>
                            <p>Entrar com Google</p>
                        </SocialLogin>

                        <SocialLogin>
                            <Image src={GithubLogo} width={32} alt="Google Logo"/>
                            <p>Entrar com GitHub</p>
                        </SocialLogin>

                        <SocialLogin>
                            <Image src={RocketLogo} width={32} alt="Google Logo"/>
                            <p>Acessar como visitante</p>
                        </SocialLogin>
                    </div>
                </div>
            </LoginContainer>
        </LoginContent>
    )
};