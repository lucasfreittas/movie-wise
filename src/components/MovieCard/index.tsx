import { MovieCardContainer,
        MovieCardWrapper,
        MovieContent,
        MovieData,
        MovieDescription,
        MovieTitle,
        MovieWrapper,
        StarsMovieCardContainer } from "./styles";

import Image from "next/image"
import MovieRandom2 from '../../assets/Movie-Random2.png';
import { Star, BookOpen, Books, UserList, } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { SliderOverlay } from "../SlideBar/styles";
import { SlideBar } from "../SlideBar";


type MovieCardProps = {
    variant: 'mini' | 'default' | 'detailed' | 'expanded'
    title: string
    image: string
};

export function MovieCard ({variant, title, image}: MovieCardProps){

    const [isSlideBarVisible, setIsSlideBarVisible] = useState(false);
    console.log(image)

    function handleOpenSlideBar(){
        setIsSlideBarVisible(true);
    };

    function handleCloseSlideBar(){
        setIsSlideBarVisible(false);
    };

    return(
        <MovieCardContainer variant={variant} >
            <MovieCardWrapper variant={variant} onClick={handleOpenSlideBar}>
                <Image src={image} width={240} height={360}  alt="MoviePhoto"/>
                <MovieWrapper variant={variant}>
                    <MovieContent variant={variant}>
                        <MovieTitle variant={variant}>
                        { variant === 'detailed' && (
                            <span>Há 2 dias</span>
                        )}
                            <h3>{title}</h3>
                            <p>George Orwell</p>
                        </MovieTitle>
                        <StarsMovieCardContainer variant={variant}>
                                <div>
                                    <Star weight="fill" />
                                    <Star weight="fill" />
                                    <Star weight="fill" />
                                    <Star weight="fill" />
                                    <Star />
                                </div>
                                { variant === 'expanded' && (
                                    <p>3 avaliações</p>
                                )}
                        </StarsMovieCardContainer>
                    </MovieContent>
                    { variant === 'detailed' && (
                        <MovieDescription>
                            <p>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. 
                                Penatibus id vestibulum imperdiet a at imperdiet lectu...
                            </p>
                        </MovieDescription>
                    )}
                </MovieWrapper>
            </MovieCardWrapper>
            { variant === 'expanded' && (
                        <MovieData>
                            <div>
                                <BookOpen size={24} fill="#50B2C0" />
                                <div>
                                    <p>Categoria</p> 
                                    <h3>Computação, educação</h3>
                                </div>
                            </div>
                            <div>
                                <Books size={24} fill="#50B2C0" />
                                <div>
                                    <p>Páginas</p> 
                                    <h3>160</h3> 
                                </div>
                            </div>
                        </MovieData>
                    )}
                    {isSlideBarVisible && (
                        <SliderOverlay onClick={handleCloseSlideBar}>  
                            <SlideBar onClick={(e) => e.stopPropagation()} />
                        </SliderOverlay>
                    )}
        </MovieCardContainer>
        
    )
};