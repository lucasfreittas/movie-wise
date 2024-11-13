import { MovieCardContainer, MovieContent, MovieDescription, MovieTitle, MovieWrapper } from "./styles";
import { StarsContainer } from "../Comments/styles"

import Image from "next/image"
import MovieRandom2 from '../../assets/Movie-Random2.png';
import { Star } from "@phosphor-icons/react/dist/ssr";

type MovieCardProps = {
    variant: 'mini' | 'default' | 'detailed' | 'expanded'
    onClick?: () => void;
};


export function MovieCard ({variant, onClick}: MovieCardProps){
    return(
        <MovieCardContainer variant={variant} onClick={onClick}>
            <Image src={MovieRandom2} alt="MoviePhoto"/>
            <MovieWrapper variant={variant}>
                <MovieContent variant={variant}>
                    <MovieTitle>
                    { variant === 'detailed' && (
                        <span>Há 2 dias</span>
                    )}
                        <h3>A revolução dos bichos</h3>
                        <p>George Orwell</p>
                    </MovieTitle>
                    <StarsContainer>
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} />
                        </StarsContainer>
                </MovieContent>
                { variant === 'detailed' && (
                    <MovieDescription>
                        <p>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. 
                            Penatibus id vestibulum imperdiet a at imperdiet lectu...
                        </p>
                    </MovieDescription>
            )}
            </MovieWrapper>
        </MovieCardContainer>
    )
};