import { MovieCardContainer, MovieContent, MovieTitle } from "./styles";
import { StarsContainer } from "../Comments/styles"

import Image from "next/image"
import MovieRandom2 from '../../assets/Movie-Random2.png';
import { Star } from "@phosphor-icons/react/dist/ssr";


export default function MovieCard (){
    return(
        <MovieCardContainer>
            <Image src={MovieRandom2} alt="MoviePhoto"/>
            <MovieContent>
                <MovieTitle>
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
        </MovieCardContainer>
    )
};