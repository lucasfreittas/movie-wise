import { Comments } from "@/components/Comments";
import { Input } from "@/components/Input";

import { ProfileContainer, MainContentProfile, RecentReviews, TitleContainer, ReviewsContainer, ProfileDataContainer, Divisor, DataContainer } from "./styles";

import { User, BookOpen, Books, UserList, BookmarkSimple } from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";
import ProfileImage from '../../assets/Avatar-Random.png';


export default function Profile (){
    return(
        <ProfileContainer>
            <TitleContainer>
                <User size={32} fill="#50B2C0" />
                <h1>Profile</h1>
            </TitleContainer>
            <MainContentProfile>
                <ReviewsContainer>
                    <Input placeholder="Buscar filme desejado"/>
                    <RecentReviews>
                        <div className="titleRecentReviews">
                            <h3>Há 2 dias</h3>
                        </div>
                        <Comments variant="default"/>
                    </RecentReviews>
                    <RecentReviews>
                        <div className="titleRecentReviews">
                            <h3>Há 4 dias</h3>
                        </div>
                        <Comments variant="default"/>
                        <Comments variant="default"/>
                    </RecentReviews>
                    <RecentReviews>
                        <div className="titleRecentReviews">
                            <h3>Há 6 dias</h3>
                        </div>
                        <Comments variant="default"/>
                    </RecentReviews>
                </ReviewsContainer>
                <ProfileDataContainer>
                    <div className="UserProfile">
                        <Image src={ProfileImage} alt='Profile Image'/>
                        <h2>Cristofer Rosser</h2>
                        <p>Membro desde 2019</p>
                    </div>
                    <Divisor />
                    <DataContainer>
                        <div>
                            <BookOpen size={32} fill="#50B2C0" />
                            <div>
                                <h3>3853</h3>
                                <p>Páginas lidas</p>  
                            </div>
                        </div>
                        <div>
                            <Books size={32} fill="#50B2C0" />
                            <div>
                                <h3>10</h3>
                                <p>Livros avaliados</p>  
                            </div>
                        </div>
                        <div>
                            <UserList size={32} fill="#50B2C0" />
                            <div>
                                <h3>8</h3>
                                <p>Autores lidos</p>  
                            </div>
                        </div>
                        <div>
                            <BookmarkSimple size={32} fill="#50B2C0" />
                            <div>
                                <h3>Computação</h3>
                                <p>Categoria mais ida</p>  
                            </div>
                        </div>
                    </DataContainer>
                </ProfileDataContainer>
            </MainContentProfile>
        </ProfileContainer>
    )
};