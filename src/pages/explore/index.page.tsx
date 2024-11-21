import { Input } from "@/components/Input";
import { ExploreContainer, ExploreWrapper, MoviesContainer, TagsContainer, TitleContainer } from "./styles";
import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { Tag } from "@/components/Tag";
import { useState } from "react";
import { MovieCard } from "@/components/MovieCard";
import * as streamingAvailability from "streaming-availability";
import { GetServerSideProps } from "next";

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
        imageSet: {
          darkThemeImage: string;
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
  
  type ExploreProps = {
    data: Data;
  };

export default function Explore({ data }: ExploreProps) {
  const [tagSelectedIndex, setTagSelectedIndex] = useState(0);

    
  const categories = [
    "Todos",
    "Netflix",
    "Prime Video",
    "Disney+",
    "Max",
    "Apple TV",
    "Paramount+",
    "Mubi",
  ];

  const shows = data.shows;

  function handleTagClick(index: number) {
    setTagSelectedIndex(index);
  };

  return (
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
              clicked={tagSelectedIndex === index}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </TagsContainer>
        <MoviesContainer>
            {shows.map((show, index) => (
                <MovieCard 
                  variant="default"
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
        </MoviesContainer>
      </ExploreWrapper>
    </ExploreContainer>
  );
}

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
  const currentYear = new Date().getFullYear(); // Obtém o ano atual
  const shows = await client.showsApi.searchShowsByFilters({
	country: "br",
	catalogs: ["netflix", "prime", "disney", "apple", "hbo", "paramount", "mubi", "curiosity", "plutotv"],
    ratingMin: 70,
    yearMin: currentYear,
    orderBy: "rating" 
});
  
  // Normaliza os dados, substituindo qualquer 'undefined' por 'null'
  const normalizedShows = normalizeData(shows);

  return {
    props: {
      data: normalizedShows,
    },
  };
};
