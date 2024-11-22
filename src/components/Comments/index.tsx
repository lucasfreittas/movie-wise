import { Avaliation, Comment, CommentContainer, CommentData, MovieInfo, Profile, StarsCommentContainer } from "./styles";

import Image from "next/image"
import { Star } from "@phosphor-icons/react/dist/ssr";
import MovieRandom from "../../assets/Movie-Random.png";
import AvatarRandom from  "../../assets/Avatar-Random.png"

type CommentsProps = {
    variant: 'mini' | 'default' | 'detailed'
};

function CommentMini ({variant}: CommentsProps){
    return(
        <CommentContainer variant={variant}>
                <Avaliation>
                <Profile>
                    <Image src={AvatarRandom} alt="Avatar Random" />
                    <div>
                        <h3>Jaxson Dias</h3>
                        <p>Hoje</p>  
                    </div>
                </Profile>
                <StarsCommentContainer>
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} />
                </StarsCommentContainer>
            </Avaliation>
            <MovieInfo>
                <Comment>
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
};

function CommentDefault({variant}: CommentsProps){
    return(
        <CommentContainer variant={variant}>
            <MovieInfo>
                <Image src={MovieRandom} alt="O Hobbit capa" />
                <Comment>
                    <CommentData>
                        <div>
                            <h3>O Hobbit</h3>
                            <p>J.R.R Tolkien</p>
                        </div>
                        <StarsCommentContainer>
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} />
                        </StarsCommentContainer>
                    </CommentData>
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
};

function CommentDetailed({variant}: CommentsProps){
    return(
        <CommentContainer variant={variant}>
                <Avaliation>
                <Profile>
                    <Image src={AvatarRandom} alt="Avatar Random" />
                    <div>
                        <h3>Jaxson Dias</h3>
                        <p>Hoje</p>  
                    </div>
                </Profile>
                <StarsCommentContainer>
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} />
                </StarsCommentContainer>
            </Avaliation>
            <MovieInfo>
                <Image src={MovieRandom} alt="O Hobbit capa" />
                <Comment>
                    <CommentData>
                        <div>
                            <h3>O Hobbit</h3>
                            <p>J.R.R Tolkien</p>
                        </div>
                    </CommentData>
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
};

export function Comments({ variant }: CommentsProps) {
    if (variant === 'mini') {
        return <CommentMini variant="mini" />;
    }

    if (variant === 'default') {
        return <CommentDefault variant="default"/>;
    }

    if (variant === 'detailed') {
        return <CommentDetailed variant="detailed" />;
    }
    return null;
}