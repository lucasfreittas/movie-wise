import { Indicator, MenuContainer, PageOption, ProfileToggle } from "./styles";

import Image from "next/image";
import BookWiseLogo from '../../assets/BookWise-Logo.svg';
import { Binoculars, ChartLineUp, User, SignOut } from "@phosphor-icons/react/dist/ssr";
import AvatarRandom from '../../assets/Avatar-Random.png';

import { useRouter } from "next/router";
import Link from "next/link";


export function Menu (){

    const router = useRouter();
    const currentPath = router.pathname;

    function isActive(path: string){
        if (currentPath === path){
            return true;
        } else {
            return false
        }
    };

    return(
        <MenuContainer>
            <Image src={BookWiseLogo} height={32} alt="BookWise Logo" className="LogoWise"/>
            <div className="OptionsContainer">
                <Link href='/'>
                    <PageOption className={isActive('/') ? 'active' : ''}>
                        <ChartLineUp size={24} />
                        <p>Inicio</p>
                    </PageOption>
                </Link>
                <Link href='/explore'>
                    <PageOption className={isActive('/explore') ? 'active' : ''}>
                        <Binoculars size={24} />
                        <p>Explorar</p>
                    </PageOption>
                </Link>
                <Link href='/profile'>
                    <PageOption className={isActive('/profile') ? 'active' : ''}>
                        <User size={24} />
                        <p>Perfil</p>
                    </PageOption>
                </Link>
                <Indicator position={currentPath} />
            </div>
            <ProfileToggle>
                <Image src={AvatarRandom} height={32} alt="BookWise Logo" className="AvatarImage"/>
                <p>Cristofer</p>
                <SignOut size={20} fill="#F75A68" />
            </ProfileToggle>  
        </MenuContainer>
    )
};