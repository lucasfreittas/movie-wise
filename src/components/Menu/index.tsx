import { MenuContainer, PageOption, ProfileToggle } from "./styles";

import Image from "next/image";
import BookWiseLogo from '../../assets/BookWise-Logo.svg';
import { Binoculars, ChartLineUp, User, SignOut } from "@phosphor-icons/react/dist/ssr";
import AvatarRandom from '../../assets/Avatar-Random.png';

export function Menu (){
    return(
        <MenuContainer>
            <Image src={BookWiseLogo} height={32} alt="BookWise Logo" className="LogoWise"/>
            <div className="OptionsContainer">
                <PageOption>
                    <ChartLineUp size={24} />
                    <p>Inicio</p>
                </PageOption>

                <PageOption>
                    <Binoculars size={24} />
                    <p>Explorar</p>
                </PageOption>

                <PageOption>
                    <User size={24} />
                    <p>Perfil</p>
                </PageOption>
            </div>
            <ProfileToggle>
                <Image src={AvatarRandom} height={32} alt="BookWise Logo" className="AvatarImage"/>
                <p>Cristofer</p>
                <SignOut size={20} fill="#F75A68" />

            </ProfileToggle>
        </MenuContainer>
    )
};