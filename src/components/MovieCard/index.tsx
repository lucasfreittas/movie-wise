import { useState, useEffect } from "react";
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
import Link from "next/link";

type Genres = {
  id: String,
  name: String,
};

type StreamingOptions = {
    link: string;
    videoLink: string;
    service: {
      name: string;
      id: string;
      imageSet: {
        darkThemeImage: string;
        lightThemeImage: string;
        whiteImage: string;
      };
    };
};

type MovieCardProps = {
  variant: "mini" | "default" | "detailed" | "expanded";
  title: string;
  primaryImage: string;
  secondaryImage: string;
  director: String;
  rating: number;
  overview: String;
  genres: Genres[];
  streamingOptions: StreamingOptions[];
};

export function MovieCard({
  variant,
  title,
  primaryImage,
  secondaryImage,
  director,
  rating,
  overview,
  genres,
  streamingOptions,
}: MovieCardProps) {
  const [isSlideBarVisible, setIsSlideBarVisible] = useState(false);
  const [imageToShow, setImageToShow] = useState(primaryImage);

  const handleImageError = () => {
    setImageToShow(secondaryImage);
  };

  useEffect(() => {
    // Atualizar a imagem sempre que o filme mudar
    setImageToShow(primaryImage);
  }, [primaryImage]); // Quando primaryImage mudar, atualizar a imagem

  function renderStars(rating: number) {
    const filledStars = Math.ceil(rating / 20);
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} weight={index < filledStars ? "fill" : "regular"} />
    ));
  }

  function handleOpenSlideBar() {
    variant !== "expanded" && setIsSlideBarVisible(true);
  }

  function uniqueStreamings() {
    return streamingOptions.filter(
      (streaming, index, self) =>
        index === self.findIndex((s) => s.service.id === streaming.service.id)
    );
  }

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
                <p>{overview}</p>
              </MovieDescription>
            )}
            <StarsMovieCardContainer variant={variant}>
              <div>{renderStars(rating)}</div>
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
          <div className="genresContainer">
            <div className="genreTitle">
              <BookOpen size={24} fill="#50B2C0" />
              <p>Genres:</p>
            </div>
            <div>
              <h3>{genres.map((genre) => genre.name).join(", ")}</h3>
            </div>
          </div>
          <div className="streamingContainer">
            <div className="streamingTitle">
              <Books size={24} fill="#50B2C0" />
              <p>Streamings:</p>
            </div>
            <div className="streamingOptions">
              {uniqueStreamings().map((streaming, index) => (
                <Link key={index} href={streaming.link} target="_blank">
                  <div>
                    <Image
                      src={streaming.service.imageSet.lightThemeImage}
                      height={48}
                      width={48}
                      alt="Streaming service"
                    />
                  </div>
                </Link>
              ))}
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
            genres={genres}
            streamingOptions={streamingOptions}
            close={setIsSlideBarVisible}
          />
        </SliderOverlay>
      )}
    </MovieCardContainer>
  );
}
