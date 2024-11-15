import { Comments } from "../Comments";
import { MovieCard } from "../MovieCard";
import { CommentsWrapper, MovieWrapper, SlideBarContainer } from "./styles";

import { X } from "@phosphor-icons/react/dist/ssr";

interface SlideBarProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function SlideBar({ onClick }: SlideBarProps) {
  return (
    <SlideBarContainer onClick={onClick}>
        <X size={40}/>
        <MovieWrapper>
            <MovieCard variant="expanded"/>
        </MovieWrapper>
        <CommentsWrapper>
            <div className="CommentTitle">
                <h3>Avaliações</h3>
                <button>Ver todos</button>
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
