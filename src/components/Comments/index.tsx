import { Avaliation, Comment, CommentContainer, MovieInfo, Profile, StarsContainer } from "./styles";

import Image from "next/image"
import { Star } from "@phosphor-icons/react/dist/ssr";
import MovieRandom from "../../assets/Movie-Random.png";
import AvatarRandom from  "../../assets/Avatar-Random.png"


export default function Comments () {
    return(
        <CommentContainer>
            <Avaliation>
                <Profile>
                    <Image src={AvatarRandom} alt="Avatar Random" />
                    <div>
                        <h3>Jaxson Dias</h3>
                        <p>Hoje</p>  
                    </div>
                </Profile>
                <StarsContainer>
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} />
                </StarsContainer>
            </Avaliation>
            <MovieInfo>
                <Image src={MovieRandom} alt="O Hobbit capa" />
                <Comment>
                    <h3>O Hobbit</h3>
                    <p>J.R.R Tolkien</p>
                    <div>
                        <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. 
                            Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. 
                            Sed vulputate massa velit nibh...  <a href="#">ver mais</a>
                        </p>
                    </div>
                </Comment>
            </MovieInfo>
        </CommentContainer>
    )
} 