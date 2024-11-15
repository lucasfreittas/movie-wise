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
  };

type Show = {
    originalTitle: string;
    imageSet: ImageSet
    availableOn: string[];
    firstAirYear: number | null;
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
    "Tudo",
    "Computação",
    "Educação",
    "Fantasia",
    "Ficção Científica",
    "Horror",
    "HQs",
    "Suspense",
  ];

  const shows = data.shows;

  function handleTagClick(index: number) {
    setTagSelectedIndex(index);
  }

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
                    title={show.originalTitle}
                    image={show.imageSet.verticalPoster.w240}
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
    return data.map(normalizeData); // Recursão para arrays
  }
  if (data !== null && typeof data === 'object') {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value === undefined ? null : normalizeData(value), // Substitui 'undefined' por 'null'
      ])
    );
  }
  return data; // Retorna o valor caso seja um tipo primitivo
}

export const getServerSideProps: GetServerSideProps = async () => {
  const RAPID_API_KEY = process.env.NEXT_PUBLIC_STREAMING_API_KEY; // Sua chave da API

  const client = new streamingAvailability.Client(
    new streamingAvailability.Configuration({
      apiKey: RAPID_API_KEY,
    })
  );

  // Chama a API para pegar dados do show
  const data = await client.showsApi.searchShowsByFilters({
	country: "br",
	catalogs: ["netflix", "prime", "disney", "apple", "hbo"],
    ratingMin: 70,
    yearMin: 2020,
    orderBy: "rating" 
});

  // Normaliza os dados, substituindo qualquer 'undefined' por 'null'
  const normalizedShows = normalizeData(data);

  return {
    props: {
      data: normalizedShows,
    },
  };
};
