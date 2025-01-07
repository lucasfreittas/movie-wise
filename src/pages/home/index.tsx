import { Comments } from "@/components/Comments";
import { HomeContainer, HomeContent, LastReview, PopularMovies, RecentReviews, ReviewsContent, TitleContainer } from "./styles";

import { ChartLineUp, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { MovieCard } from "@/components/MovieCard";

import DefaultImage from '../../assets/default-image-path.jpg';

import * as streamingAvailability from "streaming-availability";
import { GetServerSideProps } from "next";
import { useState } from "react";

type ImageSet = {
    verticalPoster: {
      w240: string;
      w480: string;
      w720: string;
    };

    horizontalBackdrop: {
      w360: string;
      w480: string;
      w720: string;
    }
  };

  type Genres = {
    id: String,
    name: String,
  };

  type StreamingOptions = {
    br: {
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
    }[];
  };  

type Show = {
    title: string;
    imageSet: ImageSet
    availableOn: string[];
    firstAirYear: number | null;
    creators: string[];
    directors: string[];
    rating: number;
    overview: String;
    genres: Genres[];
    streamingOptions: StreamingOptions;
  };
  
  type Data = {
    hasMore: boolean;
    nextCursor: string;
    shows: Show[];
  };
  
  type HomeProps = {
    data: Data;
  };

  export default function Home({ data }: HomeProps) {

    const series = data.series;
    const movies = data.movies;
    
    return(
        <HomeContainer>
            <TitleContainer>
                <ChartLineUp size={32} fill="#50B2C0" />
                <h1>Trending</h1>
            </TitleContainer>
            <HomeContent>
                 <PopularMovies>
                    <div className="SectionTitle">
                        <h3>Top <strong>movies</strong> of the week </h3>
                    </div>
                    <div className="MovieWrapper">
                      {movies.slice(0, 6).map((show, index) => (
                        <MovieCard 
                          variant="default"
                          key={index}
                          title={show.title}
                          primaryImage={show.imageSet.verticalPoster.w240}
                          secondaryImage={show.imageSet.horizontalBackdrop?.w360 || DefaultImage.src}
                          director={show.directors?.[0] || show.creators?.[0] || "Desconhecido"}
                          rating={show.rating}
                          overview={show.overview}
                          genres={show.genres}
                          streamingOptions={show.streamingOptions.br}
                      />
                     ))}
                  </div>
                </PopularMovies>
                <PopularMovies>
                    <div className="SectionTitle">
                        <h3>Top <strong>shows</strong> of the week</h3>
                    </div>
                    <div className="MovieWrapper">
                      {series.slice(0, 6).map((show, index) => (
                        <MovieCard 
                          variant="default"
                          key={index}
                          title={show.title}
                          primaryImage={show.imageSet.verticalPoster.w240}
                          secondaryImage={show.imageSet.horizontalBackdrop?.w360 || DefaultImage.src}
                          director={show.directors?.[0] || show.creators?.[0] || "Desconhecido"}
                          rating={show.rating}
                          overview={show.overview}
                          genres={show.genres}
                          streamingOptions={show.streamingOptions.br}
                      />
                     ))}
                  </div>
                </PopularMovies>
            </HomeContent>
        </HomeContainer>
    )
};

// Função para normalizar os dados e substituir 'undefined' por 'null'
function normalizeData(data: any): any {
    if (Array.isArray(data)) {
      return data.map(normalizeData); 
    }
    if (data !== null && typeof data === 'object') {
      return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          value === undefined ? null : normalizeData(value), // Substitui 'undefined' por 'null'
        ])
      );
    }
    return data;
  }
  
  export const getServerSideProps: GetServerSideProps = async () => {
    const RAPID_API_KEY = process.env.NEXT_PUBLIC_STREAMING_API_KEY; // Sua chave da API
  
    const client = new streamingAvailability.Client(
      new streamingAvailability.Configuration({
        apiKey: RAPID_API_KEY,
      })
    );
  
    const { shows: series, nextCursor: nextCursorSeries, hasMore: hasMoreSeries } =
    await client.showsApi.searchShowsByFilters({
      country: "br",
      catalogs: ["netflix", "prime", "disney", "apple", "hbo", "paramount", "mubi", "curiosity", "plutotv"],
      orderBy: "popularity_1week",
      showType: "series",
      ratingMin: 70,
    });

  // Busca dados para filmes
  const { shows: movies, nextCursor: nextCursorMovies, hasMore: hasMoreMovies } =
    await client.showsApi.searchShowsByFilters({
      country: "br",
      catalogs: ["netflix", "prime", "disney", "apple", "hbo", "paramount", "mubi", "curiosity", "plutotv"],
      orderBy: "popularity_1week",
      showType: "movie",
      ratingMin: 70,
    });
    
     // Normaliza os dados, substituindo qualquer 'undefined' por 'null'
    const normalizedSeries = normalizeData(series);
    const normalizedMovies = normalizeData(movies);

    return {
      props: {
        data: {
          series: normalizedSeries,
          movies: normalizedMovies,
          hasMoreSeries,
          nextCursorSeries,
          hasMoreMovies,
          nextCursorMovies,
        },
      },
    };
  };
  