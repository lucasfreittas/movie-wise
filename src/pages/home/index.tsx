import Comments from "@/components/Comments";
import { HomeContainer, HomeContent, PopularMovies, RecentReviews, TitleContainer } from "./styles";

import { ChartLineUp, CaretRight } from "@phosphor-icons/react/dist/ssr";
import MovieCard from "@/components/MovieCard";

export default function Home (){
    return(
        <HomeContainer>
            <TitleContainer>
                <ChartLineUp size={32} fill="#50B2C0" />
                <h1>Início</h1>
            </TitleContainer>
            <HomeContent>
                <RecentReviews>
                    <div className="titleRecentReviews">
                        <h3>Hello Recent Review</h3>
                    </div>
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                </RecentReviews>
                <PopularMovies>
                    <div>
                        <h3>Hello Popular Movie</h3>
                        <button>Ver todos <CaretRight size={16}/></button>
                    </div>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </PopularMovies>
            </HomeContent>
        </HomeContainer>
    )
};