import { useState } from "react";
import Image from "next/image";
import {
  MovieCardContainer,
  MovieCardWrapper,
  MovieContent,
  MovieData,
  MovieDescription,
  MovieTitle,
  MovieWrapper,
  StarsMovieCardContainer,
} from "./styles";

import { Star, BookOpen, Books } from "@phosphor-icons/react/dist/ssr";
import { SliderOverlay } from "../SlideBar/styles";
import { SlideBar } from "../SlideBar";

type MovieCardProps = {
  variant: "mini" | "default" | "detailed" | "expanded";
  title: string;
  primaryImage: string;
  secondaryImage: string;
  director: String;
  rating: number;
  overview: String;
};

export function MovieCard({
  variant,
  title,
  primaryImage,
  secondaryImage,
  director,
  rating,
  overview
}: MovieCardProps) {
  const [isSlideBarVisible, setIsSlideBarVisible] = useState(false);
  const [imageToShow, setImageToShow] = useState(primaryImage);

  const handleImageError = () => {
    setImageToShow(secondaryImage);
  };

  function renderStars(rating: number){
    const filledStars = Math.floor(rating / 20);

    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} weight={index < filledStars ? "fill" : "regular"} />
    ));
  };

  function handleOpenSlideBar() {
    variant !== "expanded" && setIsSlideBarVisible(true);
  };
  
  return (
    <MovieCardContainer variant={variant}>
      <MovieCardWrapper variant={variant} onClick={handleOpenSlideBar}>
        <Image
          src={imageToShow}
          width={240}
          height={360}
          alt="MoviePhoto"
          onError={handleImageError} // Ao falhar, chama o handleImageError
        />
        <MovieWrapper variant={variant}>
          <MovieContent variant={variant}>
            <MovieTitle variant={variant}>
              {variant === "detailed" && <span>Há 2 dias</span>}
              <h3>{title}</h3>
              <p>{director}</p>

            </MovieTitle>
            {variant === "expanded" && (
            <MovieDescription>
              <p>
                {overview}
              </p>
            </MovieDescription>
          )}
            <StarsMovieCardContainer variant={variant}>
              <div>
                {renderStars(rating)}
              </div>
              {variant === "expanded" && <p>3 avaliações</p>}
            </StarsMovieCardContainer>
          </MovieContent>
          {variant === "detailed" && (
            <MovieDescription>
              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectu...
              </p>
            </MovieDescription>
          )}
        </MovieWrapper>
      </MovieCardWrapper>
      {variant === "expanded" && (
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
        <SliderOverlay onClick={() => setIsSlideBarVisible(false)}>
          <SlideBar
            title={title}
            primaryImage={imageToShow}
            secondaryImage={imageToShow}
            director={director}
            rating={rating}
            onClick={(e) => e.stopPropagation()}
            overview={overview}
          />
        </SliderOverlay>
      )}
    </MovieCardContainer>
  );
}
