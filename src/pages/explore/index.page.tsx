import { Input } from "@/components/Input";
import { ExploreContainer, ExploreWrapper, MoviesContainer, TagsContainer, TitleContainer } from "./styles";

import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { Tag } from "@/components/Tag";
import { useState } from "react";
import { MovieCard } from "@/components/MovieCard";
import { SlideBar } from "@/components/SlideBar";


export default function Explore( ){

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isSlideBarOpen, setIsSlideBarOpen] = useState(false);

    const categories = [
        "Tudo",
        "Computação",
        "Educação",
        "Fantasia",
        "Ficção Científica",
        "Horror",
        "HQs",
        "Suspense"
    ];

    function handleTagClick(index: number) {
        setSelectedIndex(index);
    };

    const handleMovieCardClick = () => {
        setIsSlideBarOpen(true);  // Abre o SlideBar
      };

    const handleCloseSlideBar = () => {
        setIsSlideBarOpen(false);  // Fecha o SlideBar
    };

    return(
        <ExploreContainer>
            <ExploreWrapper>
                <TitleContainer>
                    <div>
                        <Binoculars size={32} fill="#50B2C0" />
                        <h1>Explorar</h1>
                    </div>
                    <Input placeholder="Buscar filme ou diretor" />
                </TitleContainer>
                <TagsContainer>
                    {categories.map((category, index) => (
                            <Tag
                                key={index}
                                tagName={category}
                                clicked={selectedIndex === index} 
                                onClick={() => handleTagClick(index)} 
                            />
                        ))}
                </TagsContainer>
                <MoviesContainer>
                    {[...Array(15)].map((_, index) => (
                        <MovieCard
                        key={index}
                        variant="default"
                        onClick={() => handleMovieCardClick}
                        />
                    ))}
                </MoviesContainer>

                {isSlideBarOpen && (
                    <SlideBar />
                )}
            </ExploreWrapper>
        </ExploreContainer>
    )
};