import { Comments } from "@/components/Comments";
import { HomeContainer, HomeContent, LastReview, PopularMovies, RecentReviews, ReviewsContent, TitleContainer } from "./styles";

import { ChartLineUp, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { MovieCard } from "@/components/MovieCard";

export default function Home (){
    
    return(
        <HomeContainer>
            <TitleContainer>
                <ChartLineUp size={32} fill="#50B2C0" />
                <h1>Início</h1>
            </TitleContainer>
            <HomeContent>
                <ReviewsContent>
                    <LastReview>
                        <div className="SectionTitle">
                            <h3>Sua última avaliação</h3>
                            <button>Ver todos <CaretRight size={16}/></button>
                        </div>
                        <MovieCard variant="detailed" />
                    </LastReview>
                    <RecentReviews>
                        <div className="titleRecentReviews">
                            <h3>Avaliações mais recentes</h3>
                        </div>
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                    </RecentReviews>
                </ReviewsContent>
                <PopularMovies>
                    <div className="SectionTitle">
                        <h3>Livros populares</h3>
                        <button>Ver todos <CaretRight size={16}/></button>
                    </div>
                    <MovieCard variant="mini" />
                    <MovieCard variant="mini" />
                    <MovieCard variant="mini"/>
                    <MovieCard variant="mini"/>
                </PopularMovies>
            </HomeContent>
        </HomeContainer>
    )
};