import { ButtonLoadMore, ExploreContainer, ExploreWrapper, MoviesContainer, TagsContainer, TitleContainer } from "./styles";

import { MovieCard } from "@/components/MovieCard";
import { Input } from "@/components/Input";
import { Tag } from "@/components/Tag";

import { Binoculars, ArrowCircleDown } from "@phosphor-icons/react/dist/ssr";

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
  };
};

type Genres = {
  id: string;
  name: string;
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
  imageSet: ImageSet;
  availableOn: string[];
  firstAirYear: number | null;
  creators: string[];
  directors: string[];
  rating: number;
  overview: string;
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
  const [shows, setShows] = useState(data.shows);
  const [nextCursor, setNextCursor] = useState(data.nextCursor);
  const [hasMore, setHasMore] = useState(data.hasMore);

  const categories = [
    "All",
    "Netflix",
    "Prime Video",
    "Disney+",
    "Max",
    "Apple TV",
    "Paramount+",
    "Mubi",
  ];

  function handleTagClick(index: number) {
    setTagSelectedIndex(index);
  }

  console.log(shows)

  async function loadMoreMovies() {
    if (hasMore) {
      const RAPID_API_KEY = process.env.NEXT_PUBLIC_STREAMING_API_KEY;
      const client = new streamingAvailability.Client(
        new streamingAvailability.Configuration({
          apiKey: RAPID_API_KEY,
        })
      );
  
      const { shows, nextCursor: newNextCursor, hasMore } = await client.showsApi.searchShowsByFilters({
        country: "br",
        catalogs: ["netflix", "prime", "disney", "apple", "hbo", "paramount", "mubi"],
        ratingMin: 80,
        orderBy: "popularity_1week",
        cursor: nextCursor!, // Afirma que nextCursor não será undefined
      });
  
      setShows((prevShows) => [...prevShows, ...normalizeData(shows)]);
      setNextCursor(newNextCursor!); // Afirma que o nextCursor não será undefined
      setHasMore(hasMore);
    }
  };
  
  return (
    <ExploreContainer>
      <ExploreWrapper>
        <TitleContainer>
          <div>
            <Binoculars size={32} fill="#50B2C0" />
            <h1>Explore</h1>
          </div>
          <Input placeholder="Search for a movie or director" />
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
        {hasMore && (
          <ButtonLoadMore 
            onClick={loadMoreMovies}
          >
            Load more
            <ArrowCircleDown size={32}/>
          </ButtonLoadMore>
        )}
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
  const RAPID_API_KEY = process.env.NEXT_PUBLIC_STREAMING_API_KEY;

  const client = new streamingAvailability.Client(
    new streamingAvailability.Configuration({
      apiKey: RAPID_API_KEY,
    })
  );

  const { shows, nextCursor, hasMore } = await client.showsApi.searchShowsByFilters({
    country: "br",
    catalogs: ["netflix", "prime", "disney", "apple", "hbo", "paramount", "mubi"],
    ratingMin: 80,
    orderBy: "popularity_1week",
  });

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
