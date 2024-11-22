import { Comments } from "../Comments";
import { MovieCard } from "../MovieCard";
import { CommentsWrapper, MovieWrapper, SlideBarContainer } from "./styles";

import { X } from "@phosphor-icons/react/dist/ssr";

type Genres = {
  id: String,
  name: String,
}

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

interface SlideBarProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title: string;
  primaryImage: string;
  secondaryImage: string;
  director: String;
  rating: number;
  overview: String;
  genres: Genres[];
  streamingOptions: StreamingOptions[];
  close: React.Dispatch<React.SetStateAction<boolean>>;
};


export function SlideBar({
  onClick,
  title,
  primaryImage,
  secondaryImage,
  director,
  rating,
  overview,
  genres,
  streamingOptions,
  close,
}: SlideBarProps) {

  
  return (
    <SlideBarContainer onClick={onClick}>
        <X size={40} onClick={() => close(false)}/>
        <MovieWrapper>
          <MovieCard 
            variant="expanded"
            title={title}
            primaryImage={primaryImage}
            secondaryImage={secondaryImage}
            director={director}
            rating={rating}
            overview={overview}
            genres={genres}
            streamingOptions={streamingOptions}
          />
        </MovieWrapper>
        <CommentsWrapper>
            <div className="CommentTitle">
                <h3>Avaliações</h3>
                <button>Avaliar</button>
            </div>
            <div className="CommentContainer">          
              <Comments variant="mini" />
              <Comments variant="mini" />
              <Comments variant="mini" />
            </div>
        </CommentsWrapper>
    </SlideBarContainer>
  );
}
