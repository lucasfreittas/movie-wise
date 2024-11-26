import { Comments } from "@/components/Comments";
import { HomeContainer, HomeContent, LastReview, PopularMovies, RecentReviews, ReviewsContent, TitleContainer } from "./styles";

import { ChartLineUp, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { MovieCard } from "@/components/MovieCard";

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

    const shows = data.shows;
    console.log(data)   
    
    return(
        <HomeContainer>
            <TitleContainer>
                <ChartLineUp size={32} fill="#50B2C0" />
                <h1>Home</h1>
            </TitleContainer>
            <HomeContent>
                <ReviewsContent>
                    <LastReview>
                        <div className="SectionTitle">
                            <h3>Your last movie</h3>
                            <button>See more <CaretRight size={16}/></button>
                        </div>
                        <MovieCard variant="detailed" />
                    </LastReview>
                    <RecentReviews>
                        <div className="titleRecentReviews">
                            <h3>Recent watched movies</h3>
                        </div>
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                    </RecentReviews>
                </ReviewsContent>
                <PopularMovies>
                    <div className="SectionTitle">
                        <h3>Top movies of the week</h3>
                    </div>
                    {shows.slice(0, 5).map((show, index) => (
                      <MovieCard 
                        variant="mini"
                        key={index}
                        title={show.title}
                        primaryImage={show.imageSet.verticalPoster.w240}
                        secondaryImage={show.imageSet.horizontalBackdrop.w360}
                        director={show.directors?.[0] || show.creators?.[0] || "Desconhecido"}
                        rating={show.rating}
                        overview={show.overview}
                        genres={show.genres}
                        streamingOptions={show.streamingOptions.br}
                    />
                  ))}
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
  
    // Chama a API para pegar dados do show
    const { shows, nextCursor, hasMore } = await client.showsApi.searchShowsByFilters({
      country: "br",
      catalogs: ["netflix", "prime", "disney", "apple", "hbo", "paramount", "mubi", "curiosity", "plutotv"],
        ratingMin: 80,
        orderBy: "popularity_1week",
    });
    
    // Normaliza os dados, substituindo qualquer 'undefined' por 'null'
    const normalizedShows = normalizeData(shows);

    return {
      props: {
        data: {
          shows: normalizedShows,
          nextCursor,
          hasMore,
        },
      },
    };
  };
  